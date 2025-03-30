export const config = {
  highlight: false,
  isAsync: true,
  listName: "Stop All Bus Events",
  displayText: "Stop all events from bus [i]{0}[/i] with fade out: [i]{1}[/i]",
  description: "Stop all events of the specified FMOD bus.",
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
      id: "allowFadeOut",
      name: "Allow Fade Out",
      desc: "Allow fade out for the events",
      type: "boolean",
      initialValue: "false",
    },
  ],
};

export const expose = true;

export default async function (bus, allowFadeOut) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("stop-all-bus-events", [
    bus,
    allowFadeOut,
  ]);
}
