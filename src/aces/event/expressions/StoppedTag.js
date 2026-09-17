export const config = {
  highlight: false,
  returnType: "string",
  description:
    "The tag of the event instance that last triggered On Event Stopped. Empty for one-shot events.",
  params: [],
};

export const expose = true;

export default function () {
  return this.stoppedEventTag;
}
