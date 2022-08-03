import Base from './Base';

export default class DwPage extends Base {
    constructor(page) {
        super(page)
    }
}

customElements.define('dw-page', DwPage);