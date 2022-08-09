import { baseUrl } from "../../../../config";

export default class BlockBase extends HTMLElement {

    constructor(paragraph) {
        super()

        this.paragraph = paragraph;
    }

    getFieldValue(systemName) {
        return this.paragraph.item.fields.find(f => f.systemName === systemName)?.value;
    }

    getImageUrl(path, width = 1200, compression = 75) {
        return `${baseUrl}/Admin/Public/GetImage.ashx?Image=${path}&Width=${width}&Quality=${compression}&Format=webp`;
    }
}

customElements.define('block-base', BlockBase);