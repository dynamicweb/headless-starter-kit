import GridRowColumn from "./GridRowColumn";

export default class GridRow extends HTMLDivElement {
    constructor(row) {
        super()
        this.row = row;
    }

    connectedCallback() {
        this.classList.add('section');
        this.dataset.row = this.row.id;
        this.dataset.background = this.getFieldValue('Background');
        this.dataset.paddingTop = this.getFieldValue('PaddingTop');
        this.dataset.paddingBottom = this.getFieldValue('PaddingBottom');
        const container = document.createElement('div');
        container.classList.add('container');
        container.dataset.width = this.getFieldValue('Width');
        const grid = document.createElement('div');
        grid.classList.add('grid');
        this.append(container);
        container.append(grid)

        this.row.columns.forEach(column => {
            const gridColumn = new GridRowColumn(column);
            grid.append(gridColumn);
        });
    }

    getFieldValue(systemName) {
        return this.row.item?.fields?.find(f => f.systemName === systemName)?.value.SelectedValue || '';
    }
}

customElements.define('grid-row', GridRow, {extends: 'div'});