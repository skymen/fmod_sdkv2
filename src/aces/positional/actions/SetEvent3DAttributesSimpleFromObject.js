export const config = {
  id: "SetEventSimpleAttributesFromObject",
  highlight: false,
  isAsync: true,
  listName: "Set Event Simple Attributes From Object",
  displayText:
    "Set event [i]{0}[/i] with tag [i]{1}[/i] 3D attributes from object [i]{2}[/i] (forward mode: [i]{3}[/i], autoUpdate: [i]{4}[/i], autoVelocity: [i]{5}[/i])",
  description:
    "Set the 3D attributes of the specified FMOD event from the specified object.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the event",
      autocompleteId: "eventName",
      type: "string",
      initialValue: "",
    },
    {
      id: "tag",
      name: "Tag",
      desc: "The tag of the event instance",
      autocompleteId: "eventTag",
      type: "string",
      initialValue: "",
    },
    {
      id: "object",
      name: "Object",
      desc: "The object to get position and orientation from",
      type: "object",
      allowedPluginIds: ["<world>"],
    },
    {
      id: "forwardMode",
      name: "Forward Mode",
      desc: "The mode to determine the forward vector (Camera or Angle)",
      type: "combo",
      initialValue: "camera",
      items: [{ camera: "Camera" }, { angle: "Angle" }],
    },
    {
      id: "autoUpdate",
      name: "Auto Update",
      desc: "Automatically update the event's position and orientation with the object",
      type: "boolean",
      initialValue: "true",
    },
    {
      id: "autoVelocity",
      name: "Auto Velocity",
      desc: "Automatically update the event's velocity with the object",
      type: "boolean",
      initialValue: "false",
    },
  ],
};

export const expose = true;

export default async function (
  name,
  tag,
  objectClass,
  forwardMode,
  autoUpdate,
  autoVelocity
) {
  if (!this.curInst) return;
  const inst = objectClass.getFirstPickedInstance();
  await this._SetEvent3DAttributesFromObject(
    name,
    tag,
    inst,
    forwardMode,
    0, //vx,
    0, //vy,
    0 //vz
  );
  if (autoUpdate) {
    this.addEvent3DAutoUpdate(
      name,
      tag,
      objectClass,
      forwardMode,
      autoVelocity
    );
  }
}
