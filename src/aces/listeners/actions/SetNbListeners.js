export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Nb Listeners",
  displayText: "Set nb listeners to [i]{0}[/i]",
  description: "Set the number of FMOD listeners.",
  params: [
    {
      id: "nb",
      name: "Nb",
      desc: "A number of listeners, from 1 to 8",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (nb) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-nb-listeners", [nb]);
}
