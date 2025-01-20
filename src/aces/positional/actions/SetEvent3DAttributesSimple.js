export const config = {
  id: "SetEventSimpleAttributes",
  highlight: false,
  isAsync: true,
  listName: "Set Event Simple Attributes",
  displayText:
    "Set event [i]{0}[/i] with tag [i]{1}[/i] 3D attributes: position: ([i]{2}[/i], [i]{3}[/i], [i]{4}[/i])",
  description: "Set the 3D attributes of the specified FMOD event.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "",
      type: "string",
      initialValue: "",
    },
    {
      id: "tag",
      name: "Tag",
      desc: "",
      type: "string",
      initialValue: "",
    },
    {
      id: "x",
      name: "X",
      desc: "",
      type: "number",
      initialValue: "0",
    },
    {
      id: "y",
      name: "Y",
      desc: "",
      type: "number",
      initialValue: "0",
    },
    {
      id: "z",
      name: "Z",
      desc: "",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (name, tag, x, y, z) {
  if (!this.curInst) return;
  this.SetEvent3DAttributes(
    name,
    tag,
    x,
    y,
    z,
    0, //vx,
    0, //vy,
    0, //vz,
    0, //fx,
    0, //fy,
    1, //fz,
    0, //ux,
    -1, //uy,
    0 //uz,
  );
}
