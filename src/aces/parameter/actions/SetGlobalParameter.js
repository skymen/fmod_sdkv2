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
      desc: "The name or ID of the parameter",
      autocompleteId: "paramName",
      type: "string",
      initialValue: "",
    },
    {
      id: "isid",
      name: "Use Id",
      desc: "Whether the parameter is specified by its ID instead of its name",
      type: "boolean",
      initialValue: "false",
    },
    {
      id: "value",
      name: "Value",
      desc: "The value to set the parameter to",
      type: "number",
      initialValue: "0",
    },
    {
      id: "ignoreSeekSpeed",
      name: "Ignore seek speed",
      desc: "Whether to ignore the parameter's seek speed and set the value immediately",
      type: "boolean",
      initialValue: "false",
    },
  ],
};

export const expose = true;

export default async function (param, isId, value, ignoreSeekSpeed) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-global-parameter", [
    param,
    value,
    ignoreSeekSpeed,
    isId,
  ]);
}
