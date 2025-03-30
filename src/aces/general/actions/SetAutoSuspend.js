export const config = {
  highlight: false,
  listName: "Set Auto Suspend",
  displayText: "Set auto suspend to [i]{0}[/i]",
  description: "Set the auto suspend state of FMOD.",
  params: [
    {
      id: "autoSuspend",
      name: "Auto suspend",
      desc: "Wether to auto suspend FMOD",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default function (value) {
  this.autoSuspend = value;
}
