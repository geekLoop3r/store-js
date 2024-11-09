//const productsSelector = document.getElementById("products");

// Template de nuestras cards 
function createCard(product) {
    return `
        <a href="./details.html?id=${product.id}" class="product-card">
            <img src="${product.images[0]}" alt=${product.id}" class="product-img">
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-color">${product.colors[0]}</span>
                <div class="product-price-block">
                    <span class="price">S/${product.price}</span>
                    <span class="discount">${product.onsale}</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    `;
}

// let productsTemplate = "";
// productsSelector.innerHTML = productsTemplate + createCard(products[]);

function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
        productsTemplate += createCard(element); // Anida los elementos creados en el template
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate; // Al salir del for se imprime el template completo
}

printCards(products, "products");


