import {Sprites} from "../../const/sprites";
import {GAME_DATA} from "../../data";
import {Checkbox, EngineObject} from "../../data/types";
import {SpriteData} from "../../const/types";
import {MapDownload} from "./MapDownload";

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
        debugObjectGraphic: HTMLDivElement;
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
            debugObjectContainer: document.querySelector('#debug-object-container'),
            debugObjectGraphic: document.querySelector('#debugger-object-graphic')
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

    private showGraphic(): void {
        const sprite: SpriteData = Sprites.find(({src}) => src.includes(this.object.sprite.src));
        if (sprite) {
            this.dom.debugObjectGraphic.style.backgroundImage = sprite.src;
            this.dom.debugObjectGraphic.style.width = `${sprite.size.cellWidth}px`;
            this.dom.debugObjectGraphic.style.height = `${sprite.size.cellHeight}px`;
            this.dom.debugObjectGraphic.style.backgroundPosition = `-${this.object.sprite.position.y * sprite.size.cellWidth}px -${this.object.sprite.position.x * sprite.size.cellHeight}px`;

            this.object.checkboxes.forEach((checkbox, index) => {
                const span: HTMLSpanElement = document.createElement('span');
                span.style.display = 'block';
                span.style.position = 'absolute';
                span.style.width = `${checkbox.width}px`;
                span.style.height = `${checkbox.height}px`;
                span.style.top = `${checkbox.x}px`;
                span.style.left = `${checkbox.y}px`;
                span.style.border = '1px solid red';
                span.dataset.checkboxIndex = `${index}`;
                this.dom.debugObjectGraphic.appendChild(span);
            })
        }

    }

    private createDataPanel(): void {
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

    private createCheckboxesPanel(): void {
        if (this.object) {
            this.object.checkboxes.forEach((checkbox, index) => {
                const row = document.createElement('div');
                const span = document.createElement('span');
                span.className = "text text--pinkSecondary";
                span.innerText = `- ${index + 1}`;
                row.appendChild(span);

                const inputsWrapper = document.createElement('div');
                inputsWrapper.className = 'debugger__inputsWrapper'


                const xInput = document.createElement('input');
                xInput.type = 'number';
                xInput.value = String(checkbox.x);
                xInput.addEventListener('input', (e: any) => {
                    const checkboxElement: HTMLSpanElement = document.querySelector(`#debugger-object-graphic [data-checkbox-index="${index}"]`);
                    if (checkboxElement) {
                        checkboxElement.style.left = `${e.target.value}px`;
                    }
                });


                const yInput = document.createElement('input');
                yInput.type = 'number';
                yInput.value = String(checkbox.y);
                yInput.addEventListener('input', (e: any) => {
                    const checkboxElement: HTMLSpanElement = document.querySelector(`#debugger-object-graphic [data-checkbox-index="${index}"]`);
                    if (checkboxElement) {
                        checkboxElement.style.top = `${e.target.value}px`;
                    }
                });

                const widthInput = document.createElement('input');
                widthInput.type = 'number';
                widthInput.value = String(checkbox.width);
                widthInput.addEventListener('input', (e: any) => {
                    const checkboxElement: HTMLSpanElement = document.querySelector(`#debugger-object-graphic [data-checkbox-index="${index}"]`);
                    if (checkboxElement) {
                        checkboxElement.style.width = `${e.target.value}px`;
                    }
                });


                const heightInput = document.createElement('input');
                heightInput.type = 'number';
                heightInput.value = String(checkbox.height);
                heightInput.addEventListener('input', (e: any) => {
                    const checkboxElement: HTMLSpanElement = document.querySelector(`#debugger-object-graphic [data-checkbox-index="${index}"]`);
                    if (checkboxElement) {
                        checkboxElement.style.height = `${e.target.value}px`;
                    }
                });


                inputsWrapper.appendChild(xInput)
                inputsWrapper.appendChild(yInput)
                inputsWrapper.appendChild(widthInput)
                inputsWrapper.appendChild(heightInput)


                row.className = 'flex flex__align--center mb--8';
                row.appendChild(inputsWrapper);

                this.dom.debugObjectContainer.appendChild(row);
            });

            const button = document.createElement("button");
            button.className = 'button button--md button--primary';
            button.innerText = 'Console log checkboxes';
            // {x: 0, y: 0, width: 40, height: 40}
            // length
            // :
            // 1
            // [[Prototype]]
            // :
            // Array(0)
            button.addEventListener('click', () => {
                const checkboxesElements: Array<HTMLSpanElement> = document.querySelectorAll('#debugger-object-graphic span') as unknown as Array<HTMLSpanElement>;
                const checkboxes: Array<Checkbox> = [];
                checkboxesElements.forEach((checkboxElement) => {
                    checkboxes.push({
                        x: parseFloat(checkboxElement.style.left),
                        y: parseFloat(checkboxElement.style.top),
                        width: parseFloat(checkboxElement.style.width),
                        height: parseFloat(checkboxElement.style.height)
                    })
                });
                console.log(checkboxes);
            })
            this.dom.debugObjectContainer.appendChild(button);
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
        //this.createDataPanel();
        this.createCheckboxesPanel()
        this.showGraphic();
    }

    public init(): void {
        new MapDownload();
        this.actionBarButtonEvents();
        this.initSelect();
        this.inputChangeEvent();
        this.searchObjectEvent();
        this.initActions();
    }

}