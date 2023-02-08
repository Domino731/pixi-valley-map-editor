const HIDE_CLASS_NAME: string = 'hide';

export const show = (element: HTMLElement) => {
    element.classList.remove(HIDE_CLASS_NAME);
}

export const hide = (element: HTMLElement) => {
    element.classList.add(HIDE_CLASS_NAME);
}