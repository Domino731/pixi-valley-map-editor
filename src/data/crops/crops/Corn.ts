import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const Corn: CropObject = {
    id: CROPS_NAMES.CORN,
    name: CROPS_NAMES.CORN,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 37, y: 1}
    },
    stages: cropStagesFactory(2, 1, 6, CROPS_NAMES.CORN),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}