export const config = {
  highlight: false,
  isAsync: true,
  listName: "Stop Event",
  displayText:
    "Stop event [i]{0}[/i] with tag [i]{1}[/i] (allow fade out: [i]{2}[/i], release: [i]{3}[/i])",
  description:
    "Stop the specified FMOD event, with an option to allow fade out.",
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

export default async function (name, tag, allowFadeOut, release) {
  if (!this.curInst) return;
  this.removeEvent3DAutoUpdate(name, tag);
  await this.curInst.SendMessageAsync("stop-event", [
    name,
    tag,
    allowFadeOut,
    release,
  ]);
}
