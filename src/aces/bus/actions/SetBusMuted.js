export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Bus Muted",
  displayText: "Set bus [i]{0}[/i] muted: [i]{1}[/i]",
  description: "Set the muted state of the specified FMOD bus.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "",
      type: "string",
      initialValue: "",
    },
    {
      id: "muted",
      name: "Muted",
      desc: "",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (bus, muted) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-bus-muted", [bus, muted]);
}
