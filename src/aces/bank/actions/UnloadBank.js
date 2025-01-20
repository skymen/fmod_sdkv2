export const config = {
  highlight: false,
  isAsync: true,
  listName: "Unload Bank",
  displayText: "Unload bank [i]{0}[/i]",
  description: "Unload the specified FMOD bank.",
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
  await this.curInst.SendMessageAsync("unload-bank", [name]);
}
