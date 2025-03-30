export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Listener 3D Attributes From Scroll Position",
  displayText:
    "Set listener [i]{0}[/i] 3D attributes from scroll position: velocity: ([i]{1}[/i], [i]{2}[/i]), attenuation? ([i]{3}[/i]) : ([i]{4}[/i], [i]{5}[/i])",
  description:
    "Set the 3D attributes of the specified FMOD listener from the scroll position.",
  params: [
    {
      id: "id",
      name: "Id",
      desc: "The listener id from 0 to 7",
      type: "number",
      initialValue: "0",
    },
    {
      id: "velocity-x",
      name: "Velocity X",
      desc: "X component of the listener's velocity vector",
      type: "number",
      initialValue: "0",
    },
    {
      id: "velocity-y",
      name: "Velocity Y",
      desc: "Y component of the listener's velocity vector",
      type: "number",
      initialValue: "0",
    },
    {
      id: "hasSeparateAttenuationPosition",
      name: "Has separate attenuation position",
      desc: "Whether to use a separate position for distance attenuation",
      type: "boolean",
      initialValue: "false",
    },
    {
      id: "attenuation-x",
      name: "Attenuation X",
      desc: "X component of the attenuation position",
      type: "number",
      initialValue: "0",
    },
    {
      id: "attenuation-y",
      name: "Attenuation Y",
      desc: "Y component of the attenuation position",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (
  id,
  vx,
  vy,
  hasSeparateAttenuationPosition,
  ax,
  ay
) {
  if (!this.curInst) return;
  const layout = this.runtime.layout;
  const x = layout.scrollX;
  const y = layout.scrollY;
  await this.SetListener3DAttributes(
    id,
    x,
    y,
    100, //z,
    vx,
    vy,
    0, //vz,
    0, //fx,
    0, //fy,
    -1, //fz,
    0, //ux,
    -1, //uy,
    0, //uz,
    hasSeparateAttenuationPosition,
    ax,
    ay,
    0 //az
  );
}
