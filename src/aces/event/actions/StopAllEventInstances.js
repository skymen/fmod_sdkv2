export const config = {
  highlight: false,
  isAsync: true,
  listName: "Stop All Events",
  displayText:
    "Stop all events [i]{0}[/i] (allow fade out: [i]{1}[/i], release: [i]{2}[/i])",
  description: "Stop all FMOD events.",
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
      id: "allowFadeOut",
      name: "Allow fade out",
      desc: "Allow fade out for the events",
      type: "boolean",
      initialValue: "true",
    },
    {
      id: "release",
      name: "Release",
      desc: "Releasing this event will free its memory when it stops playing and will remove it from the tag.",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (name, allowFadeOut, release) {
  if (!this.curInst) return;
  this.removeAllEvent3DAutoUpdate(name);
  await this.curInst.SendMessageAsync("stop-all-events", [
    name,
    allowFadeOut,
    release,
  ]);
}
