import { baseUrl } from "../../../../config";
import { navigate } from "../../api/navigation";

export default class ItemBase extends HTMLElement {

    constructor(item) {
        super()

        this.item = item;
    }

    getFieldValue(systemName) {
        return this.item.item.fields.find(f => f.systemName === systemName)?.value;
    }

    getImageUrl(path, width = 1200, compression = 75) {
        return `${baseUrl}/Admin/Public/GetImage.ashx?Image=${path}&Width=${width}&Quality=${compression}&Format=webp`;
    }

    handleNavigate(event, dispatcher, url) {
		event.preventDefault();
		navigate(dispatcher, url);
	}
}

customElements.define('item-base', ItemBase);