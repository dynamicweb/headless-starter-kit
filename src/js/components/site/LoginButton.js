import { AuthenticationStateChanged, isLoggedIn, logout } from "../../api/auth";
import LoginDialog from "./LoginDialog";

export default class LoginButton extends HTMLButtonElement {

    constructor() {
        super()
    }

    async connectedCallback() {
        
        window.addEventListener(AuthenticationStateChanged, this.handleAuthenticationStateChanged.bind(this))

        this.isAuthenticated = await isLoggedIn();
        
        this.render();
        
    }
    
    handleAuthenticationStateChanged(e) {
        console.log('state changed', this.isAuthenticated)
        this.isAuthenticated = !this.isAuthenticated;

        this.render();
    }
    
    render() {
        this.isAuthenticated ? this.renderAuthenticated() : this.renderNotAuthenticated();
    }

    renderAuthenticated() {
        this.innerText = 'Logout';
        this.classList.add('btn');
        this.dataset.type = 'primary-soft';
        this.onclick = () => logout();
    }

    renderNotAuthenticated() {
        this.innerText = 'Login';
        this.classList.add('btn');
        this.dataset.type = 'primary';
        this.onclick = () => document.body.append(new LoginDialog());
    }

}

customElements.define('login-button', LoginButton, { extends : 'button'});