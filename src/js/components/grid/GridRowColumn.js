import { makeBlock } from "../../api/blocks";

export default class GridRowColumn extends HTMLElement {
    constructor(column) {
        super()
        this.column = column;
    }

    async connectedCallback() {
        this.classList.add('grid-column');

        if (this.column.paragraph === undefined) return;
        
        const block = await makeBlock(this.column.paragraph);
        this.append(block);
    }
}

customElements.define('grid-row-column', GridRowColumn);