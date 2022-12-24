export class Select {
    // id of <ul> element needed to inject options list
    private listId: string;
    private options: Array<{ label: string, value: string }>;
    private button: HTMLButtonElement;
    private list: HTMLDivElement;

    constructor(listId: string, options: Array<{ label: string, value: string }>, onChange: (v: { label: string, value: string }) => void) {
        this.listId = listId;
        this.button = document.querySelector(`#${listId} button`);
        this.list = document.querySelector(`#${listId} ul`);
        this.options = options;
        this.init(onChange);
    }

    private buttonClickEvent(): void {
        this.button.addEventListener('click', () => {
            this.list.classList.remove('hide');
        });
    }

    private createOptionsList(onChange: (v: { label: string, value: string }) => void): void {
        this.options.forEach((el) => {
            const option: HTMLLIElement = document.createElement('li');
            const optionButton: HTMLButtonElement = document.createElement('button');
            optionButton.addEventListener("click", () => {
                this.list.classList.add('hide');
                onChange(el);
            })
            option.className = 'select-item';
            optionButton.innerText = el.label;
            option.appendChild(optionButton);

            this.list.appendChild(option);
        });
    }

    private init(onChange: (v: { label: string, value: string }) => void): void {
        this.createOptionsList(onChange);
        this.buttonClickEvent();
    }
}