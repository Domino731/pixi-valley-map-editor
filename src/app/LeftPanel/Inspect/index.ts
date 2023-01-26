import {GAME_DATA} from "../../../data";
import {EngineObject, SpriteSize} from "../../../data/types";
import {SpritesConfig} from "../../../data/spritesConfig";
import {GeneralData} from "./GeneralData";
import {INSPECT_SECTIONS_NAMES, InspectSectionsNamesUnion} from "./const";

export class Inspect {
    private readonly inspect: {
        generalData: GeneralData
    };

    constructor() {
        this.inspect = {
            generalData: new GeneralData()
        }
        this.init();
    }


    /**
     * find object's size
     * @param objectSpriteSrc - object sprite source needed to find the specific size
     * */
    private static findObjectSize(objectSpriteSrc: string): SpriteSize {
        return SpritesConfig.find(({sprite}) => sprite === objectSpriteSrc)?.size;
    }

    /**
     * Find game object by id
     * @param objectId - object id
     * */
    public static findEngineObjectById(objectId: string): EngineObject {
        return Object.values(GAME_DATA.objects).flat().find(({id}: { id: string }) => id === objectId);
    }

    /**
     * Add object image to blueprint
     * @param objectId - object's id needed to find the specific one data
     * */
    public static addImage(objectId: string): void {
        // get data - object, sprite size, dom element
        const {sprite}: EngineObject = this.findEngineObjectById(objectId);
        const {cellWidth, cellHeight}: SpriteSize = this.findObjectSize(sprite.src);
        const blueprint: HTMLDivElement = document.querySelector('#inspect-blueprint');
        const blueprintLabel: HTMLParagraphElement = document.querySelector('#inspect-blueprint-label');

        // apply styles
        blueprint.style.width = `${cellWidth}px`;
        blueprint.style.height = `${cellHeight}px`;
        blueprint.style.backgroundImage = `url(./src/sprites/${sprite.src})`;
        blueprint.style.backgroundPosition = `-${sprite.position.x * cellWidth}px -${sprite.position.y * cellHeight}px`;

        // hide label
        blueprintLabel.classList.add('hide');
    }

    private panelButtons(): void {
        // general constants
        const activeButtonClass: string = 'inspect__panelButton--active';
        const disabledButtonClass: string = 'inspect__panelButton--disabled'

        // gather button elements in order to apply click events that will be responsible for toggling inspection section
        const dataButton: HTMLButtonElement = document.querySelector('#inspect-data-button');
        const checkboxesButton: HTMLButtonElement = document.querySelector('#inspect-checkboxes-button');
        const itemsButton: HTMLButtonElement = document.querySelector('#inspect-items-button');

        // put all buttons into array, so it will be easy to change their styles (active or disabled)
        const allButtons: Array<HTMLButtonElement> = [dataButton, checkboxesButton, itemsButton];

        // function that makes all buttons disabled
        const setAllButtonsDisabled = (): void => {
            allButtons.forEach((button: HTMLButtonElement): void => button.classList.add(disabledButtonClass));
        }

        // set section
        const setActiveSection = (button: HTMLButtonElement): void => {
            button.addEventListener('click', (e) => {
                setAllButtonsDisabled();
                button.classList.remove(disabledButtonClass);
                button.classList.add(activeButtonClass);

                this.buildSection(button.dataset.sectionName as InspectSectionsNamesUnion, GAME_DATA.objects.crops[0])
            });
        }

        // apply event on each button
        setActiveSection(dataButton);
        setActiveSection(checkboxesButton);
        setActiveSection(itemsButton);
    }

    private buildSection(sectionName: InspectSectionsNamesUnion, engineObject: EngineObject): void {
        switch (sectionName) {
            case INSPECT_SECTIONS_NAMES.GENERAL_DATA:
                this.inspect.generalData.build(engineObject);
                break;
            default:
                break;
        }
    }

    private init(): void {
        console.log(12);
        this.panelButtons();
    }

}
