productsSelector = document.getElementById("products");

let productsTemplate = `
    <article class="product-card"> 
        <a href="./details.html">
            <img src="assets/mock1.jpg" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
    <article class="product-card">
        <a href="./details.html">
            <img src="assets/mock1.jpg" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
    <article class="product-card">
        <a href="./details.html">
            <img src="assets/mock1.jpg" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
    <article class="product-card">
        <a href="./details.html">
            <img src="assets/mock1.jpg" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
    <article class="product-card">
        <a href="./details.html">
            <img src="assets/mock1.jpg" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
    <article class="product-card">
        <a href="./details.html">
            <img src="/img/audio/audifonos-skullcandy1.webp" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
    <article class="product-card">
        <a href="./details.html">
            <img src="assets/mock1.jpg" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
    <article class="product-card">
        <a href="./details.html">
            <img src="assets/mock1.jpg" alt="Macbook Pro" class="product-img">
            <div class="product-info">
                <span class="product-title">Macbook Pro 15'4</span>
                <span class="product-description">Space Gray</span>
                <div class="product-price-block">
                    <span class="price">$750</span>
                    <span class="discount">50% off</span>
                </div>
                <div class="product-tax-policy">Incluye impuestos País y percepción AFIP</div>
            </div>
        </a>
    </article>
`;

productsSelector.innerHTML = productsTemplate;
