let products =[
    {product:'Shampoo' , price :350, quantity :5},
    {product:'Shirt' , price :550, quantity :3},
    {product:'Pant' , price :750, quantity :2},
    {product:'ice-cream' , price :250, quantity :1}
]


function getProducts(products){
    let totall =0
    for(product of products){
let thisProducts =product.price * product.quantity;
totall = totall + thisProducts
    }
    return totall
}

let getTotall = getProducts(products)
console.log('All products and price :' +getTotall)