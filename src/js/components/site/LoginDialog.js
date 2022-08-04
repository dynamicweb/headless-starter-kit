import { login } from "../../api/auth";

export default class LoginDialog extends HTMLElement {

	constructor() {
		super()
	}

	connectedCallback() {
		document.body.style.overflow = 'hidden';
		this.render();
	}
	
	render() {
		const inner = document.createElement('div');
		const errorSpan = document.createElement('span');
		errorSpan.classList.add('text-a-4');
		inner.classList.add('dialog-inner', 'container', 'd-grid');
		inner.style = '--max-width: 40em;';

		const loginButton = document.createRange().createContextualFragment(`
			<button type="button" class="btn" data-type="primary">
				Login
			</button>
		`).firstElementChild;

		const cancelButton = document.createRange().createContextualFragment(`
			<button type="button" class="btn" data-type="primary-soft">
				Cancel
			</button>
		`).firstElementChild;

		const username = document.createRange().createContextualFragment(`
			<input type="text" placeholder="Your username" />
		`).firstElementChild;

		const password = document.createRange().createContextualFragment(`
			<input type="password" placeholder="Your password" />
		`).firstElementChild;
		
		inner.append(username, password, loginButton, cancelButton);

		this.append(inner);

		cancelButton.onclick = () => this.removeDialog();
		loginButton.onclick = async () => {
			if (errorSpan.parentElement) 
				errorSpan.parentElement.removeChild(errorSpan);

			const {success, error} = await login(username.value, password.value);
			
			if (success) { 
				this.removeDialog();
				return;
			}
			errorSpan.textContent = error;
			inner.append(errorSpan);
		}
	}

	removeDialog() {
		this.remove();
		document.body.style.overflow = '';
	}

}

customElements.define('login-dialog', LoginDialog);