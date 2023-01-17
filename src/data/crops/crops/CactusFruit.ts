import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const CactusFruit: CropObject = {
    id: CROPS_NAMES.CACTUS_FRUIT,
    name: CROPS_NAMES.CACTUS_FRUIT,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 41, y: 0}
    },
    stages: cropStagesFactory(6, 0, 6, CROPS_NAMES.CACTUS_FRUIT),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}