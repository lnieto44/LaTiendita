//  ver carrito de compras en el DOM
const showCarritoPago = () => {
    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    console.log(listaCarrito);

    let contenidoCarrito = document.querySelector('tbody');


    const formatoCOP = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })
            
        listaCarrito.forEach(producto => {
        
            const { nombre, precio, porcentaje_descuento, imagen } = producto;
            contenidoCarrito.innerHTML +=
            `
            <tr>
                <td><img src=${imagen} width="50"></td>
                <td>${nombre}</td>
                <td>${formatoCOP.format(precio)}</td>
                <td>${porcentaje_descuento *100}%</td>
            </tr>
            `
            });
}

//  Proceso de compra

let formPago = document.getElementById('formPago');

document.addEventListener('DOMContentLoaded', showCarritoPago)