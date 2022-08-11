import { Content } from '@dynamicweb/headless-api';
import { createClient } from "../../api/clientFactory";
import { ArticleItem } from '../items/ArticleItem';

export default class ArticlePage extends HTMLElement {
	constructor(page) {
		super()
		this.page = page;
	}

	async connectedCallback() {
		const client = createClient(Content.PagesClient);
		const articles = await client.getAll(null,this.page.iD);

		const section = document.createRange().createContextualFragment(`
			<div class="section"></div>
		`).firstElementChild;

		const container = document.createRange().createContextualFragment(`
			<div class="container"></div>
		`).firstElementChild;

		const grid = document.createRange().createContextualFragment(`
			<div class="grid" data-type="article"></div>
		`).firstElementChild;
		
		articles.forEach(article => {
			const articleItem = new ArticleItem(article);
			grid.append(articleItem);
		});

		section.append(container);
		container.append(grid);

		this.append(section);
	}
}

customElements.define('article-page', ArticlePage);