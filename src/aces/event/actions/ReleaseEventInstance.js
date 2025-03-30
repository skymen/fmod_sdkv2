export const config = {
  highlight: false,
  isAsync: true,
  listName: "Release Event Instance",
  displayText: "Release event instance [i]{0}[/i] with tag [i]{1}[/i]",
  description: "Release the specified FMOD event instance.",
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
  ],
};

export const expose = true;

export default async function (name, tag) {
  if (!this.curInst) return;
  this.removeEvent3DAutoUpdate(name, tag);
  await this.curInst.SendMessageAsync("release-event", [name, tag]);
}
