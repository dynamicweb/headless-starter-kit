import { Content } from '@dynamicweb/headless-api'
import { createClient } from '../../api/clientFactory';
import ErrorBlock from '../blocks/ErrorBlock';
import Spinner from '../blocks/Spinner';

export default class Base extends HTMLElement {
    constructor(page) {
        super()
        this.page = page;
    }

    async connectedCallback() {
        
        this.append(new Spinner());

        const client = createClient(Content.ParagraphsClient);
        const paragraphs = await client.getAll(null, this.page.iD);

        const renders = paragraphs.map(this.renderParagraph.bind(this));
        const blocks = await Promise.all(renders);
        
        this.replaceChildren([])
        blocks.forEach(block => this.append(block));
    }
    
    async renderParagraph(paragraph) {
        try {
            const Block = await import(`../blocks/${paragraph.item.systemName}.js`);
            return new Block.default(paragraph);
        } catch (error) {
            return new ErrorBlock(paragraph);
        }
    }
}

customElements.define('dw-main', Base);