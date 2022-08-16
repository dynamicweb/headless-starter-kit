import { getNavigation, NavigationStateChanged, navigate } from "../../api/navigation";
import Dw404 from "../views/404";
import { Content } from '@dynamicweb/headless-api';
import ErrorView from "../views/ErrorView";
import { createClient } from "../../api/clientFactory";

export class RoutingHandler extends HTMLElement {
	#pages;

	constructor() {
		super()
	}

	async connectedCallback() {
		const pages = await getNavigation();
		this.#pages = this.flattenNavigation(pages, []);
		
		document.addEventListener(NavigationStateChanged, this.handleNavigation.bind(this))

		if(location.pathname !== '') {
			navigate(this, location.pathname + location.search);
		}
	}

	flattenNavigation(pages, result) {

		pages.forEach(p => {
			result.push(p);
			this.flattenNavigation(p.nodes, result);
		});

		return result;
	}

	async handleNavigation(e) {
		const page = this.#getPageFromUrl();
		if (!page) {
			this.replaceChildren(new Dw404());
			return;
		}
		
		document.title = page.name;

		const client = createClient(Content.PagesClient);
		const pageItem = await client.getById(page.pageId);

		try {
			const View = await import(`../views/${pageItem.item.systemName}.js`);
			this.replaceChildren(new View.default(pageItem));	
		} catch (error) {
			console.log(error);
			this.replaceChildren(new ErrorView(pageItem));
		}
	}
	
	#getPageFromUrl() {
		const matchingPages = this.#pages.filter(p => p.link === location.pathname);

		if (matchingPages.length === 0 && location.pathname !== '' && location.pathname !== '/') {
			return null;
		}

		const pages = matchingPages.length === 0 ? this.#pages : matchingPages;
		return pages[0];
	}
}

customElements.define('routing-handler', RoutingHandler);