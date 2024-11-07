class Product {
    constructor(id, title, price = 0, stock = 0, images = [], onsale = '', colors = [], description = '') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this.colors = colors;
        this.description = description;
    }
}

const imgProd1 = ['/img/audio/audifonos-skullcandy1.webp','/img/audio/audifonos-skullcandy2.webp', '/img/audio/audifonos-skullcandy3.webp'];
const imgProd2 = ['/img/celulares/iphone16pro-1.webp', '/img/celulares/iphone16pro-2.webp'];
const imgProd3 = ['/img/celulares/zte-redmagic9-1.webp', '/img/celulares/zte-redmagic9-2.webp', '/img/celulares/zte-redmagic9-2.webp'];
const imgProd4 = ['/img/laptops/asusTUF-1.webp', '/img/laptops/asusTUF-2.webp', '/img/laptops/asusTUF-3.webp'];
const imgProd5 = ['/img/tablets/ipadpro11-1.webp'];
const imgProd6 = ['/img/tablets/macbookpro-1.webp', '/img/tablets/macbookpro-2.webp'];

const prod1 = new Product("1aa", "Skullcandy", 250, 8, imgProd1, '50% 0ff', ["black", "blue"], 'Audifonos inalambricos con cancelación de ruido');
const prod2 = new Product("2ab", "Iphone 16pro", 3500, 6, imgProd2, "5% 0ff", ["black", "blue"], 'Chip bionic A18');
const prod3 = new Product("3ac", "zte redmagic9", 4500, 7, imgProd3, "15% 0ff", ["black", "blue", "gray"], 'Dual SIM 512 GB cyclone 16 GB RAM');
const prod4 = new Product("4ad", "Asus TUF", 4999, 4, imgProd4, "20% 0ff", ["black", "pink"], 'Gaming A15 15.6" AMD Ryzen 5');
const prod5 = new Product("5ae", "Ipad pro11", 4450, 6, imgProd5, "5% 0ff", ["black","white"], 'Wifi M4 256GB Space Black');
const prod6 = new Product("6af", "Macbook pro" , 4300, 3, imgProd6, "10% 0ff", ["black", "gray", "white"], 'con Chip M1 CPU 8 núcleos y GPU 7 núcleos, 8GB RAM, 256 GB SSD');

let products = [prod1, prod2, prod3, prod4, prod5, prod6];
