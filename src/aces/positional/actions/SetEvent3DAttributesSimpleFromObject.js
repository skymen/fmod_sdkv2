export const config = {
  id: "SetEventSimpleAttributesFromObject",
  highlight: false,
  isAsync: true,
  listName: "Set Event Simple Attributes From Object",
  displayText:
    "Set event [i]{0}[/i] with tag [i]{1}[/i] 3D attributes from object [i]{2}[/i] at image point [i]{3}[/i] (forward mode: [i]{4}[/i], autoUpdate: [i]{5}[/i], autoVelocity: [i]{6}[/i], autoDestroy: [i]{7}[/i])",
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
      id: "imagePoint",
      name: "Image Point",
      desc: "The image point to start the event at",
      type: "any",
      initialValue: "0",
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
    {
      id: "autoDestroy",
      name: "Auto Destroy",
      desc: "Automatically stop the event when the object is destroyed (only if autoUpdate is enabled)",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (
  name,
  tag,
  objectClass,
  imagePoint,
  forwardMode,
  autoUpdate,
  autoVelocity,
  autoDestroy
) {
  if (!this.curInst) return;
  const inst = objectClass.getFirstPickedInstance();
  await this._SetEvent3DAttributesFromObject(
    name,
    tag,
    inst,
    imagePoint,
    forwardMode,
    0, //vx,
    0, //vy,
    0 //vz
  );
  if (autoUpdate) {
    this.addEvent3DAutoUpdate(
      name,
      tag,
      inst,
      imagePoint,
      forwardMode,
      autoVelocity,
      autoDestroy
    );
  }
}
