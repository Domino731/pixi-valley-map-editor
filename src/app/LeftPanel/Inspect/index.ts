import {GAME_DATA} from "../../../data";
import {DropItemInterface, EngineObject, SpriteSize} from "../../../data/types";
import {SpritesConfig} from "../../../data/spritesConfig";
import {GeneralData} from "./GeneralData";
import {INSPECT_SECTIONS_NAMES, InspectSectionsNamesUnion} from "./const";
import {Collision} from "./Components/Collision";
import {DropItems} from "./Components/DropIItems";
import {RESOURCES_32_NAMES} from "../../../data/resources/const";
import {Description} from "./Components/Description";

export class Inspect {
    private readonly inspect: {
        generalData: GeneralData,
        dropItems: DropItems,
        description: Description
    };
    private readonly generalDataSection: HTMLElement;
    private readonly checkboxesSection: HTMLElement;
    private readonly dropItemsSection: HTMLElement;
    private readonly descriptionSection: HTMLElement;
    private readonly actionCollisionsSection: HTMLElement;
    private readonly stagesSection: HTMLElement;
    private readonly toolsSection: HTMLElement;
    private readonly jsonSection: HTMLElement;

    constructor() {
        this.inspect = {
            generalData: new GeneralData(),
            dropItems: new DropItems(),
            description: new Description()
        }
        this.generalDataSection = document.querySelector('#inspect-sections-general-data');
        this.checkboxesSection = document.querySelector('#inspect-sections-checkboxes');
        this.dropItemsSection = document.querySelector('#inspect-sections-drop-items');
        this.descriptionSection = document.querySelector('#inspect-sections-description');
        this.actionCollisionsSection = document.querySelector('#inspect-sections-action-collisions')
        this.stagesSection = document.querySelector('#inspect-sections-stages');
        this.toolsSection = document.querySelector('#inspect-sections-tools');
        this.jsonSection = document.querySelector('#inspect-sections-json');
        this.init();
    }


    /**
     * find object's size
     * @param objectSpriteSrc - object sprite source needed to find the specific size
     * */
    private static findObjectSize(objectSpriteSrc: string): SpriteSize {
        return SpritesConfig.find(({sprite}) => sprite === objectSpriteSrc)?.size;
    }

    // TODO: move to utils class
    /**
     * Find game object by id
     * @param objectId - object id
     * */
    public static findEngineObjectById(objectId: string | number): EngineObject {
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
        const descriptionButton: HTMLButtonElement = document.querySelector('#inspect-description-button');
        const actionCollisionsButton: HTMLButtonElement = document.querySelector('#inspect-action-collisions-button');
        const toolsButton: HTMLButtonElement = document.querySelector('#inspect-tools-button');
        const stagesButton: HTMLButtonElement = document.querySelector('#inspect-stages-button');
        const jsonButton: HTMLButtonElement = document.querySelector('#inspect-json-button');

        // put all buttons into array, so it will be easy to change their styles (active or disabled)
        const allButtons: Array<HTMLButtonElement> = [dataButton, checkboxesButton, itemsButton, descriptionButton, actionCollisionsButton, toolsButton, stagesButton, jsonButton];

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
        setActiveSection(descriptionButton);
        setActiveSection(actionCollisionsButton);
        setActiveSection(toolsButton);
        setActiveSection(stagesButton);
        setActiveSection(jsonButton);
    }

    private hideAllSections(): void {
        this.generalDataSection.classList.add('hide');
        this.checkboxesSection.classList.add('hide');
        this.dropItemsSection.classList.add('hide');
        this.descriptionSection.classList.add('hide');
        this.actionCollisionsSection.classList.add('hide');
    }

    private buildGeneralDataSection(engineObject: EngineObject): void {
        this.hideAllSections();
        this.generalDataSection.classList.remove('hide');
        this.inspect.generalData.build(engineObject);
    }

    private buildCheckboxesSection(): void {
        this.hideAllSections();
        this.checkboxesSection.classList.remove('hide');
        document.querySelector('#inspect-checkboxes-list').innerHTML = '';
        const exampleCollisions = [{
            width: 40,
            height: 40,
            xPosition: 14,
            yPosition: 19
        }]
        exampleCollisions.forEach((el, index) => new Collision('#inspect-checkboxes-list', {...el, index}));
    }

    private buildDropItemsSection(): void {
        this.hideAllSections();
        this.dropItemsSection.classList.remove('hide');

        const example: Array<DropItemInterface> = [
            {
                id: RESOURCES_32_NAMES.LOG,
                chance: [20, 70],
                amount: 3
            },
            {
                id: RESOURCES_32_NAMES.BLUE_GEM,
                chance: 100,
                amount: 5
            },
            {
                id: RESOURCES_32_NAMES.ANDRONITE,
                chance: 0.9,
                amount: 5
            },
        ]

        this.inspect.dropItems.build(example);
    }

    private buildDescriptionSection(): void {
        this.hideAllSections();
        this.descriptionSection.classList.remove('hide');
        this.inspect.description.build(`dolor sit
                                amet,
                                consectetur adipisicing elit.
                                Dignissimos dolore et ex facere fugit iure magni odit recusandae temporibus vel. Animi
                                aut consequuntur cum cupiditate earum esse est ex explicabo id in ipsam iusto labore
                                laboriosam, nesciunt non odit omnis, quam qui reiciendis saepe velit voluptates
                                voluptatum!!`);
    }

    private buildActionCollisionsSection(): void {
        this.hideAllSections();
        this.actionCollisionsSection.classList.remove('hide');
    }

    private buildSection(sectionName: InspectSectionsNamesUnion, engineObject: EngineObject): void {
        switch (sectionName) {
            case INSPECT_SECTIONS_NAMES.GENERAL_DATA:
                this.buildGeneralDataSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.CHECKBOXES:
                this.buildCheckboxesSection();
                break;
            case INSPECT_SECTIONS_NAMES.DROP_ITEMS:
                this.buildDropItemsSection();
                break;
            case INSPECT_SECTIONS_NAMES.DESCRIPTION:
                this.buildDescriptionSection();
                break;
            case INSPECT_SECTIONS_NAMES.ACTION_COLLISIONS:
                this.buildActionCollisionsSection();
                break;
            default:
                break;
        }
    }

    private init(): void {
        this.panelButtons();
    }

}
