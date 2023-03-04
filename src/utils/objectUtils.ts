import {GAME_DATA} from "../data";
import {EngineObject} from "../data/types";

export const getObjectNameById = (objectId: string): string => {
    const allObjects: Array<EngineObject> = Object.values(GAME_DATA.objects).flat()
    return allObjects.find(({id}) => id === objectId)?.name ?? '';
}

export const findObjectOnMap = (objectMapId: string): HTMLDivElement | null => {
    return document.getElementById(`${objectMapId}`) as HTMLDivElement | null;
}