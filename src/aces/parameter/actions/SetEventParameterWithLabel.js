export const config = {
  highlight: false,
  isAsync: true,
  listName: "Set Event Parameter With Label",
  displayText:
    "Set event parameter [i]{2}[/i] on event [i]{0}[/i] with tags [i]{1}[/i] to label [i]{3}[/i] (ignore seek speed: [i]{4}[/i])",
  description:
    "Set a parameter value for the specified FMOD event, using the parameter label instead of the parameter name.",
  params: [
    {
      id: "name",
      name: "Name",
      desc: "The name of the event",
      autocompleteId: "eventName",
      type: "string",
      initialValue: "",
    },
    {
      id: "tag",
      name: "Tag",
      desc: "The tag of the event instance",
      autocompleteId: "eventTag",
      type: "string",
      initialValue: "",
    },
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

export default async function (name, tag, param, value, ignoreSeekSpeed) {
  if (!this.curInst) return;
  await this.curInst.SendMessageAsync("set-event-parameter-with-label", [
    name,
    tag,
    param,
    value,
    ignoreSeekSpeed,
  ]);
}
