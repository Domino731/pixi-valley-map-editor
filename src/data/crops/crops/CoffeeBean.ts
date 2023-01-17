import {CropObject} from "../types";
import {CROPS_NAMES} from "../const";
import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, SPRITE_SRC} from "../../types";
import {cropStagesFactory} from "../utils";

export const CoffeeBean: CropObject = {
    id: CROPS_NAMES.COFFEE_BEAN,
    name: CROPS_NAMES.COFFEE_BEAN,
    hp: 100,
    sprite: {
        src: SPRITE_SRC.CROPS,
        position: {x: 28, y: 2}
    },
    stages: cropStagesFactory(0, 2, 6, CROPS_NAMES.COFFEE_BEAN),
    tools: [],
    destroyable: true,
    checkboxes: [],
    items: [],
    group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
    type: ENGINE_OBJECTS_TYPES.CROPS
}