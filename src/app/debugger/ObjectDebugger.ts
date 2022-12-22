import {Sprites} from "../../const/sprites";
import {GAME_DATA} from "../../data";
import {EngineObject} from "../../data/types";

export class ObjectDebugger {
    private dom: {
        selectButton: HTMLDivElement,
        selectList: HTMLDivElement,
        input: HTMLInputElement,
        findButton: HTMLButtonElement
    }
    private objectType: string;
    private inputValue: string;
    private object: EngineObject | null;

    constructor() {
        this.dom = {
            selectButton: document.querySelector('#select-object-type-button'),
            selectList: document.querySelector('#select-object-type-list'),
            input: document.querySelector('#select-object-input-type'),
            findButton: document.querySelector('#find-object-btn'),
        }
        this.objectType = 'trees';
        this.inputValue = '';
        this.objectType = null;
        this.init();
    }

    private initSelect(): void {
        this.dom.selectButton.innerText = this.objectType;

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

    public init(): void {
        this.initSelect();
        this.inputChangeEvent();
        this.searchObjectEvent();
    }

}