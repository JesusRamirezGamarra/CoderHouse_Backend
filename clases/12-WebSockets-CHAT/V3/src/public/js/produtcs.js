const socketProducts = io();

let formAdd = document.getElementById('form-addProduct');
let formDelete = document.getElementById('form-deleteProduct');
let inputDelete = document.getElementById('input-deleteProduct');
let listProducts = document.getElementById('list-products');

formAdd.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    fetch('/api/products', { 
        method: 'POST',
        body: formData
    }).then(res => res.json())
      .then(json => socketProducts.emit('client: add product', json))
});

formDelete.addEventListener('submit', (e) => {
    e.preventDefault();
    let id = inputDelete.value;
    fetch (`/api/products/${id}`, {
        method: 'DELETE'
    }).then(res => res.json())
      .then (json => socketProducts.emit('client: delete product', json))
});

socketProducts.on('server: new product', data => {
    let newProduct = document.createElement('tr');
    newProduct.innerHTML = `<td class="product-title">${data.title}</td>
                                <td>$${data.price}</td>
                            <td><img src="./img/${data.image}" class="img-fluid img-product" alt="imagen"></td>`
    listProducts.appendChild(newProduct)                        
})

socketProducts.on('server: products', data => {
    listProducts.innerHTML = "";
    let products = "";
    data.forEach(product => {
        products += `<tr>
                        <td class="product-title">${product.title}</td>
                        <td>$${product.price}</td>
                        <td><img src="./img/${product.image}" class="img-fluid img-product" alt="imagen"></td>
                    </tr>`
    })
    listProducts.innerHTML = products;    
})

