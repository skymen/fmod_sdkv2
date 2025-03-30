export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Bus Volume",
  displayText: "Set bus [i]{0}[/i] volume to [i]{1}[/i]",
  description: "Set the volume of the specified FMOD bus.",
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
      id: "volume",
      name: "Volume",
      desc: "The volume of the bus",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (bus, volume) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-bus-volume", [bus, volume]);
}
