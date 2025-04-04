export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Global Parameter With Label",
  displayText:
    "Set global parameter [i]{0}[/i] to label [i]{1}[/i] (ignore seek speed: [i]{2}[/i])",
  description:
    "Set a global parameter value for FMOD, using the parameter label instead of the parameter name.",
  params: [
    {
      id: "parameter",
      name: "Parameter",
      desc: "The name of the parameter",
      autocompleteId: "paramName",
      type: "string",
      initialValue: "",
    },
    {
      id: "value",
      name: "Value",
      desc: "The label value to set the parameter to",
      autocompleteId: "paramLabel",
      type: "string",
      initialValue: "",
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

export default async function (param, value, ignoreSeekSpeed) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-global-parameter-with-label", [
    param,
    value,
    ignoreSeekSpeed,
  ]);
}
