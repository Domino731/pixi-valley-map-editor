import {GAME_DATA} from "../../../data";
import {DropItemInterface, EngineObject, ObjectToolInterface, SpriteSize} from "../../../data/types";
import {SpritesConfig} from "../../../data/spritesConfig";
import {GeneralData} from "./GeneralData";
import {INSPECT_SECTIONS_NAMES, InspectSectionsNamesUnion} from "./const";
import {Collision} from "./Components/Collision";
import {DropItems} from "./Components/DropIItems";
import {RESOURCES_16_NAMES, RESOURCES_32_NAMES} from "../../../data/resources/const";
import {Description} from "./Components/Description";
import {InspectJson} from "./Components/JSON";
import {InspectTools} from "./Components/Tools";
import {ActionCollisionProps} from "./Components/types";
import {InspectStages} from "./Components/Stages";
import {hide, show} from "../../../utils/toggleElementVisibility";
import {Locations} from "./Components/Locations";
import {findObjectSprite, findObjectSpriteSize} from "../../../utils/sprites";

export class Inspect {
    private readonly inspect: {
        generalData: GeneralData,
        dropItems: DropItems,
        description: Description,
        inspectJson: InspectJson,
        inspectTools: InspectTools,
        inspectStages: InspectStages
        locations: Locations
    };
    private readonly generalDataSection: HTMLElement;
    private readonly checkboxesSection: HTMLElement;
    private readonly dropItemsSection: HTMLElement;
    private readonly descriptionSection: HTMLElement;
    private readonly actionCollisionsSection: HTMLElement;
    private readonly stagesSection: HTMLElement;
    private readonly toolsSection: HTMLElement;
    private readonly jsonSection: HTMLElement;
    private readonly locationsSection: HTMLElement;

