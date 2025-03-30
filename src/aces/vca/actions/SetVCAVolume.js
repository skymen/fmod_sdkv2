export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set VCA Volume",
  displayText: "Set VCA [i]{0}[/i] volume to [i]{1}[/i]",
  description: "Set the volume of the specified FMOD VCA.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the VCA",
      autocompleteId: "vcaName",
      type: "string",
      initialValue: "",
    },
    {
      id: "volume",
      name: "Volume",
      desc: "The volume level to set (typically 0-1, where 1 is normal volume)",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (vca, volume) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-vca-volume", [vca, volume]);
}
