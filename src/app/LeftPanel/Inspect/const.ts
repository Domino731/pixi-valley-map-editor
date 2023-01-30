export enum INSPECT_SECTIONS_NAMES {
    GENERAL_DATA = 'GENERAL_DATA',
    CHECKBOXES = 'CHECKBOXES',
    DROP_ITEMS = 'DROP_ITEMS'
}

export type InspectSectionsNamesUnion = keyof typeof INSPECT_SECTIONS_NAMES;
