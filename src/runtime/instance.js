import { id } from "../../config.caw.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      const properties = this._getInitProperties();
      if (properties) {
      }
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

    _loadFromJson(o) {
      // load state for savegames
    }
  };
}
