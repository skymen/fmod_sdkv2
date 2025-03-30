export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Suspended",
  displayText: "Set suspended to [i]{0}[/i]",
  description: "Set the suspended state of FMOD.",
  params: [
    {
      id: "suspended",
      name: "Suspended",
      desc: "Wether to suspend FMOD",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (value) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-suspended", [
    value,
    performance.now(),
  ]);
}
