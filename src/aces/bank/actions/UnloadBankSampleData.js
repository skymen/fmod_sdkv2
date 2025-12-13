export const config = {
  highlight: false,
  isAsync: true,
  listName: "Unload Bank Sample Data",
  displayText: "Unload sample data for bank [i]{0}[/i]",
  description: "Unload sample data for the specified FMOD bank.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the bank",
      type: "string",
      initialValue: "",
      autocompleteId: "bankName",
    },
  ],
};

export const expose = true;

export default async function (name) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("unload-bank-sample-data", [name]);
}
