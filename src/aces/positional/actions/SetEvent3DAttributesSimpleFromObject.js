export const config = {
  id: "SetEventSimpleAttributesFromObject",
  highlight: false,
  isAsync: true,
  listName: "Set Event Simple Attributes From Object",
  displayText:
    "Set event [i]{0}[/i] with tag [i]{1}[/i] 3D attributes from object [i]{2}[/i] (forward mode: [i]{3}[/i])",
  description:
    "Set the 3D attributes of the specified FMOD event from the specified object.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "",
      type: "string",
      initialValue: "",
    },
    {
      id: "tag",
      name: "Tag",
      desc: "",
      type: "string",
      initialValue: "",
    },
    {
      id: "object",
      name: "Object",
      desc: "",
      type: "object",
      allowedPluginIds: ["<world>"],
    },
    {
      id: "forwardMode",
      name: "Forward Mode",
      desc: "",
      type: "combo",
      initialValue: "camera",
      items: [{ camera: "Camera" }, { angle: "Angle" }],
    },
  ],
};

export const expose = true;

export default async function (name, tag, objectClass, forwardMode) {
  await this.SetEvent3DAttributesFromObject(
    name,
    tag,
    objectClass,
    forwardMode,
    0, //vx,
    0, //vy,
    0 //vz
  );
}
