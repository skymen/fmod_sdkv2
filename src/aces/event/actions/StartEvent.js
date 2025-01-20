export const config = {
  highlight: false,
  isAsync: true,
  listName: "Start Event",
  displayText: "Start event [i]{0}[/i] with tag [i]{1}[/i] (destroy: {2})",
  description: "Start the specified FMOD event.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the event",
      type: "string",
      initialValue: "",
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
  ],
};

export const expose = true;

export default async function (name, tag, destroyWhenStopped) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("start-event", [
    name,
    tag,
    destroyWhenStopped,
  ]);
}
