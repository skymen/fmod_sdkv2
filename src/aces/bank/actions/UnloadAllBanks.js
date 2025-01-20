export const config = {
  highlight: false,
  isAsync: true,
  listName: "Unload All Banks",
  displayText: "Unload all banks",
  description: "Unload all FMOD banks.",
};

export const expose = true;

export default async function () {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("unload-all-banks");
}
