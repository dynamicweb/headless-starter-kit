import { Content } from '@dynamicweb/headless-api';
import { createClient } from './clientFactory';

const client = createClient(Content.NavigationsClient);

export const getNavigation = async (stopLvl = 999, rootPageId = undefined, startLvl = 1) => {
    const navigation = await client.getById(1, undefined, 'All', startLvl, stopLvl, rootPageId);
    return navigation.nodes
}

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
