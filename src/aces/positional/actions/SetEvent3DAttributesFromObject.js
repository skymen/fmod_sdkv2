export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Event 3D Attributes From Object",
  displayText:
    "Set event [i]{0}[/i] with tag [i]{1}[/i] 3D attributes from object [i]{2}[/i] (forward mode: [i]{3}[/i]) velocity: ([i]{4}[/i], [i]{5}[/i], [i]{6}[/i])",
  description:
    "Set the 3D attributes of the specified FMOD event from the specified object.",
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
      id: "object",
      name: "Object",
      desc: "",
      type: "object",
      allowedPluginIds: ["<world>"],
    },
    {
      id: "forwardMode",
      name: "Forward Mode",
      desc: "",
      type: "combo",
      initialValue: "camera",
      items: [{ camera: "2D" }, { angle: "3D" }],
    },
    {
      id: "velocity-x",
      name: "Velocity X",
      desc: "",
      type: "number",
      initialValue: "0",
    },
    {
      id: "velocity-y",
      name: "Velocity Y",
      desc: "",
      type: "number",
      initialValue: "0",
    },
    {
      id: "velocity-z",
      name: "Velocity Z",
      desc: "",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (
  name,
  tag,
  objectClass,
  forwardMode,
  vx,
  vy,
  vz
) {
  if (!this.curInst) return;
  const inst = objectClass.getFirstPickedInstance();
  const [x, y, z] = [inst.x, inst.y, inst.totalZElevation];
  const angle = inst.angle;
  let fx = 0;
  let fy = 0;
  let fz = 1;
  let ux = 0;
  let uy = -1;
  let uz = 0;
  if (forwardMode === 1)
    [fx, fy, fz, ux, uy, uz] = [Math.cos(angle), Math.sin(angle), 0, 0, 0, 1];
  await this.SetEvent3DAttributes(
    name,
    tag,
    x,
    y,
    z,
    vx,
    vy,
    vz,
    fx,
    fy,
    fz,
    ux,
    uy,
    uz
  );
}
