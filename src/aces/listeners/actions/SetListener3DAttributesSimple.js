export const config = {
  id: "SetListenerSimpleAttributes",
  highlight: false,
  isAsync: true,
  listName: "Set Listener Simple Attributes",
  displayText:
    "Set listener [i]{0}[/i] simple attributes: position: ([i]{1}[/i], [i]{2}[/i], [i]{3}[/i])",
  description: "Set the simple attributes of the specified FMOD listener.",
  params: [
    {
      id: "id",
      name: "Id",
      desc: "The listener id from 0 to 7",
      type: "number",
      initialValue: "0",
    },
    {
      id: "x",
      name: "X",
      desc: "X position of the listener",
      type: "number",
      initialValue: "0",
    },
    {
      id: "y",
      name: "Y",
      desc: "Y position of the listener",
      type: "number",
      initialValue: "0",
    },
    {
      id: "z",
      name: "Z",
      desc: "Z position of the listener",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (id, x, y, z) {
  if (!this.curInst) return;
  await this.SetListener3DAttributes(
    id,
    x,
    y,
    z,
    0, //vx,
    0, //vy,
    0, //vz,
    0, //fx,
    0, //fy,
    -1, //fz,
    0, //ux,
    -1, //uy,
    0, //uz,
    false, //hasSeparateAttenuationPosition,
    0, //ax,
    0, //ay,
    0 //az
  );
}
