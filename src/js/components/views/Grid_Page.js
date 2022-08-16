import { Content } from '@dynamicweb/headless-api';
import { createClient } from "../../api/clientFactory";
import GridRow from '../grid/GridRow';

export default class GridPage extends HTMLElement {
	constructor(page) {
		super()
		this.page = page;
	}

	async connectedCallback() {	
		const client = createClient(Content.GridRowClient);
		const gridRows = await client.getById(this.page.iD);
		
		gridRows.forEach(gridRow => {
			const row = new GridRow(gridRow);
			this.append(row);
		});
	}
}

customElements.define('grid-page', GridPage);