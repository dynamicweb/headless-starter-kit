import { Content } from '@dynamicweb/headless-api';
import { createClient } from "../../api/clientFactory";
import { Article } from '../site/Article';

export default class ArticlePage extends HTMLElement {
	constructor(page) {
		super()
		this.page = page;
	}

	async connectedCallback() {
		// console.log(this.page);
		const client = createClient(Content.PagesClient);
		const articles = await client.getAll(null,this.page.iD);
		
		articles.forEach(article => {
			this.append(new Article(article));
		});
	}
}

customElements.define('article-page', ArticlePage);