import ItemBase from "./ItemBase";

export class ArticleItem extends ItemBase {
    constructor(item) {
        super(item)
    }

    connectedCallback() {

        const formatDate = (date) => {
            let d = new Date(date);
            let month = d.toLocaleString('default', { month: 'long' });
            let day = d.getDate().toString() + '.';
            let year = d.getFullYear();
            return [day, month, year].join(' ');
        }
        
        const article = document.createRange().createContextualFragment(`
            <div class="card shadow">
                <a href="${this.item.item.link}">
                    <img src="${this.getImageUrl(this.getFieldValue('Image')[0].Path, 450, 70)}" alt="${this.item.name}" style="aspect-ratio: 4/3; object-fit: cover;">
                </a>
                <div class="card-body d-flex flex-column">
                    <div class="d-flex fw-bold fs-2">
                        <div class="text-p-5">${this.getFieldValue('Category')}</div>
                        <div class="text-n-5">${formatDate(this.item.createdDate)}</div>
                    </div>
                    <a href="${this.item.item.link}"><h4 class="fs-5">${this.item.name}</h4></a>
                    <div>${this.getFieldValue('Description')}</div>
                </div>
            </div>
        `);

        const links = article.querySelectorAll('a');

        links.forEach(link => {
            link.onclick = (e) => this.handleNavigate(e, link, this.item.item.link);
        })

        this.append(article)
    }
}

customElements.define('article-item', ArticleItem);