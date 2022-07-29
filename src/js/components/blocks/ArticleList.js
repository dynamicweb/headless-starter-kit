import { getArticles } from "../../api/articles";
import { navigate } from "../../api/navigation";

const template = document.createElement('template');
template.innerHTML = `
	
	<div class="section bg-n-3">
		<div class="container">
			<div class="articles-list grid"></div>
		</div>
	</div>
`;

export class ArticleList extends HTMLElement {
	constructor() {
		super()
	}

	async connectedCallback() {
		
		const section = template.content;
		const articles = await getArticles();
		const list = section.querySelector(".articles-list");
		this.appendChild(section);

		articles.forEach(article => {
			const card = document.createElement('div');
			const header = document.createElement('h3');
			const date = document.createElement('div')
			const text = document.createElement('p');
			const link = document.createElement('a');
			card.classList.add('article-card','rnd-2','p-6','bg-n-1','shadow','flow');
			header.textContent = article.Name;
			text.textContent = article.Item.Fields.find(x => x.Name == 'Description').Value;
			date.textContent = new Date(article.UpdatedDate).toLocaleString('en-GB', {day: '2-digit', month: 'long' });
			link.textContent = article.Item.Link;
			link.href = article.Item.Link;
			link.onclick = (e) => {
				e.preventDefault();
				navigate(link, article.Item.Link);

			}
			card.append(header);
			card.append(text);
			card.append(link);
			list.appendChild(card);
		})

	}
}

customElements.define('article-list', ArticleList);