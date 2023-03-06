import {ObjectToolInterface} from "../../../../data/types";
import {Inspect} from "../index";
import {findObject} from "../../../../utils/EngineObjects";

export class InspectTools {
    private readonly tableBodyElement: HTMLTableSectionElement;

    constructor() {
        this.tableBodyElement = document.querySelector('#inspect-sections-tools-table-body')
    }

    private createTableRow({id, damage, usage}: ObjectToolInterface): void {
        let tableBodyHTML = this.tableBodyElement.innerHTML;
        const {name} = findObject(id) ?? {};

        tableBodyHTML += `
           <tr>
             <td>${id}</td>
             <td>${name ?? ''}</td>     
             <td>${typeof damage === 'number' ? `${damage}` : `${damage[0]} - ${damage[1]}`}</td>                   
             <td>${usage}</td>                                                   
           </tr>
        `;
        this.tableBodyElement.innerHTML = tableBodyHTML;
    }

    private clearTableBodyHTML(): void {
        this.tableBodyElement.innerHTML = '';
    }

    public build(tools: Array<ObjectToolInterface>): void {
        this.clearTableBodyHTML();
        tools.map((tool: ObjectToolInterface) => this.createTableRow(tool));
    }
}