    constructor() {
        this.inspect = {
            generalData: new GeneralData(),
            dropItems: new DropItems(),
            description: new Description(),
            inspectJson: new InspectJson(),
            inspectTools: new InspectTools(),
            inspectStages: new InspectStages(),
            locations: new Locations()
        }
        this.generalDataSection = document.querySelector('#inspect-sections-general-data');
        this.checkboxesSection = document.querySelector('#inspect-sections-checkboxes');
        this.dropItemsSection = document.querySelector('#inspect-sections-drop-items');
        this.descriptionSection = document.querySelector('#inspect-sections-description');
        this.actionCollisionsSection = document.querySelector('#inspect-sections-action-collisions')
        this.stagesSection = document.querySelector('#inspect-sections-stages');
        this.toolsSection = document.querySelector('#inspect-sections-tools');
        this.jsonSection = document.querySelector('#inspect-sections-json');
        this.locationsSection = document.querySelector('#inspect-sections-location');
        this.init();
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
    public static addImage(object: EngineObject): void {
        // get data - object, sprite size, dom element
        const sprite = findObjectSprite(object);
        console.log(sprite);
        if (sprite) {
            const {cellWidth, cellHeight}: SpriteSize = findObjectSpriteSize(object);
            const blueprintContainer: HTMLParagraphElement = document.querySelector('#inspect-blueprint-container');
            const blueprint: HTMLDivElement = document.querySelector('#inspect-blueprint');
            const blueprintLabel: HTMLParagraphElement = document.querySelector('#inspect-blueprint-label');

            // apply styles
            blueprint.style.width = `${cellWidth}px`;
            blueprint.style.height = `${cellHeight}px`;
            blueprint.style.backgroundImage = `url(./src/sprites/${object.sprite.src})`;
            blueprint.style.backgroundPosition = `-${object.sprite.position.x * cellWidth}px -${object.sprite.position.y * cellHeight}px`;

            // hide label
            blueprintContainer.className = 'inspect__blueprint inspect__blueprint--active'
        }
    }

    private panelButtons(): void {
        // general constants
        const activeButtonClass: string = 'inspect__panelButton--active';
        const disabledButtonClass: string = 'inspect__panelButton--disabled';

        // gather button elements in order to apply click events that will be responsible for toggling inspection section
        const buttons: Array<HTMLButtonElement> = document.querySelectorAll('#inspect-buttons button') as unknown as Array<HTMLButtonElement>;

        // function that makes all buttons disabled
        const setAllButtonsDisabled = (): void => {
            buttons.forEach((button: HTMLButtonElement): void => button.classList.add(disabledButtonClass));
        }

        // apply click event on each event in order to give ability to change inspect section
        buttons.forEach((buttonElement: HTMLButtonElement) => {
            buttonElement.addEventListener('click', (e) => {
                setAllButtonsDisabled();
                buttonElement.classList.remove(disabledButtonClass);
                buttonElement.classList.add(activeButtonClass);

                this.buildSection(buttonElement.dataset.sectionName as InspectSectionsNamesUnion, GAME_DATA.objects.crops[0])
            });
        });
    }

    private hideAllSections(): void {
        hide([
            this.generalDataSection, this.checkboxesSection,
            this.dropItemsSection, this.descriptionSection,
            this.actionCollisionsSection, this.toolsSection,
            this.jsonSection, this.stagesSection, this.locationsSection
        ]);
    }

    private buildGeneralDataSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.generalDataSection)
        this.inspect.generalData.build(engineObject);
    }

    private buildCheckboxesSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.checkboxesSection)
        document.querySelector('#inspect-checkboxes-list').innerHTML = '';
        engineObject.checkboxes.forEach((el, index) => new Collision('#inspect-checkboxes-list', {
            index,
            height: el.height,
            width: el.width,
            xPosition: el.x,
            yPosition: el.y
        }).build());
    }

    private buildDropItemsSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.dropItemsSection)
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

    private buildDescriptionSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.descriptionSection);
        this.inspect.description.build(engineObject.description);
    }

    private buildActionCollisionsSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.actionCollisionsSection)
        document.querySelector('#inspect-tools-list').innerHTML = '';
        engineObject.checkboxes.forEach((el, index) => new Collision('#inspect-tools-list', {
            index,
            height: el.height,
            width: el.width,
            xPosition: el.x,
            yPosition: el.y
        }, true).build());
    }

    private buildInspectJsonSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.jsonSection)
        this.inspect.inspectJson.build(engineObject)
    }

    private buildInspectToolsSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.toolsSection);
        this.inspect.inspectTools.build(engineObject.toolsFor ?? []);
    }

    private buildInspectStagesSection(engineObject: EngineObject): void {
        this.hideAllSections();
        show(this.stagesSection)
        if (engineObject.type === 'TREES') {
            // TODO fix
            // @ts-ignore
            this.inspect.inspectStages.build(engineObject.stages)
        }

    }

    private buildLocationsSection(): void {
        this.hideAllSections();
        show(this.locationsSection);
        // this.inspect.locations.build();
    }

    private buildSection(sectionName: InspectSectionsNamesUnion, engineObject: EngineObject): void {
        switch (sectionName) {
            case INSPECT_SECTIONS_NAMES.GENERAL_DATA:
                this.buildGeneralDataSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.CHECKBOXES:
                this.buildCheckboxesSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.DROP_ITEMS:
                this.buildDropItemsSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.DESCRIPTION:
                this.buildDescriptionSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.ACTION_COLLISIONS:
                this.buildActionCollisionsSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.JSON:
                this.buildInspectJsonSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.TOOLS:
                this.buildInspectToolsSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.STAGES:
                this.buildInspectStagesSection(engineObject);
                break;
            case INSPECT_SECTIONS_NAMES.LOCATIONS:
                this.buildLocationsSection();
                break;
            default:
                break;
        }
    }

    private init(): void {
        this.panelButtons();
    }

}

// TODO: features
// - Dodać opisy do każdej z sekcji inspekcji
// - Dodać sekcję z wariantami (zima, lato)