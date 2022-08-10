import { getNavigation, navigate } from "../../api/navigation";
import LoginButton from "./LoginButton";
import MenuButton from "./MenuButton";

const template = document.createRange().createContextualFragment(`
	<header class="site-header bg-n-1">
		<div class="container d-flex ai-c flex-between p-y-4">
			<div>
				<a href="/" class="logo d-flex ai-c fw-bold fs-4">
					<svg class="bi" width="24" height="24" fill="currentColor">
						<use xlink:href="bootstrap-icons.svg#terminal"/>
					</svg>
					<span>Starter Kit</span>
				</a>
			</div>
			<nav id="main-nav" class="nav d-flex text-p-5 fw-semi" aria-expanded="false" style="--gap: 0.5em;"></nav>
			<div class="button-group d-flex"></div>
		</div>
	</header>
`);

export class SiteHeader extends HTMLElement {

	constructor() {
		super()
	}

	async connectedCallback() {
		const header = template;
		
		const nav = header.getElementById("main-nav");
		this.nav = nav;
		this.isExpanded = nav.getAttribute("aria-expanded") === 'true' ? true : false;

		const buttonGroup = header.querySelector('.button-group');
		
		const homeLink = header.querySelector('.logo');
		homeLink.onclick = (e) => this.handleNavigate(e, homeLink, homeLink.href)
		
		const menuButton = new MenuButton();
		this.menuButton = menuButton;
		menuButton.onclick = () => this.handleExpand(!this.isExpanded)

		buttonGroup.append(new LoginButton());
		buttonGroup.append(menuButton);
		
		this.appendChild(header);
		
		const pages = await getNavigation()
		pages.forEach(page => {
			const navItem = document.createElement('a');
			nav.append(navItem);
			navItem.href = page.link
			navItem.textContent = page.name
			navItem.onclick = (e) => this.handleNavigate(e, navItem, page.link);
		});
		
	}
	
	handleExpand(isExpanded) {
		this.isExpanded = isExpanded;
		this.menuButton.render(isExpanded);
		document.body.style.overflow = isExpanded ? 'hidden' : '';
		this.nav.setAttribute("aria-expanded", isExpanded);
	}

	handleNavigate(event, dispatcher, url) {
		event.preventDefault();
		navigate(dispatcher, url);
		this.handleExpand(false)
	}
}

customElements.define('site-header', SiteHeader);