export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Listener Weight",
  displayText: "Set listener [i]{0}[/i] weight to [i]{1}[/i]",
  description: "Set the weight of the specified FMOD listener.",
  params: [
    {
      id: "id",
      name: "Id",
      desc: "The listener id from 0 to 7",
      type: "number",
      initialValue: "0",
    },
    {
      id: "weight",
      name: "Weight",
      desc: "0-1",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (id, weight) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-listener-weight", [id, weight]);
}
