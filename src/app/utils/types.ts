export interface SelectOption {
    label: string;
    value: any;
}

export type ContextMenuOptionElements = {
    listItem: HTMLLIElement;
    button: HTMLButtonElement;
}

export interface ContextMenuOption {
    label: string | Function;
    onClick: (elements?: ContextMenuOptionElements) => void;
    hideOnClick?: boolean;
}