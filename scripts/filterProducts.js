const captureText = (event) => {
    // Guarda el evento aplicandose minusculas en una variable 
    const text = event.target.value.toLowerCase();

    // Filtrar el array de los productos que coinciden con la busqueda
    // filter() Función de orden superior
    // includes(text) Método que verifica si text es elemento del array
    const filteredProducts = products.filter(product => product.title.toLowerCase().includes(text));

    // Actualizar la vista con una nueva impresión de las tarjetas
    printCards(filteredProducts, "products");
}

const searchSelector = document.querySelector("#search")

// Capturar lo ingresado con el teclado para filtrarlo
searchSelector.addEventListener("keyup", event => captureText(event));

// 


