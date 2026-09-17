export const config = {
  highlight: true,
  isTrigger: true,
  listName: "On Event Stopped",
  displayText: "On event [i]{0}[/i] with tag [i]{1}[/i] stopped",
  description:
    "Triggered when an event instance stops, whether it ended on its own or was stopped. Leave the name and/or tag blank to match any.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the event, or blank to match any event",
      autocompleteId: "eventName",
      type: "string",
      initialValue: "",
    },
    {
      id: "tag",
      name: "Tag",
      desc: "The tag of the event instance, or blank to match any tag",
      autocompleteId: "eventTag",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default function (name, tag) {
  return (
    (!name || name === this.stoppedEventName) &&
    (!tag || tag === this.stoppedEventTag)
  );
}
