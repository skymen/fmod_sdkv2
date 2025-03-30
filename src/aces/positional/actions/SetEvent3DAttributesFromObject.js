export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Event 3D Attributes From Object",
  displayText:
    "Set event [i]{0}[/i] with tag [i]{1}[/i] 3D attributes from object [i]{2}[/i] (forward mode: [i]{3}[/i]) velocity: ([i]{4}[/i], [i]{5}[/i], [i]{6}[/i])",
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
      desc: "The mode to determine the forward vector (2D or 3D)",
      type: "combo",
      initialValue: "camera",
      items: [{ camera: "2D" }, { angle: "3D" }],
    },
    {
      id: "velocity-x",
      name: "Velocity X",
      desc: "X component of the event's velocity vector",
      type: "number",
      initialValue: "0",
    },
    {
      id: "velocity-y",
      name: "Velocity Y",
      desc: "Y component of the event's velocity vector",
      type: "number",
      initialValue: "0",
    },
    {
      id: "velocity-z",
      name: "Velocity Z",
      desc: "Z component of the event's velocity vector",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (
  name,
  tag,
  objectClass,
  forwardMode,
  vx,
  vy,
  vz
) {
  if (!this.curInst) return;
  const inst = objectClass.getFirstPickedInstance();
  await this._SetEvent3DAttributesFromObject(
    name,
    tag,
    inst,
    forwardMode,
    vx,
    vy,
    vz
  );
}
