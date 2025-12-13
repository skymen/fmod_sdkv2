export const config = {
  highlight: false,
  isAsync: true,
  listName: "Unload Event Sample Data",
  displayText: "Unload sample data for event [i]{0}[/i]",
  description: "Unload sample data for the specified FMOD event.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the event",
      autocompleteId: "eventName",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default async function (name) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("unload-event-sample-data", [name]);
}
