const tbody = document.querySelector('tbody');
let carrito = [];
//let btnEliminar = document.getElementById('btnEliminar')
const url = 'https://api-tiendita1.herokuapp.com/productos/'

const AgregarProductos = async() => {
    producto = JSON.parse(localStorage.getItem('Detalle'));
    const { nombre, precio, porcentaje_descuento, imagen} = producto;

    const objetoProducto = {
        nombre,
        precio,
        porcentaje_descuento,
        imagen,
    
    }

      await fetch(url,{
            method: 'POST',
            body: JSON.stringify(objetoProducto),
            headers:{
                "Content-Type": "application/json; charset=utf-8"
            }
        }) 

    carrito.push(objetoProducto);
    localStorage.setItem('Carrito', JSON.stringify(carrito));
    document.querySelector('.alert').style.display = "flex";

    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    document.querySelector('#BtnCarrito').textContent = listaCarrito.length;
}  
 

  

const MostrarCarrito = () => {
    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    console.log(listaCarrito);

    let contenidoCarrito = document.querySelector('tbody');

    let carritoVacio = document.querySelector('#contenido-carrito')
    

    const moneda = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    
    if (listaCarrito === null) {
        document.querySelector('.table').style.display = "none";
        
        carritoVacio.innerHTML = 
        `
        <div class="imagen-carrito-vacio">
            <img src="https://i.ibb.co/VHyZVQY/Family-Values-Shopping.png" alt="carrito vacio">
        </div>
        <div class="info-carrito-vacio">
            <h3 class="ubicacion">Su canasta está vacía</h3>
            <a href="#section-ofertas" class="btn" id="" data-dismiss="modal">Agregar productos</a>
        </div>
        `
    }
    else  if (listaCarrito !== null) {
        document.querySelector('.table').style.display = "block";
            
        listaCarrito.forEach(producto => {
            
            const { nombre, precio,  porcentaje_descuento, imagen} = producto;
            
            contenidoCarrito.innerHTML +=
            `
            <tr>
                <td><img src=${imagen} width="50"></td>
                <td>${nombre}</td>
                <td>${moneda.format(precio)}</td>
                <td>${porcentaje_descuento *100}%</td>
              
            </tr>
            `
            });
        }


}


//-------Eliminar---------------    <td><a class="btn">Eliminar</a></td>  //

tbody.addEventListener('click', async(e)=>{
    const botonDelete= e.target.classList.contains('btn')
    const id= e.target.id
    console.log(url+id)

    if(botonDelete){
        await fetch(url+id,{
            method: 'DELETE'
        })
        
    }

}) 

document.querySelector('#contenido-carrito').addEventListener('shown.bs.modal', MostrarCarrito);

btnModalCar = document.getElementById('btnModalCar');
btnModalCar.addEventListener('click', MostrarCarrito);


document.getElementById('btnVaciarCarrito').addEventListener('click', () => {
    localStorage.removeItem('Carrito');
    MostrarCarrito();
    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    document.querySelector('#BtnCarrito').textContent = listaCarrito.length;
})

document.getElementById('btnPagar').addEventListener('click', () => {
    window.location.href = "pago.html"
})

 document.addEventListener('DOMContentLoaded', () => {
    listaCarrito = JSON.parse(localStorage.getItem('Carrito'));
    document.querySelector('#BtnCarrito').textContent = listaCarrito.length;
})
 