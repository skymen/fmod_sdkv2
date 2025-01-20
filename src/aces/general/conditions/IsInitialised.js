export const config = {
  highlight: false,
  listName: "Is Initialised",
  displayText: "Is initialised",
  description: "True if FMOD is initialised.",
};

export const expose = true;

export default function () {
  return !!this.curInst;
}
