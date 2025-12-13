<img src="./examples/cover.webp" width="150" /><br>
# (FMOD)
<i>FMOD Studio integration for Construct 3</i> <br>
### Version 2.2.0.0

[<img src="https://placehold.co/200x50/4493f8/FFF?text=Download&font=montserrat" width="200"/>](https://github.com/skymen/fmod_sdkv2/releases/download/skymen_fmod-2.2.0.0.c3addon/skymen_fmod-2.2.0.0.c3addon)
<br>
<sub> [See all releases](https://github.com/skymen/fmod_sdkv2/releases) </sub> <br>

---
<b><u>Author:</u></b> skymen <br>
<b>[Construct Addon Page](https://www.construct.net/en/make-games/addons/1206/fmod)</b>  <br>
<b>[Documentation](https://www.construct.net/en/make-games/addons/1206/fmod/documentation)</b>  <br>
<sub>Made using [CAW](https://marketplace.visualstudio.com/items?itemName=skymen.caw) </sub><br>

## Table of Contents
- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)
---
## Usage
To build the addon, run the following commands:

```
npm i
npm run build
```

To run the dev server, run

```
npm i
npm run dev
```

## Examples Files
| Description | Download |
| --- | --- |
| Murder On Vicuna Street | [<img src="https://placehold.co/120x30/4493f8/FFF?text=Download&font=montserrat" width="120"/>](https://github.com/skymen/fmod_sdkv2/raw/refs/heads/main/examples/Murder%20On%20Vicuna%20Street.c3p) |

---
## Properties
| Property Name | Description | Type |
| --- | --- | --- |
| All Banks | All the banks that will be used by the game. One bank path per line. | longtext |
| Preload Banks | The banks that will be preloaded. One bank path per line. | longtext |
| Load Banks (Non Blocking) | The banks that will be loaded as soon as possible but will not prevent the game from starting. One bank path per line. | longtext |
| Auto Suspend | Automatically suspend FMOD when the game is suspended. Disable this if you want to control the suspend state manually. | check |
| Advanced Settings | Advanced settings for FMOD. See the FMOD documentation for more information. | longtext |


---
## Actions
| Action | Description | Params
| --- | --- | --- |
| Load Bank | Load the specified FMOD bank. | Name             *(string)* <br> |
| Unload All Banks | Unload all FMOD banks. |  |
| Unload Bank | Unload the specified FMOD bank. | Name             *(string)* <br> |
| Set Bus Muted | Set the muted state of the specified FMOD bus. | Name             *(string)* <br>Muted             *(boolean)* <br> |
| Set Bus Paused | Set the paused state of the specified FMOD bus. | Name             *(string)* <br>Paused             *(boolean)* <br> |
| Set Bus Volume | Set the volume of the specified FMOD bus. | Name             *(string)* <br>Volume             *(number)* <br> |
| Stop All Bus Events | Stop all events of the specified FMOD bus. | Name             *(string)* <br>Allow Fade Out             *(boolean)* <br> |
| Instantiate Event | Instantiate the specified FMOD event. This doesn't start it. Use this when you need to change the event parameters before starting it. | Name             *(string)* <br>Tags             *(string)* <br> |
| Release All Event Instances | Release all FMOD event instances. | Name             *(string)* <br> |
| Release Event Instance | Release the specified FMOD event instance. | Name             *(string)* <br>Tag             *(string)* <br> |
| Set Event Paused | Set the paused state of the specified FMOD event. | Name             *(string)* <br>Tag             *(string)* <br>Paused             *(boolean)* <br> |
| Set Event Timeline position | Set the paused state of the specified FMOD event. | Name             *(string)* <br>Tag             *(string)* <br>Timeline Position             *(number)* <br> |
| Start Event | Start the specified FMOD event. | Name             *(string)* <br>Tag             *(string)* <br>Release             *(boolean)* <br> |
| Start Event At Object | Start the specified FMOD event at the specified object. | Name             *(string)* <br>Tag             *(string)* <br>Object             *(object)* <br>Image Point             *(any)* <br>Release             *(boolean)* <br>Forward Mode             *(combo)* <br>Auto Update             *(boolean)* <br>Auto Velocity             *(boolean)* <br>Auto Destroy             *(boolean)* <br>Allow Fade Out             *(boolean)* <br> |
| Start One Time Event | Start the specified FMOD event as a one-time event. This instance will be released immediately. | Name             *(string)* <br> |
| Stop All Event Instances | Stop all FMOD event instances from one specific event. | Name             *(string)* <br>Allow fade out             *(boolean)* <br>Release             *(boolean)* <br> |
| Stop All Events | Stop all FMOD events. | Allow fade out             *(boolean)* <br>Release             *(boolean)* <br> |
| Stop Event | Stop the specified FMOD event, with an option to allow fade out. | Name             *(string)* <br>Tag             *(string)* <br>Allow fade out             *(boolean)* <br>Release             *(boolean)* <br> |
| Set Auto Suspend | Set the auto suspend state of FMOD. | Auto suspend             *(boolean)* <br> |
| Set Suspended | Set the suspended state of FMOD. | Suspended             *(boolean)* <br> |
| Set Listener 3D Attributes | Set the 3D attributes of the specified FMOD listener. | Id             *(number)* <br>X             *(number)* <br>Y             *(number)* <br>Z             *(number)* <br>Velocity X             *(number)* <br>Velocity Y             *(number)* <br>Velocity Z             *(number)* <br>Forward X             *(number)* <br>Forward Y             *(number)* <br>Forward Z             *(number)* <br>Up X             *(number)* <br>Up Y             *(number)* <br>Up Z             *(number)* <br>Has separate attenuation position             *(boolean)* <br>Attenuation X             *(number)* <br>Attenuation Y             *(number)* <br>Attenuation Z             *(number)* <br> |
| Set Listener 3D Attributes From Camera | Set the 3D attributes of the specified FMOD listener from the specified camera. | Id             *(number)* <br>Camera             *(object)* <br>Velocity X             *(number)* <br>Velocity Y             *(number)* <br>Velocity Z             *(number)* <br>Has separate attenuation position             *(boolean)* <br>Attenuation X             *(number)* <br>Attenuation Y             *(number)* <br>Attenuation Z             *(number)* <br> |
| Set Listener 3D Attributes From Scroll Position | Set the 3D attributes of the specified FMOD listener from the scroll position. | Id             *(number)* <br>Velocity X             *(number)* <br>Velocity Y             *(number)* <br>Has separate attenuation position             *(boolean)* <br>Attenuation X             *(number)* <br>Attenuation Y             *(number)* <br> |
| Set Listener Simple Attributes | Set the simple attributes of the specified FMOD listener. | Id             *(number)* <br>X             *(number)* <br>Y             *(number)* <br>Z             *(number)* <br> |
| Set Listener Simple Attributes From Scroll Position | Set the simple attributes of the specified FMOD listener from the scroll position. | Id             *(number)* <br> |
| Set Listener Weight | Set the weight of the specified FMOD listener. | Id             *(number)* <br>Weight             *(number)* <br> |
| Set Nb Listeners | Set the number of FMOD listeners. | Nb             *(number)* <br> |
| Set Event Parameter | Set a parameter value for the specified FMOD event. | Name             *(string)* <br>Tag             *(string)* <br>Parameter             *(string)* <br>Use Id             *(boolean)* <br>Value             *(number)* <br>Ignore seek speed             *(boolean)* <br> |
| Set Event Parameter With Label | Set a parameter value for the specified FMOD event, using the parameter label instead of the parameter name. | Name             *(string)* <br>Tag             *(string)* <br>Parameter             *(string)* <br>Use Id             *(boolean)* <br>Value             *(string)* <br>Ignore seek speed             *(boolean)* <br> |
| Set Global Parameter | Set a global parameter value for FMOD. | Parameter             *(string)* <br>Use Id             *(boolean)* <br>Value             *(number)* <br>Ignore seek speed             *(boolean)* <br> |
| Set Global Parameter With Label | Set a global parameter value for FMOD, using the parameter label instead of the parameter name. | Parameter             *(string)* <br>Use Id             *(boolean)* <br>Value             *(string)* <br>Ignore seek speed             *(boolean)* <br> |
| Set Event 3D Attributes | Set the 3D attributes of the specified FMOD event. | Name             *(string)* <br>Tag             *(string)* <br>X             *(number)* <br>Y             *(number)* <br>Z             *(number)* <br>Velocity X             *(number)* <br>Velocity Y             *(number)* <br>Velocity Z             *(number)* <br>Forward X             *(number)* <br>Forward Y             *(number)* <br>Forward Z             *(number)* <br>Up X             *(number)* <br>Up Y             *(number)* <br>Up Z             *(number)* <br> |
| Set Event 3D Attributes From Object | Set the 3D attributes of the specified FMOD event from the specified object. | Name             *(string)* <br>Tag             *(string)* <br>Object             *(object)* <br>Image Point             *(any)* <br>Forward Mode             *(combo)* <br>Velocity X             *(number)* <br>Velocity Y             *(number)* <br>Velocity Z             *(number)* <br> |
| Set Event Simple Attributes | Set the 3D attributes of the specified FMOD event. | Name             *(string)* <br>Tag             *(string)* <br>X             *(number)* <br>Y             *(number)* <br>Z             *(number)* <br> |
| Set Event Simple Attributes From Object | Set the 3D attributes of the specified FMOD event from the specified object. | Name             *(string)* <br>Tag             *(string)* <br>Object             *(object)* <br>Image Point             *(any)* <br>Forward Mode             *(combo)* <br>Auto Update             *(boolean)* <br>Auto Velocity             *(boolean)* <br>Auto Destroy             *(boolean)* <br>Allow Fade Out             *(boolean)* <br> |
| Set VCA Volume | Set the volume of the specified FMOD VCA. | Name             *(string)* <br>Volume             *(number)* <br> |


---
## Conditions
| Condition | Description | Params
| --- | --- | --- |
| Is Initialised | True if FMOD is initialised. |  |


---
## Expressions
| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
