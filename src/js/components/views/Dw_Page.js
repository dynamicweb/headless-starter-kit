import { ArticleList } from '../blocks/ArticleList';
import HeroBlock from '../blocks/Hero';
import Base from './Base';

export default class DwPage extends Base {
    constructor(page) {
        super(page)
    }

    connectedCallback() {
        this.append(new HeroBlock(this.page.Name));
    }
}

customElements.define('dw-page', DwPage);