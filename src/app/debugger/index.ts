import {Main} from "../../Main";
import {ObjectDebugger} from "./ObjectDebugger";

export class Debugger {
    private dom: {
        debugButton: HTMLButtonElement
    }
    private debug: boolean;
    private objectDebugger: ObjectDebugger;

    constructor(main: Main) {
        this.dom = {
            debugButton: document.querySelector('#debug-button')
        }
        this.debug = false;
        this.init();
        this.objectDebugger = new ObjectDebugger();
    }

    debugButtonClickEvent(): void {
        this.dom.debugButton.addEventListener('click', (e: any) => {
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