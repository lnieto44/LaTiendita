let carrito = [];

const addProductos = () => {
    producto = JSON.parse(localStorage.getItem('Detalle'));
    const { nombre, precio, porcentaje_descuento, imagen } = producto;

    const objetoProducto = {
        nombre,
        precio,
        porcentaje_descuento,
        imagen
    }

    carrito.push(objetoProducto);
    localStorage.setItem('Carrito', JSON.stringify(carrito));
    document.querySelector('.alert').style.display = "flex";

    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    document.querySelector('#badgeBtnCarrito').textContent = listaCarrito.length;
}

const showCarrito = () => {
    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    console.log(listaCarrito);

    let contenidoCarrito = document.querySelector('tbody');
    let carritoVacio = document.querySelector('#contenido-carrito')


    const formatoCOP = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    
    if (listaCarrito === null) {
        document.querySelector('.table').style.display = "none";
        
        carritoVacio.innerHTML = 
        `
        <div class="imagen-carrito-vacio">
            <img src="https://i.ibb.co/nzTM9Zw/Family-Values-Shopping.png">
        </div>
        <div class="info-carrito-vacio">
            <h3 class="Headline-3">Su canasta está vacía</h3>
            <a href="#section-ofertas" class="btn" id="btn-carrito-agregar" data-dismiss="modal">Agregar productos</a>
        </div>
        `
    }
    else  if (listaCarrito !== null) {
        document.querySelector('.table').style.display = "block";
            
        listaCarrito.forEach(producto => {
        
            const { nombre, precio, porcentaje_descuento, imagen } = producto;
            contenidoCarrito.innerHTML +=
            `
            <tr>
                <td><img src=${imagen} width="50"></td>
                <td>${nombre}</td>
                <td>${formatoCOP.format(precio)}</td>
                <td>${porcentaje_descuento *100}%</td>
                <td><a href="#" class="btn">Eliminar</a></td>
            </tr>
            `
            });
        }


}

document.querySelector('#contenido-carrito').addEventListener('shown.bs.modal', showCarrito);

btnModalCarrito = document.getElementById('btnModalCarrito');
btnModalCarrito.addEventListener('click', showCarrito);

document.getElementById('btnVaciarCarrito').addEventListener('click', () => {
    localStorage.removeItem('Carrito');
    showCarrito();
    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    document.querySelector('#badgeBtnCarrito').textContent = listaCarrito.length;
})

document.getElementById('btnPagar').addEventListener('click', () => {
    window.location.href = "pago.html"
})

document.addEventListener('DOMContentLoaded', () => {
    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    document.querySelector('#badgeBtnCarrito').textContent = listaCarrito.length;
})

