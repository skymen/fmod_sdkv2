export const config = {
  highlight: true,
  isTrigger: true,
  listName: "On Any Event Stopped",
  displayText: "On any event stopped",
  description:
    "Triggered when any event instance stops, whether it ended on its own or was stopped. Use StoppedEvent and StoppedTag to know which.",
  params: [],
};

export const expose = true;

export default function () {
  return true;
}
