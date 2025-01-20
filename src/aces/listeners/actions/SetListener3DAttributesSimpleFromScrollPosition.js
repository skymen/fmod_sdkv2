export const config = {
  id: "SetListenerSimpleAttributesFromScrollPosition",
  highlight: true,
  isAsync: true,
  listName: "Set Listener Simple Attributes From Scroll Position",
  displayText: "Set listener [i]{0}[/i] simple attributes from scroll position",
  description:
    "Set the simple attributes of the specified FMOD listener from the scroll position.",
  params: [
    {
      id: "id",
      name: "Id",
      desc: "The listener id from 0 to 7",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (id) {
  if (!this.curInst) return;
  const layout = this.runtime.layout;
  const x = layout.scrollX;
  const y = layout.scrollY;
  await this.SetListener3DAttributesFromScrollPosition(id, 0, 0, true, x, y);
}
