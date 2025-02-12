import { id } from "../../config.caw.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      this.allBanks = [];
      this.autoSuspend = true;

      if (properties) {
        const allBanks = properties[0].split("\n");
        const preloadBanks = properties[1].split("\n");
        const preloadBanksNonBlocking = properties[2].split("\n");
        this.autoSuspend = properties[3];
        (async () => {
          for (let i = 0; i < allBanks.length; i++) {
            const bank = allBanks[i];
            if (this.allBanks.find((x) => x.path === bank)) continue;
            if (!bank || bank.trim() === "") continue;
            this.allBanks.push({
              path: bank,
              preload: false,
              nonBlocking: true,
              name: bank.split("/").pop(),
              url: await this.runtime.assets.getProjectFileUrl(bank),
            });
          }
          for (let i = 0; i < preloadBanks.length; i++) {
            const preloadBank = preloadBanks[i];
            if (!preloadBank || preloadBank.trim() === "") continue;
            const bank = this.allBanks.find((x) => x.path === preloadBank);
            if (bank) {
              bank.preload = true;
              bank.nonBlocking = false;
            } else {
              this.allBanks.push({
                path: preloadBank,
                preload: true,
                nonBlocking: false,
                name: preloadBank.split("/").pop(),
                url: await this.runtime.assets.getProjectFileUrl(preloadBank),
              });
            }
          }
          for (let i = 0; i < preloadBanksNonBlocking.length; i++) {
            const preloadBank = preloadBanksNonBlocking[i];
            if (!preloadBank || preloadBank.trim() === "") continue;
            const bank = this.allBanks.find((x) => x.path === preloadBank);
            if (bank) {
              bank.preload = true;
              bank.nonBlocking = true;
            } else {
              this.allBanks.push({
                path: preloadBank,
                preload: true,
                nonBlocking: true,
                name: preloadBank.split("/").pop(),
                url: await this.runtime.assets.getProjectFileUrl(preloadBank),
              });
            }
          }
        })();
      }

      this.cppInst = null;
      this.jsInst = null;
      this.curInst = null;
      this.wasSuspended = false;
      this.runtime.sdk.addLoadPromise(
        new Promise((resolve) => {
          runOnStartup(async () => {
            await this._preInit();
            resolve();
          });
        })
      );

      this.runtime.addEventListener("suspend", () => {
        this.OnSuspend(true);
      });
      this.runtime.addEventListener("resume", () => {
        this.OnSuspend(false);
      });
      this._setTicking(true);
    }

    _trigger(method) {
      super._trigger(self.C3.Plugins[id].Cnds[method]);
    }

    _release() {
      super._release();
    }

    _saveToJson() {
      return {
        // data to be saved for savegames
      };
    }

    _tick() {
      if (!this.curInst) return;
      this.curInst.SendMessage("update");
    }

    _onSuspend(suspended) {
      if (this.autoSuspend) {
        this.SetSuspended(suspended);
      }
    }

    async _preInit() {
      this.jsInst = C3.Plugins.skymen_fmod_js
        ? globalThis.__skymen_fmod_js
        : null;
      this.cppInst = C3.Plugins.skymen_fmod_cpp
        ? globalThis.__skymen_fmod_cpp
        : null;

      if (this.cppInst && this.cppInst._isWrapperExtensionAvailable)
        this.curInst = this.cppInst;
      else if (this.jsInst) this.curInst = this.jsInst;
      else {
        let message = "";
        if (this.cppInst)
          message =
            "CPP fmod implementation is not supported on this platform. Please add a fmod JS API to your project";
        else
          message =
            "No fmod implementation found. Please add a fmod JS API or CPP API to your project.";

        alert(message);
        throw new Error(message);
      }
      await Promise.all(
        this.allBanks.map(async (bank) => {
          await this.curInst.SendMessageAsync("pre-init-load-bank", [
            bank.path,
            bank.preload,
            bank.nonBlocking,
            bank.name,
            bank.url,
          ]);
        })
      );
      await this.curInst.SendMessageAsync("pre-init");
    }

    _loadFromJson(o) {
      // load state for savegames
    }
  };
}
