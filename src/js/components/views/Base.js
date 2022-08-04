import { Content } from '@dynamicweb/headless-api';
import { makeBlock } from '../../api/blocks';
import { createClient } from '../../api/clientFactory';
import Spinner from '../blocks/Spinner';

export default class Base extends HTMLElement {
	constructor(page) {
		super()
		this.page = page;
	}

	async connectedCallback() {
		
		this.append(new Spinner());

		const client = createClient(Content.ParagraphsClient);
		const paragraphs = await client.getAll(null, this.page.iD);

		const renders = paragraphs.map(makeBlock);
		const blocks = await Promise.all(renders);
		
		this.replaceChildren([])
		
		blocks.forEach(block => {
			const section = document.createElement('div');
			const container = document.createElement('div');
			
			section.classList.add('section');
			container.classList.add('container');
			
			container.append(block)
			section.append(container)
			this.append(section)
		});
	}
}

customElements.define('dw-main', Base);