import NavItems from '../data/MainNavigation.json';

export const getNavigation = async () => Promise.resolve(NavItems);

export const navigate = (target, url) => {
    history.pushState({},'', url);
    const event = new NavigationStateChangedEvent();
    target.dispatchEvent(event);
}

export class NavigationStateChangedEvent extends CustomEvent {
    constructor() {
        super(NavigationStateChanged, {bubbles : true})
    }
}

export const NavigationStateChanged = 'navigationstatechanged';