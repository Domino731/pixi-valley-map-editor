const MAIN_CLASS = 'inspect__panelButton'
const DISABLED = `${MAIN_CLASS} ${MAIN_CLASS}--disabled`;
const ACTIVE = `${MAIN_CLASS} ${MAIN_CLASS}--active`;


export const setPanelButtonActive = (button: HTMLButtonElement): void => {
    button.className = ACTIVE;
}

export const setPanelButtonDisabled = (button: HTMLButtonElement): void => {
    button.className = DISABLED;
}