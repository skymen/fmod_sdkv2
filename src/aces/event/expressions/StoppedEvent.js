export const config = {
  highlight: false,
  returnType: "string",
  description: "The name of the event that last triggered On Event Stopped.",
  params: [],
};

export const expose = true;

export default function () {
  return this.stoppedEventName;
}
