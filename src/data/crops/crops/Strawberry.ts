import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const Strawberry: CropObject = {
    id: CROPS_NAMES.STRAWBERRY,
    name: CROPS_NAMES.STRAWBERRY,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 36, y: 3}
    },
    stages: cropStagesFactory(1, 3, 5, CROPS_NAMES.STRAWBERRY),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}