import {
  ADDON_CATEGORY,
  ADDON_TYPE,
  PLUGIN_TYPE,
  PROPERTY_TYPE,
} from "./template/enums.js";
import _version from "./version.js";
export const addonType = ADDON_TYPE.PLUGIN;
export const type = PLUGIN_TYPE.OBJECT;
export const id = "skymen_fmod";
export const name = "(FMOD)";
export const version = _version;
export const author = "skymen";
export const website = "https://github.com/skymen/fmod_sdkv2";
export const documentation =
  "https://www.construct.net/en/make-games/addons/1206/documentation";
export const description = "Description";
export const category = ADDON_CATEGORY.MEDIA;

export const hasDomside = false;
export const files = {
  extensionScript: {},
  fileDependencies: [],
};

// categories that are not filled will use the folder name
export const aceCategories = {
  bank: "Bank",
  bus: "Bus",
  vca: "VCA",
  event: "Event",
  parameter: "Parameter",
  positional: "Positional Events",
  listeners: "Listeners",
  general: "General",
};

export const info = {
  // icon: "icon.svg",
  // PLUGIN world only
  // defaultImageUrl: "default-image.png",
  Set: {
    // COMMON to all
    CanBeBundled: true,
    IsDeprecated: false,
    GooglePlayServicesEnabled: false,

    // BEHAVIOR only
    IsOnlyOneAllowed: false,

    // PLUGIN world only
    IsResizable: false,
    IsRotatable: false,
    Is3D: false,
    HasImage: false,
    IsTiled: false,
    SupportsZElevation: false,
    SupportsColor: false,
    SupportsEffects: false,
    MustPreDraw: false,

    // PLUGIN object only
    IsSingleGlobal: true,
  },
  // PLUGIN only
  AddCommonACEs: {
    Position: false,
    SceneGraph: false,
    Size: false,
    Angle: false,
    Appearance: false,
    ZOrder: false,
  },
};

export const properties = [
  /*
  {
    type: PROPERTY_TYPE.INTEGER,
    id: "property_id",
    options: {
      initialValue: 0,
      interpolatable: false,

      // minValue: 0, // omit to disable
      // maxValue: 100, // omit to disable

      // for type combo only
      // items: [
      //   {itemId1: "item name1" },
      //   {itemId2: "item name2" },
      // ],

      // dragSpeedMultiplier: 1, // omit to disable

      // for type object only
      // allowedPluginIds: ["Sprite", "<world>"],

      // for type link only
      // linkCallback: function(instOrObj) {},
      // linkText: "Link Text",
      // callbackType:
      //   "for-each-instance"
      //   "once-for-type"

      // for type info only
      // infoCallback: function(inst) {},
    },
    name: "Property Name",
    desc: "Property Description",
  }
  */
  {
    type: "longtext",
    id: "allBanks",
    options: {
      initialValue: "",
    },
    name: "All Banks",
    desc: "All the banks that will be used by the game. One bank path per line.",
  },
  {
    type: "longtext",
    id: "preloadBanks",
    options: {
      initialValue: "",
    },
    name: "Preload Banks",
    desc: "The banks that will be preloaded. One bank path per line.",
  },
  {
    type: "longtext",
    id: "preloadBanksNonBlocking",
    options: {
      initialValue: "",
    },
    name: "Load Banks (Non Blocking)",
    desc: "The banks that will be loaded as soon as possible but will not prevent the game from starting. One bank path per line.",
  },
  {
    type: "check",
    id: "autoSuspend",
    options: {
      initialValue: true,
    },
    name: "Auto Suspend",
    desc: "Automatically suspend FMOD when the game is suspended. Disable this if you want to control the suspend state manually.",
  },
];
