export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Event Paused",
  displayText: "Set event [i]{0}[/i] with tag [i]{1}[/i] paused: [i]{2}[/i]",
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
      id: "paused",
      name: "Paused",
      desc: "The paused state of the event instance",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (name, tag, paused) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-event-paused", [name, tag, paused]);
}
