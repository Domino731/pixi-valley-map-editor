import {ENGINE_OBJECT_GROUPS, ENGINE_OBJECTS_TYPES, EngineObject, SPRITE_SRC} from "../types";
import {TOOLS} from "../tools/types";
import {TREE_ITEMS} from "./types";

const defaultHp = 100;
const flooringFactory = (flooringName: string) => {
    let xOffset: number = 0;
    let yOffset: number = 0;

    return [
        {
            id: `${flooringName} without border`,
            name: `${flooringName} without border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 0 + xOffset,
                    y: 0 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} top-left border`,
            name: `${flooringName} top-left border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 1 + xOffset,
                    y: 0 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} top border`,
            name: `${flooringName} top border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 2 + xOffset,
                    y: 0 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} top-right border`,
            name: `${flooringName} top-right border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 3 + xOffset,
                    y: 0 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} left-top-right border`,
            name: `${flooringName} left-top-right border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 0 + xOffset,
                    y: 1 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} left border`,
            name: `${flooringName} left border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 1 + xOffset,
                    y: 1 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} floor`,
            name: `${flooringName} floor`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 2 + xOffset,
                    y: 1 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} right floor`,
            name: `${flooringName} right floor`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 3 + xOffset,
                    y: 1 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} left-right border`,
            name: `${flooringName} left-right border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 0 + xOffset,
                    y: 2 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} left-bottom border`,
            name: `${flooringName} left-bottom border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 1 + xOffset,
                    y: 2 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} bottom border`,
            name: `${flooringName} bottom border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 2 + xOffset,
                    y: 2 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} bottom-right border`,
            name: `${flooringName} bottom-right border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 3 + xOffset,
                    y: 2 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} left-bottom-right border`,
            name: `${flooringName} left-bottom-right border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 0 + xOffset,
                    y: 3 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} left-top-bottom border`,
            name: `${flooringName} left-top-bottom border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 1 + xOffset,
                    y: 3 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} top-bottom border`,
            name: `${flooringName} top-bottom border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 2 + xOffset,
                    y: 3 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
        {
            id: `${flooringName} left-right-bottom border`,
            name: `${flooringName} left-right-bottom border`,
            hp: defaultHp,
            sprite: {
                src: SPRITE_SRC.FLOORING,
                position: {
                    x: 3 + xOffset,
                    y: 3 + yOffset,
                }
            },
            tools: [TOOLS.AXE],
            destroyable: true,
            checkboxes: [
                {
                    x: 0,
                    y: 0,
                    width: 40,
                    height: 40
                }
            ],
            items: [TREE_ITEMS.WOOD]
        },
    ]
}

export const flooring: Array<EngineObject> = [...flooringFactory('Oak')]
    .map(el => ({
        ...el,
        group: ENGINE_OBJECT_GROUPS.ENVIROMENT,
        type: ENGINE_OBJECTS_TYPES.TREES
    }))