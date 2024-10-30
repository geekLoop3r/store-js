// Selecionamos el elemento con id "nav"
let navselector = document.getElementById("nav");

// Creamos un array cuyos elementos tienen dos opciones title y linkTo 
let options1 = [
    {title: "Todas las categorías", linkTo: ".categories.html"}, 
    {title: "Liquidación total", linkTo: "./outlet.html"},
    {title: "Costos y tarifas", linkTo: "./prices.html"},
    {title: "Mis pedidos", linkTo: "./orders.html"},
    {title: "Contactos", linkTo: "./contacts.html"},
];  

// Barremos las opciones del array
for (let option of options1) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    navselector.appendChild(anchor);
}

// function renderNavegation(option) {
//     const anchor = document.createElement("a");
//     anchor.className = "nav-button"; 
//     anchor.textContent = option.title;
//     anchor.href = option.linkTo;
//     navselector.appendChild(anchor);
// }

// options.forEach(renderNavegation);

let footerSelector = document.getElementById("footer");

let options2 = [
    {linkTo:"./oferts.html", title: "Ofertas de la semana", ls: ["Laptops", "Audio", "Auriculares"]},
    {linkTo:"./howBuy.html", title: "Cómo comprar", ls: ["Formas de pago", "Envíos", "Devoluciones"]},
    {linkTo:"./prices.html", title: "Costos y tarifas", ls: ["Impuestos", "Facturación"]},
    {linkTo:"./orders.html", title: "Mis pedidos", ls: ["Pedir nuevamente", "Lista de deseos"]},
    {linkTo:"./delivery.html", title: "Garantía de entrega", ls: []},
];

for(let option of options2) {
    const ul = document.createElement("ul");
    ul.className = "footer-ul";

    const list = document.createElement("li");
    list.className = "footer-ul-item";

    const anchor = document.createElement("a");
    anchor.className = "footer-anchor";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;
    
    list.appendChild(anchor);
    ul.appendChild(list);

    footerSelector.appendChild(ul);
}

