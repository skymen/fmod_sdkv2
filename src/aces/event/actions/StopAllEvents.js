export const config = {
  highlight: false,
  isAsync: true,
  listName: "Stop All Events",
  displayText:
    "Stop all events (allow fade out: [i]{0}[/i], release: [i]{1}[/i])",
  description: "Stop all FMOD events.",
  params: [
    {
      id: "allowFadeOut",
      name: "Allow fade out",
      desc: "Allow fade out for the events",
      type: "boolean",
      initialValue: "true",
    },
    {
      id: "release",
      name: "Release",
      desc: "Releasing this event will free its memory when it stops playing and will remove it from the tag.",
      type: "boolean",
      initialValue: "true",
    },
  ],
};

export const expose = true;

export default async function (allowFadeOut, release) {
  if (!this.curInst) return;
  this.removeAllEvent3DAutoUpdate("");
  await this.curInst.SendMessageAsync("stop-all-events", [
    allowFadeOut,
    release,
  ]);
}
