const MAIN = 'inspect__panelButton'
const DISABLED = `${MAIN} ${MAIN}--disabled`;
const ACTIVE = `${MAIN} ${MAIN}--active`;

// These functions are responsible for set appropriate styles for active & disabled "toggle" button

/**
 * Set panel button active by adding appropriate class name
 * @Param button - button that you want to make active
 * */
export const setPanelButtonActive = (button: HTMLButtonElement): void => {
    button.className = ACTIVE;
}

/**
 * Set panel button active by adding appropriate class name
 * @Param button - button that you want to make disabled
 * */
export const setPanelButtonDisabled = (button: HTMLButtonElement): void => {
    button.className = DISABLED;
}