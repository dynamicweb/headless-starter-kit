import { getNavigation } from "../../api/navigation";

export class RoutingHandler extends HTMLElement {
	constructor() {
		super()
	}

	async connectedCallback() {
		const pages = await getNavigation();
	}
}

customElements.define('routing-handler', RoutingHandler);