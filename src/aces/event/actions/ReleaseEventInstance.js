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
  ],
};

export const expose = true;

export default async function (name, tag) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("release-event", [name, tag]);
}
