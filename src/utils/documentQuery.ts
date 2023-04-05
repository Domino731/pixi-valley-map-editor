type UtilsReturn = HTMLElement | null

const query = (selector: string): UtilsReturn => document.querySelector(selector);

export const findEngineObjectOnMap = (objectMapId: string): UtilsReturn => {
    return query(`#${objectMapId}`)
}