export const config = {
  highlight: false,
  isAsync: true,
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
      desc: "The object to start the event at",
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
      id: "destroyWhenStopped",
      name: "Release",
      desc: "Releasing this event will free its memory when it stops playing and will remove it from the tag on the next tick",
      type: "boolean",
      initialValue: "true",
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
  listName: "Start Event At Object",
  displayText:
    "Start event [i]{0}[/i] with tag [i]{1}[/i] at object [i]{2}[/i] at image point [i]{3}[/i] (destroy: [i]{4}[/i], forward mode: [i]{5}[/i], autoUpdate: [i]{6}[/i], autoVelocity: [i]{7}[/i])",
  description: "Start the specified FMOD event at the specified object.",
};

export const expose = true;

export default async function (
  name,
  tag,
  objectClass,
  imagePoint,
  destroyWhenStopped,
  forwardMode,
  autoUpdate,
  autoVelocity
) {
  if (!this.curInst) return;
  // reusing actions that are already implemented
  const inst = objectClass.getFirstPickedInstance();
  this.StartEvent(name, tag, destroyWhenStopped && autoUpdate === false);
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
      destroyWhenStopped
    );
  }
}
