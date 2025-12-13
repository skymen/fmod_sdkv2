export const config = {
  highlight: false,
  isAsync: true,
  listName: "Load Bank Sample Data",
  displayText: "Load sample data for bank [i]{0}[/i]",
  description: "Load sample data for the specified FMOD bank.",
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
  await this.curInst.SendMessageAsync("load-bank-sample-data", [name]);
}
