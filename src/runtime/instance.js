import { id } from "../../config.caw.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      this.allBanks = [];
      this.autoSuspend = true;
      this.tickCallbacks = new Map();
      this.oldPositionKeeper = new WeakMap();
      this.advancedSettings = {};

      if (properties) {
        const allBanks = properties[0].split("\n");
        const preloadBanks = properties[1].split("\n");
        const preloadBanksNonBlocking = properties[2].split("\n");
        this.autoSuspend = properties[3];
        try {
          this.advancedSettings = JSON.parse(properties[4]);
        } catch (e) {}
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
        this._onSuspend(true);
      });
      this.runtime.addEventListener("resume", () => {
        this._onSuspend(false);
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
      const dt = this.runtime.dt;
      // go through the values of the tickCallbacks map
      this.tickCallbacks.forEach((callback, key) => {
        if (callback) {
          callback(dt);
        }
      });
    }

    async _SetEvent3DAttributesFromObject(
      name,
      tag,
      inst,
      imagePoint,
      forwardMode,
      vx,
      vy,
      vz
    ) {
      if (!this.curInst) return;
      const [x, y, z] = this.getPositionFromObject(inst, imagePoint);
      const angle = inst.angle;
      let fx = 0;
      let fy = 0;
      let fz = 1;
      let ux = 0;
      let uy = -1;
      let uz = 0;
      if (forwardMode === 1)
        [fx, fy, fz, ux, uy, uz] = [
          Math.cos(angle),
          Math.sin(angle),
          0,
          0,
          0,
          1,
        ];
      await this.SetEvent3DAttributes(
        name,
        tag,
        x,
        y,
        z,
        vx,
        vy,
        vz,
        fx,
        fy,
        fz,
        ux,
        uy,
        uz
      );
    }

    getPositionFromObject(inst, imagePoint) {
      if (inst.getImagePoint) return inst.getImagePoint(imagePoint);
      return [inst.x, inst.y, inst.totalZElevation];
    }

    addEvent3DAutoUpdate(
      name,
      tag,
      inst,
      imagePoint,
      forwardMode,
      autoVelocity
    ) {
      if (!this.curInst) return;
      const key = `${name}/${tag}`;
      if (this.tickCallbacks.has(key)) {
        this.tickCallbacks.delete(key);
      }
      this.tickCallbacks.set(key, (dt) => {
        let vx = 0;
        let vy = 0;
        let vz = 0;
        if (autoVelocity) {
          const oldPosition = this.oldPositionKeeper.get(inst);
          const [x, y, z] = this.getPositionFromObject(inst, imagePoint);
          if (oldPosition) {
            vx = (x - oldPosition[0]) / dt;
            vy = (y - oldPosition[1]) / dt;
            vz = (z - oldPosition[2]) / dt;
          }
          this.oldPositionKeeper.set(inst, [x, y, z]);
        }
        this._SetEvent3DAttributesFromObject(
          name,
          tag,
          inst,
          imagePoint,
          forwardMode,
          vx,
          vy,
          vz
        );
      });
      this.curInst
        .SendMessageAsync("wait-for-event-stop", [name, tag])
        .then(() => {
          this.tickCallbacks.delete(key);
          this.oldPositionKeeper.delete(inst);
        });
    }

    removeAllEvent3DAutoUpdate(name) {
      if (!this.curInst) return;
      const key = `${name}/`;
      this.tickCallbacks.forEach((callback, k) => {
        if (k.startsWith(key)) {
          this.tickCallbacks.delete(k);
        }
      });
    }

    removeEvent3DAutoUpdate(name, tag) {
      if (!this.curInst) return;
      const key = `${name}/${tag}`;
      if (this.tickCallbacks.has(key)) {
        this.tickCallbacks.delete(key);
      }
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
      await this.curInst.SendMessageAsync("pre-init", {
        advancedSettings: this.advancedSettings,
      });
    }

    _loadFromJson(o) {
      // load state for savegames
    }
  };
}
