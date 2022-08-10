export class Article extends HTMLElement {
    constructor(article) {
        super(article)

        this.article = article;
    }

    connectedCallback() {
        console.log(this.article);
    }
}

customElements.define('article-item', Article, {extends: 'article'});