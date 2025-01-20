export const config = {
  highlight: true,
  isAsync: true,
  listName: "Load Bank",
  displayText: "Load bank [i]{0}[/i]",
  description: "Load the specified FMOD bank.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the bank",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default async function (name) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("load-bank", [name]);
}
