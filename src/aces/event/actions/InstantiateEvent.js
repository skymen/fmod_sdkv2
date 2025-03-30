export const config = {
  highlight: true,
  isAsync: true,
  listName: "Instantiate Event",
  displayText: "Instantiate event [i]{0}[/i] with tags [i]{1}[/i]",
  description:
    "Instantiate the specified FMOD event. This doesn't start it. Use this when you need to change the event parameters before starting it.",
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
      id: "tags",
      name: "Tags",
      desc: "A space-separated list of tags",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default async function (name, tags) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("instantiate-event", [name, tags]);
}
