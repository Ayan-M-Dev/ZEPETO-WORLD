"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ZEPETO_Script_1 = require("ZEPETO.Script");
const ZEPETO_Character_Controller_1 = require("ZEPETO.Character.Controller");
class CharacterController extends ZEPETO_Script_1.ZepetoScriptBehaviour {
    Start() {
        $extension("ZEPETO.Character.Controller.ZepetoPlayersExtension").CreatePlayerWithZepetoId(ZEPETO_Character_Controller_1.ZepetoPlayers.instance, "", "[retrovintage]", new ZEPETO_Character_Controller_1.SpawnInfo(), true);
        ZEPETO_Character_Controller_1.ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {
            let _player = ZEPETO_Character_Controller_1.ZepetoPlayers.instance.LocalPlayer;
        });
    }
}
exports.default = CharacterController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcmFjdGVyQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYXJhY3RlckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBcUQ7QUFDckQsNkVBQW9HO0FBR3BHLE1BQXFCLG1CQUFvQixTQUFRLHFDQUFxQjtJQUdsRSxLQUFLO1FBQ0QsaUVBQXVCLHdCQUF3QixDQUEvQywyQ0FBYSxDQUFDLFFBQVEsRUFBMEIsRUFBRSxFQUFFLGdCQUFnQixFQUFFLElBQUksdUNBQVMsRUFBRSxFQUFFLElBQUksRUFBRTtRQUU3RiwyQ0FBYSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ3hELElBQUksT0FBTyxHQUFpQiwyQ0FBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0NBQ0o7QUFWRCxzQ0FVQyJ9