import {EngineObject} from "../../../data/types";
import {get} from 'lodash';

export class GeneralData {
    private readonly tableValueCells: NodeListOf<HTMLTableCellElement>

    constructor() {
        this.tableValueCells = document.querySelectorAll('.inspectTable td[data-inspect-table-object-attribute]')
    }

    public buildPanel(engineObject: EngineObject) {
        this.tableValueCells.forEach((cell) => {
            // find value base on attribute path
            const {dataset: {inspectTableObjectAttribute}} = cell;
            const value: any = get(engineObject, inspectTableObjectAttribute);

            // inject value into table cell
            cell.innerText = value;
        })
    }
}