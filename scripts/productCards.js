const productsSelector = document.getElementById("products");

function createCard(product) {
    return `
        <a href="./details.html?id=${product.id}" class="product-card">
            <img src="${product.images[0]}" alt=${product.id}" class="product-img">
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="price">${product.price}</span>
                    <span class="discount">${product.onsale}</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    `;
}

function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate += createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

printCards(products, "products");


