export const config = {
  highlight: true,
  isAsync: true,
  listName: "Start One Time Event",
  displayText: "Start one time event [i]{0}[/i]",
  description:
    "Start the specified FMOD event as a one-time event. This instance will be released immediately.",
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

export default async function (eventName) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("start-one-time-event", [eventName]);
}
