const carrito = ['Producto 1','Producto 2','Producto 3','Producto 4'];


const appContenedor = document.getElementById('#app');

let html = '';

carrito.map(producto=>{
    html += `<li>${producto}</li>`;
})

appContenedor.innerHTML=html;