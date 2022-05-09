type Product = {
    title: string,
    description: string,
    price: string,
    image: string,
}

const products: Product[] = [
    {
        title: 'Adeziv creion',
        description: 'Eco',
        price: '11,25 MDL',
        image: 'adeziv-creion.jpg'
    },
    {
        title: 'Banda adeziva',
        description: 'Eco',
        price: '42,90 MDL',
        image: 'bandaadeziva.jpg'
    },
    {
        title: 'Biblioraft',
        description: 'Office',
        price: '44,7 MDL',
        image: 'biblioraft.jpg'
    },
    {
        title: 'Foi A4',
        description: 'Standard',
        price: '104,90 MDL',
        image: 'foiA4.jpg'
    },
    {
        title: 'Folii',
        description: '100 buc',
        price: '115,6 MDL',
        image: 'folii.jpg'
    },
    {
        title: 'Hârtie colorată',
        description: '80 g',
        price: '169,2 MDL',
        image: 'hartiecolorata.jpg'
    },
    {
        title: 'Mapă plic',
        description: 'Color+',
        price: '10,90 MDL',
        image: 'mapaplic.jpg'
    },
    {
        title: 'Notebook',
        description: 'Original',
        price: '59,90 MDL',
        image: 'notebook1jpg.jpg'
    },
    {
        title: 'Radieră',
        description: 'Eco',
        price: '4,25 MDL',
        image: 'radiera.jpg'
    },
    {
        title: 'Riglă',
        description: '30 cm',
        price: '12,90 MDL',
        image: 'rigla-30cm.825x.jpg'
    },
    {
        title: 'Set de birou',
        description: 'Multifuncțional',
        price: '89,95 MDL',
        image: 'setdebirou.jpg'
    },
]

const item: HTMLElement = document.querySelector('.app')
console.log(item)

    for (const product of products) {
        item.innerHTML += `<div class="item">
    <img src="images/${product.image}" alt="${product.title}">
    <h2>${product.title}</h2>
        <p>${product.description}</p>
        <span class="price">${product.price}</span>
    </div>`
    }
