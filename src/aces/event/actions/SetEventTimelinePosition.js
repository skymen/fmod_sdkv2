export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Event Timeline position",
  displayText:
    "Set event [i]{0}[/i] with tag [i]{1}[/i] timeline position to: [i]{2}[/i]",
  description: "Set the paused state of the specified FMOD event.",
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
      id: "timelinePosition",
      name: "Timeline Position",
      desc: "The timeline position of the event instance",
      type: "number",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default async function (name, tag, position) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-event-timeline-position", [
    name,
    tag,
    position,
  ]);
}
