import {SelectOption} from "../../../utils/types";
import {GAME_DATA} from "../../../../data";

export const GAME_OBJECTS_OPTIONS: Array<SelectOption> = [
    {
        label: 'Trees stage 4',
        value: GAME_DATA.objects.treesStage4
    },
    {
        label: 'Resources 32x',
        value: GAME_DATA.objects.resources32
    },
    {
        label: 'Resources 16x',
        value: GAME_DATA.objects.resources16
    },
    {
        label: 'Fences',
        value: GAME_DATA.objects.fences
    },
    {
        label: 'Flooring',
        value: GAME_DATA.objects.flooring
    },
    {
        label: 'Hoed dirt',
        value: GAME_DATA.objects.dirtHoed
    },
    {
        label: 'Buildings',
        value: GAME_DATA.objects.buildings
    },
    {
        label: 'Crops',
        value: GAME_DATA.objects.crops
    },
    {
        label: 'Crops giant',
        value: GAME_DATA.objects.cropsGiant
    },
    {
        label: 'Trees',
        value: GAME_DATA.objects.Trees
    },
]
