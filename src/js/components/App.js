import '../../css/style.css'
import { RoutingHandler } from './navigation/RoutingHandler';
import { SiteHeader } from './site/SiteHeader';
import { SiteFooter } from './site/SiteFooter';

export default class App extends HTMLElement {

	constructor() {
		super()
	}

	connectedCallback() {
		this.append(new SiteHeader())
		this.append(new RoutingHandler())
		this.append(new SiteFooter())
	}
}

customElements.define('app-container', App);