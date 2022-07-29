import { getNavigation, NavigationStateChanged, navigate } from "../../api/navigation";
import Dw404 from "../views/404";

export class RoutingHandler extends HTMLElement {
	#pages;

	constructor() {
		super()
	}

	async connectedCallback() {
		this.#pages = await getNavigation();
		document.addEventListener(NavigationStateChanged, this.handleNavigation.bind(this))

		if(location.pathname !== '') {
			navigate(this, location.pathname);
		}
	}

	async handleNavigation(e) {
		const page = this.#getPageFromUrl();
		if (!page) {
			this.replaceChildren(new Dw404());
			return;
		}
		
		document.title = page.Name;

		try {
			const View = await import(`../views/${page.Item.SystemName}.js`);
			this.replaceChildren(new View.default(page));	
		} catch (error) {
			this.replaceChildren(new Dw404());
		}
	}
	
	#getPageFromUrl() {
		const matchingPages = this.#pages.filter(p => p.Item.Link === location.pathname);

		if (matchingPages.length === 0 && location.pathname !== '' && location.pathname !== '/') {
			return null;
		}

		const pages = matchingPages.length === 0 ? this.#pages : matchingPages;
		return pages[0];
	}
}

customElements.define('routing-handler', RoutingHandler);