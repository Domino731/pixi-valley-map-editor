import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const Pumpkin: CropObject = {
    id: CROPS_NAMES.PUMPKIN,
    name: CROPS_NAMES.PUMPKIN,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 40, y: 3}
    },
    stages: cropStagesFactory(5, 3, 6, CROPS_NAMES.PUMPKIN),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}