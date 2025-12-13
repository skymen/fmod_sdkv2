export const config = {
  highlight: true,
  isAsync: true,
  listName: "Load Bank",
  displayText: "Load bank [i]{0}[/i] (load sample data: [i]{1}[/i])",
  description: "Load the specified FMOD bank.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the bank",
      type: "string",
      initialValue: "",
      autocompleteId: "bankName",
    },
    {
      id: "loadSampleData",
      name: "Load Sample Data",
      desc: "Whether to load sample data for the bank",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (name, loadSampleData) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("load-bank", [name, loadSampleData]);
}
