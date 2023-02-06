export class DetectOutsideClick {
    private readonly targetElement: HTMLElement;

    constructor(targetElement: HTMLElement, onOutsideClick: () => void) {
        this.targetElement = targetElement;
        this.init(onOutsideClick);
    }

    init(onOutsideClick: () => void) {
        document.addEventListener("click", (evt) => {
            const flyoutEl = this.targetElement;
            let targetEl = evt.target as HTMLElement;
            do {
                if (targetEl == flyoutEl) {
                    console.log(1);
                    onOutsideClick();
                    return;
                }
                console.log(2);
                onOutsideClick();
                targetEl = targetEl.parentNode as HTMLElement;
            } while (targetEl);
        });

    }

}