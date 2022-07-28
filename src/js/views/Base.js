import { Navigation } from "../helpers/Navigation"

export default class {
    constructor(params) {
        this.params = params;
        Navigation.GetNavigation();
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}