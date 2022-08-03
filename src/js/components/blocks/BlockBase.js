import { baseUrl } from "../../../../config";

export default class BlockBase extends HTMLElement {

    constructor(paragraph) {
        super()

        this.paragraph = paragraph;
    }

    getFieldValue(systemName) {
        return this.paragraph.item.fields.find(f => f.systemName === systemName)?.value;
    }

    getImageUrl(path, width = 1200, height = 675, compression = 75, crop = 7) {
        return `${baseUrl}/Admin/Public/GetImage.ashx?Image=${path}&Width=${width}&Height=${height}&Compression=${compression}&Crop=${crop}`;
    }

}

customElements.define('block-base', BlockBase);