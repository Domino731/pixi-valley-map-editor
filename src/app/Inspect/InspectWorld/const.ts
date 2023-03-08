import {ENGINE_OBJECTS_TYPES, EngineObjectTypesUnion} from "../../../data/types";

/** Object for store table cell elements for amount of each object */
export const INSPECT_WORLD_OBJECT_AMOUNT_ELEMENTS: Record<EngineObjectTypesUnion, HTMLElement> = {
    [ENGINE_OBJECTS_TYPES.TREES]: document.querySelector('#inspect-world-overview-trees-amount'),
    [ENGINE_OBJECTS_TYPES.CROPS]: document.querySelector('#inspect-world-overview-crops-amount'),
    [ENGINE_OBJECTS_TYPES.BUSHES]: document.querySelector('#inspect-world-overview-bushes-amount'),
    [ENGINE_OBJECTS_TYPES.BUILDING]: document.querySelector('#inspect-world-overview-buildings-amount'),
    [ENGINE_OBJECTS_TYPES.RESOURCES_32]: document.querySelector('#inspect-world-overview-x16-resources-amount'),
    [ENGINE_OBJECTS_TYPES.RESOURCES_16]: document.querySelector('#inspect-world-overview-x32-resources-amount'),
}