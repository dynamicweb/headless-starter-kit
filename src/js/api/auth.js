import { Authentication } from '@dynamicweb/headless-api';
import { baseUrl } from '../../../config';

const client = new Authentication.UsersClient({}, baseUrl);

const DW_AUTH_TOKEN = 'DW_AUTH_TOKEN';

export const login = async (username, password) => {
	try {
		const tokenResponse = await client.authenticate(username , password);
		localStorage.setItem(DW_AUTH_TOKEN, tokenResponse.token);
		const event = new AuthenticationStateChangedEvent();
		window.dispatchEvent(event);
		return {success: true, error: ''};
	} catch (error) {
		return {success: false, error: error.message};
	}

} 

export const logout = async () => {
	localStorage.removeItem(DW_AUTH_TOKEN);
	const event = new AuthenticationStateChangedEvent();
	window.dispatchEvent(event);
}

export const isLoggedIn = async () => {
	const isLoggedIn = !!localStorage.getItem(DW_AUTH_TOKEN);
	return isLoggedIn;
}

export const refresh = async () => {
	
} 

export class AuthenticationStateChangedEvent extends CustomEvent {
	constructor() {
		super(AuthenticationStateChanged, {bubbles : true})
	}
}

export const AuthenticationStateChanged = 'authenticationstatechanged';