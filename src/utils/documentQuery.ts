type UtilsReturn = HTMLElement | null

const query = (selector: string): UtilsReturn => document.querySelector(selector);

export const findEngineObjectOnMap = (objectMapId: string): UtilsReturn => {
    return query(`#${objectMapId}`);
}

export const findInspectWordObjectListItem = (objectId: string) => query(`[data-inspect-world-object-list-item="${objectId}"]`)