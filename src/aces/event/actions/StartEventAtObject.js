export const config = {
  highlight: false,
  isAsync: true,
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the event",
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
      desc: "A given tag to target",
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
  ],
  listName: "Start Event At Object",
  displayText:
    "Start event [i]{0}[/i] with tag [i]{2}[/i] at object [i]{1}[/i] (destroy: {3}, forward mode: {4})",
  description: "Start the specified FMOD event at the specified object.",
};

export const expose = true;

export default async function (
  name,
  tag,
  objectClass,
  destroyWhenStopped,
  forwardMode
) {
  // reusing actions that are already implemented
  await this.StartEvent(name, tag, destroyWhenStopped);
  await this.SetEvent3DAttributesFromObject(
    name,
    tag,
    objectClass,
    forwardMode
  );
}
