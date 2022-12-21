import {Main} from "../../Main";

export class Debugger {
    private dom: {
        debugButton: HTMLButtonElement
    }
    private debug: boolean;

    constructor(main: Main) {
        this.dom = {
            debugButton: document.querySelector('#debug-button')
        }
        this.debug = false;
        this.init();
    }

    debugButtonClickEvent(): void {
        this.dom.debugButton.addEventListener('click', (e) => {
            if (this.debug) {
                e.target.classList.add('button--outline');
                e.target.classList.remove('button--primary');
                e.target.innerText = 'Debug mode off';
                this.debug = false;
            } else {
                e.target.classList.remove('button--outline');
                e.target.classList.add('button--primary');
                e.target.innerText = 'Debug mode on';
                this.debug = true;
            }
        })
    }

    public init(): void {
        this.debugButtonClickEvent();
        console.log('started');
    }
}