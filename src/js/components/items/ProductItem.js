import ItemBase from "./ItemBase";

export class ProductItem extends ItemBase {
    constructor(item) {
        super(item)
    }

    connectedCallback() {
        const product = this.item;
        const productItem = document.createRange().createContextualFragment(`
            <div class="d-flex flex-column flex-between mb-3 bg-n-1" style="--gap:0;">
                <div><img class="" src="${this.getImageUrl(product.defaultImage.value, 400)}" style="aspect-ratio: 3/4; object-fit: cover;" alt="${product.name}" /></div>
                <div class="p-1">
                    <a href="${product.rootPath}?ProductID=${product.id}"><h5 class="fs-3">${product.name}</h5></a>
                    <div class=""><span class="fs-3">${product.price.priceFormatted}</span></div>
                </div>
            </div>
        `);

        const links = productItem.querySelectorAll('a');

        links.forEach(link => {
            link.onclick = (e) => {
                e.preventDefault();
                this.handleNavigate(e, link, product.rootPath + "?ProductID=" + product.id);
            }
        })

        this.append(productItem)
    }
}

customElements.define('product-item', ProductItem);