/* name of class which is responsible for hiding elements (display: none !important) */
const HIDE_CLASS_NAME: string = 'hide';

/**
 * Show element
 * @Param element - element that you want to show
 * */
export const show = (element: HTMLElement | Array<HTMLElement>): void => {
    if (Array.isArray(element)) {
        element.forEach(el => el.classList.add(HIDE_CLASS_NAME))
    } else {
        element.classList.add(HIDE_CLASS_NAME);
    }
}

/**
 * Hide element
 * @Param element - element that you want to hide
 * */
export const hide = (element: HTMLElement | Array<HTMLElement>): void => {
    if (Array.isArray(element)) {
        element.forEach(el => el.classList.add(HIDE_CLASS_NAME))
    } else {
        element.classList.add(HIDE_CLASS_NAME);
    }
}