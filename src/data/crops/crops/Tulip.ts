import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const Tulip: CropObject = {
    id: CROPS_NAMES.TULIP,
    name: CROPS_NAMES.TULIP,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 29, y: 4}
    },
    stages: cropStagesFactory(1, 4, 5, CROPS_NAMES.TULIP),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}