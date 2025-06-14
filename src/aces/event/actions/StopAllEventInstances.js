export const config = {
  highlight: false,
  isAsync: true,
  listName: "Stop All Event Instances",
  displayText:
    "Stop all [i]{0}[/i] events (allow fade out: [i]{1}[/i], release: [i]{2}[/i])",
  description: "Stop all FMOD event instances from one specific event.",
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
  await this.curInst.SendMessageAsync("stop-all-event-instances", [
    name,
    allowFadeOut,
    release,
  ]);
}
