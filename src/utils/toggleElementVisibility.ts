/* name of class which is responsible for hiding elements (display: none !important) */
const HIDE_CLASS_NAME: string = 'hide';

/**
 * Show element | elements
 * @Param element - element that you want to show
 * */
export const show = (element: HTMLElement | Array<HTMLElement>): void => {
    if (Array.isArray(element)) {
        element.forEach(el => el.classList.remove(HIDE_CLASS_NAME))
    } else {
        element.classList.remove(HIDE_CLASS_NAME);
    }
}

/**
 * Hide element | elements
 * @Param element - element that you want to hide
 * */
export const hide = (element: HTMLElement | Array<HTMLElement>): void => {
    if (Array.isArray(element)) {
        element.forEach(el => el.classList.add(HIDE_CLASS_NAME))
    } else {
        element.classList.add(HIDE_CLASS_NAME);
    }
}

/**
 * Toggle visibility of element | elements
 * @Param element - element that you want to hide
 * @Param flag - if true hide otherwise show element
 * */
export const toggleVisibility = (element: HTMLElement | Array<HTMLElement>, flag: boolean): void => {
    if (flag) {
        hide(element)
    } else {
        show(element)
    }
}

/**
 * Checking if element is visible on page
 * @Param element - html element that you want to check
 * */
export const isVisible = (element: HTMLElement): boolean => !element.classList.contains(HIDE_CLASS_NAME);

/**
 * Checking if element is hidden on page
 * @Param element - html element that you want to check
 * */
export const isHidden = (element: HTMLElement): boolean => element.classList.contains(HIDE_CLASS_NAME);