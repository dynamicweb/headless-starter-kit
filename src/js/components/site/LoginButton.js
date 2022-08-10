import { AuthenticationStateChanged, getUserInfo, logout } from "../../api/auth";
import LoginDialog from "./LoginDialog";

export default class LoginButton extends HTMLElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        
        window.addEventListener(AuthenticationStateChanged, this.handleAuthenticationStateChanged.bind(this))

        this.userInfo = await getUserInfo();
        this.render(!!this.userInfo);
    }
    
    async handleAuthenticationStateChanged(e) {
        this.userInfo = await getUserInfo();
        this.render(!!this.userInfo);
    }
    
    render(isAuthenticated) {
        isAuthenticated ? this.renderAuthenticated() : this.renderNotAuthenticated();
    }

    renderAuthenticated() {
        const iconLogout = document.createRange().createContextualFragment(`
			<svg class="bi" width="24" height="24" fill="currentColor">
				<use xlink:href="bootstrap-icons.svg#box-arrow-in-left"/>
			</svg>
		`);
        this.innerText = `Logout, ${this.userInfo.name}`;
        this.classList.add('btn');
        this.dataset.type = 'primary-soft';
        this.append(iconLogout);
        this.onclick = () => logout();
    }

    renderNotAuthenticated() {
        const iconLogin = document.createRange().createContextualFragment(`
			<svg class="bi" width="24" height="24" fill="currentColor">
				<use xlink:href="bootstrap-icons.svg#box-arrow-in-right"/>
			</svg>
		`);
        this.innerText = 'Login';
        this.classList.add('btn');
        this.dataset.type = 'primary';
        this.append(iconLogin);
        this.onclick = () => document.body.append(new LoginDialog());
    }
}

customElements.define('login-button', LoginButton);