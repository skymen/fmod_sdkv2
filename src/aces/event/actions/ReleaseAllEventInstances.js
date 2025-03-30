export const config = {
  highlight: false,
  isAsync: true,
  listName: "Release All Event Instances",
  displayText: "Release all event instances [i]{0}[/i]",
  description: "Release all FMOD event instances.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the event",
      autocompleteId: "eventName",
      type: "string",
      initialValue: "",
    },
  ],
};

export const expose = true;

export default async function (name) {
  if (!this.curInst) return;
  this.removeAllEvent3DAutoUpdate(name);
  await this.curInst.SendMessageAsync("release-all-event-instances", [name]);
}
