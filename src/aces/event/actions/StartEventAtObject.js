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
      id: "object",
      name: "Object",
      desc: "The object to start the event at",
      type: "object",
      allowedPluginIds: ["<world>"],
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
      id: "destroyWhenStopped",
      name: "Release",
      desc: "Releasing this event will free its memory when it stops playing and will remove it from the tag on the next tick",
      type: "boolean",
      initialValue: "true",
    },
    {
      id: "forwardMode",
      name: "Forward Mode",
      desc: "The forward mode",
      type: "combo",
      initialValue: "camera",
      items: [{ camera: "2D" }, { angle: "3D" }],
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
    "Start event [i]{0}[/i] with tag [i]{2}[/i] at object [i]{1}[/i] (destroy: {3}, forward mode: {4}, autoUpdate: [i]{5}[/i], autoVelocity: [i]{6}[/i])",
  description: "Start the specified FMOD event at the specified object.",
};

export const expose = true;

export default async function (
  name,
  tag,
  objectClass,
  destroyWhenStopped,
  forwardMode,
  autoUpdate,
  autoVelocity
) {
  if (!this.curInst) return;
  // reusing actions that are already implemented
  const inst = objectClass.getFirstPickedInstance();
  await this.StartEvent(name, tag, destroyWhenStopped);
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
