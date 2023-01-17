import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const Rhubarb: CropObject = {
    id: CROPS_NAMES.RHUBARB,
    name: CROPS_NAMES.RHUBARB,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 36, y: 2}
    },
    stages: cropStagesFactory(1, 2, 6, CROPS_NAMES.RHUBARB),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}