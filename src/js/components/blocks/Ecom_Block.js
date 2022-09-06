import ProductGroupPage from "../views/ecom/ProductGroupPage";
import ProductDetailPage from "../views/ecom/ProductDetailPage";
import BlockBase from "./BlockBase";

export default class EcomBlock extends BlockBase {
    constructor(paragraph) {
        super(paragraph);
    }

    connectedCallback() {
        this.render()
    }
    
    render() {
        if ( this.hasParams('groupid') ) {
            const groupPageView = new ProductGroupPage(this.getGroupId());
            this.append(groupPageView);
        }

        if ( this.hasParams('productid') ) {
            const groupDetailView = new ProductDetailPage(this.getProductId());
            this.append(groupDetailView);
        }
    }

    hasParams(param) {
        const params = new URL(location.href).searchParams;

        for (let key of params.keys()) {
            if (key.toLocaleLowerCase() === param)
                return true;
        }

        return false;
    }

    getGroupId() {
        const params = new URL(location.href).searchParams;

        for (let key of params.keys()) {
            if (key.toLocaleLowerCase() === "groupid")
                return params.get(key);
        }

        return null;
    }

    getProductId() {
        const params = new URL(location.href).searchParams;

        for (let key of params.keys()) {
            if (key.toLocaleLowerCase() === "productid")
                return params.get(key);
        }

        return null;
    }
}

customElements.define('ecom-block', EcomBlock);