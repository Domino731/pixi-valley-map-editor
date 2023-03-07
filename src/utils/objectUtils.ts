import {GAME_DATA} from "../data";
import {EngineObject} from "../data/types";

/**
 * Get object by his id
 * @Param objectId - id of object that you want to find
 * */
export const getObjectById = (objectId: string): EngineObject | null => {
    const allObjects: Array<EngineObject> = Object.values(GAME_DATA.objects).flat()
    return allObjects.find(({id}) => id === objectId) ?? null;
}

/**
 * Get object's name by his id
 * @Param objectId - id of object that you want to find
 * */
export const getObjectNameById = (objectId: string): string => getObjectById(objectId)?.name ?? '';

/**
 * Get object element on map
 * @Param objectMapId - id of object that you want to find
 * */
export const findObjectOnMap = (objectMapId: string): HTMLDivElement | null => {
    return document.getElementById(`${objectMapId}`) as HTMLDivElement | null;
}

/**
 * Set special attribute for element
 * @Param element - element to which you want to assign an attribute
 * @Param section - section name (locations, properties,map, world)
 * @Param object - object needed to assign id
 * */
export const setObjectElementAttribute = (element: HTMLElement, section: string, object: EngineObject): void => {
    element.dataset.engineObjectId = object.id;
}

