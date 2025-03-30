export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Bus Paused",
  displayText: "Set bus [i]{0}[/i] paused: [i]{1}[/i]",
  description: "Set the paused state of the specified FMOD bus.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the bus",
      autocompleteId: "busName",
      type: "string",
      initialValue: "",
    },
    {
      id: "paused",
      name: "Paused",
      desc: "The paused state of the bus",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (bus, paused) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-bus-paused", [bus, paused]);
}
