import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const FairyRose: CropObject = {
    id: CROPS_NAMES.FAIRY_ROSE,
    name: CROPS_NAMES.FAIRY_ROSE,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 33, y: 1}
    },
    stages: cropStagesFactory(5, 1, 5, CROPS_NAMES.FAIRY_ROSE),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}