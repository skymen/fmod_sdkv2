export const config = {
  highlight: true,
  isAsync: true,
  listName: "Set Global Parameter",
  displayText:
    "Set global parameter [i]{0}[/i] to [i]{1}[/i] (ignore seek speed: [i]{2}[/i])",
  description: "Set a global parameter value for FMOD.",
  params: [
    {
      id: "parameter",
      name: "Parameter",
      desc: "The name of the parameter",
      type: "string",
      initialValue: "",
    },
    {
      id: "value",
      name: "Value",
      desc: "",
      type: "number",
      initialValue: "0",
    },
    {
      id: "ignoreSeekSpeed",
      name: "Ignore seek speed",
      desc: "",
      type: "boolean",
      initialValue: "false",
    },
  ],
};

export const expose = true;

export default async function (param, value, ignoreSeekSpeed) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-global-parameter", [
    param,
    value,
    ignoreSeekSpeed,
  ]);
}
