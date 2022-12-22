import {Sprites} from "../../const/sprites";
import {GAME_DATA} from "../../data";
import {EngineObject} from "../../data/types";

export class ObjectDebugger {
    private dom: {
        selectButton: HTMLDivElement,
        selectList: HTMLDivElement,
        input: HTMLInputElement,
        findButton: HTMLButtonElement;
        actionBtnData: HTMLButtonElement;
        actionBtnCheckboxes: HTMLButtonElement;
        actionBtnActionAreas: HTMLButtonElement;
        debugObjectContainer: HTMLDivElement;
    }
    private objectType: string;
    private inputValue: string;
    private object: EngineObject | null;
    private actionTab: number;

    constructor() {
        this.dom = {
            selectButton: document.querySelector('#select-object-type-button'),
            selectList: document.querySelector('#select-object-type-list'),
            input: document.querySelector('#select-object-input-type'),
            findButton: document.querySelector('#find-object-btn'),
            actionBtnData: document.querySelector('#debugger-action-btn-data'),
            actionBtnCheckboxes: document.querySelector('#debugger-action-btn-checkboxes'),
            actionBtnActionAreas: document.querySelector('#debugger-action-btn-action-areas'),
            debugObjectContainer: document.querySelector('#debug-object-container')
        }
        this.objectType = 'trees';
        this.inputValue = 'OAK';
        this.objectType = null;
        this.actionTab = 1;
        this.init();
    }

    private initSelect(): void {
        Object.keys(GAME_DATA).forEach((objectType) => {
            const option: HTMLLIElement = document.createElement('li');
            const optionButton: HTMLButtonElement = document.createElement('button');
            optionButton.addEventListener("click", () => {
                this.objectType = objectType;
                this.dom.selectList.classList.add('hide');
                this.dom.selectButton.innerText = objectType;
            })
            option.appendChild(optionButton);
            option.className = 'select-item';
            optionButton.innerText = objectType;
            this.dom.selectList.appendChild(option);
        })

        this.dom.selectButton.addEventListener('click', () => {
            this.dom.selectList.classList.remove('hide');
        })
    }

    private searchObjectEvent(): void {
        this.dom.findButton.addEventListener('click', () => {
            console.log(1);
            const data: Array<EngineObject> = GAME_DATA[this.objectType as keyof typeof GAME_DATA];
            if (data) {
                const object = data.find(({id}) => id === this.inputValue);
                if (object) {
                    this.object = object;
                }
            }
        });
    }

    private inputChangeEvent(): void {
        this.dom.input.addEventListener('input', (e: any) => {
            this.inputValue = e.target.value;
        })
    }

    private createDataPanel(): void {
        console.log(this.object);
        if (this.object) {
            const {id, name, hp, tools, destroyable, items} = this.object;
            const html: string = `
             <div class="text--grey">
             <p class="mb--8 text">id: <span class="text--pinkSecondary">${id}</span></p>
             <p class="mb--8 text">name: <span class="text--pinkSecondary">${name}</span></p>  
             <p class="mb--8 text">hp: <span class="text--pinkSecondary">${hp}</span></p>     
             <p class="mb--8 text">tools: <span class="text--pinkSecondary">${tools.map((tool) => tool).join(', ')}</span></p> 
             <p class="mb--8 text">destroyable: <span class="text--pinkSecondary">${destroyable}</span></p> 
             <p class="mb--8 text">items: <span class="text--pinkSecondary">${items}</span></p> 
             </div>
        `;
            this.dom.debugObjectContainer.innerHTML = html;
        }
    }

    private actionBarButtonEvents(): void {
        const resetStyles = () => {
            this.dom.actionBtnActionAreas.classList.remove('debugger__actionBar--btnAction');
            this.dom.actionBtnCheckboxes.classList.remove('debugger__actionBar--btnAction');
            this.dom.actionBtnData.classList.remove('debugger__actionBar--btnAction');
        }
        this.dom.actionBtnData.addEventListener('click', () => {
            resetStyles();
            this.dom.actionBtnData.classList.add('debugger__actionBar--btnAction');
            this.createDataPanel()
        });
        this.dom.actionBtnCheckboxes.addEventListener('click', () => {
            resetStyles();
            this.dom.actionBtnCheckboxes.classList.add('debugger__actionBar--btnAction');
        });
        this.dom.actionBtnActionAreas.addEventListener('click', () => {
            resetStyles();
            this.dom.actionBtnActionAreas.classList.add('debugger__actionBar--btnAction');
        });

        this.dom.actionBtnData.classList.add('debugger__actionBar--btnAction');
    }

    initActions() {
        this.dom.selectButton.innerText = this.objectType;
        this.object = GAME_DATA.trees[0];
        this.createDataPanel();
    }

    public init(): void {
        this.actionBarButtonEvents();
        this.initSelect();
        this.inputChangeEvent();
        this.searchObjectEvent();
        this.initActions();
    }

}