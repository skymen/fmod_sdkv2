export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Listener 3D Attributes From Camera",
  displayText:
    "Set listener [i]{0}[/i] 3D attributes from camera [i]{1}[/i]: velocity: ([i]{2}[/i], [i]{3}[/i], [i]{4}[/i]), attenuation? ([i]{5}[/i]) : ([i]{6}[/i], [i]{7}[/i], [i]{8}[/i])",
  description:
    "Set the 3D attributes of the specified FMOD listener from the specified camera.",
  params: [
    {
      id: "id",
      name: "Id",
      desc: "The listener id from 0 to 7",
      type: "number",
      initialValue: "0",
    },
    {
      id: "camera",
      name: "Camera",
      desc: "",
      type: "object",
      allowedPluginIds: ["Camera3D"],
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
    {
      id: "hasSeparateAttenuationPosition",
      name: "Has separate attenuation position",
      desc: "",
      type: "boolean",
      initialValue: "false",
    },
    {
      id: "attenuation-x",
      name: "Attenuation X",
      desc: "",
      type: "number",
      initialValue: "0",
    },
    {
      id: "attenuation-y",
      name: "Attenuation Y",
      desc: "",
      type: "number",
      initialValue: "0",
    },
    {
      id: "attenuation-z",
      name: "Attenuation Z",
      desc: "",
      type: "number",
      initialValue: "0",
    },
  ],
};

export const expose = true;

export default async function (
  id,
  camera,
  vx,
  vy,
  vz,
  hasSeparateAttenuationPosition,
  ax,
  ay,
  az
) {
  if (!this.curInst) return;
  const inst = camera.getFirstInstance();
  const [x, y, z] = inst.getCameraPosition();
  const [ux, uy, uz] = inst.getUpVector();
  const [lx, ly, lz] = inst.getLookVector();
  const [fx, fy, fz] = [lx - x, ly - y, lz - z];
  await this.SetListener3DAttributes(
    id,
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
    uz,
    hasSeparateAttenuationPosition,
    ax,
    ay,
    az
  );
}
