import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const TeaLeaves: CropObject = {
    id: CROPS_NAMES.TEA_LEAVES,
    name: CROPS_NAMES.TEA_LEAVES,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 27, y: 5}
    },
    stages: cropStagesFactory(6, 5, 4, CROPS_NAMES.TEA_LEAVES),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}