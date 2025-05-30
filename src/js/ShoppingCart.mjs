import {renderListWithTemplate} from "./utils.mjs"
function productCardTemplate(product) {
    return `
    <li class="product-card">
        <a href="#">
        <img
         src="${product.Images.PrimarySmall}"
         alt="${product.Name}"
        >
        <h2 class="card__brand">${product.Brand.Name}</h2>
        <h3 class="card__name">${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
    
    </li>
    `;
}
export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category,
        this.dataSource = dataSource,
        this.listElement = listElement
    }

    async init() {
        const list = await this.dataSource;
        this.renderList(list);
    }

    renderList(list) {


        renderListWithTemplate(productCardTemplate, this.listElement, list )

        
    }

}

