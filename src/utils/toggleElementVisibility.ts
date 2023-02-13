/* name of class which is responsible for hiding elements (display: none !important) */
const HIDE_CLASS_NAME: string = 'hide';

/**
 * Show element
 * @Param element - element that you want to show
 * */
export const show = (element: HTMLElement) => {
    element.classList.remove(HIDE_CLASS_NAME);
}

/**
 * Hide element
 * @Param element - element that you want to hide
 * */
export const hide = (element: HTMLElement) => {
    element.classList.add(HIDE_CLASS_NAME);
}