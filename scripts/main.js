import { getData } from "./getData.js";
import { showData } from "./showData.js";

const url = 'https://api-tiendita1.herokuapp.com/productos/'

let ofertas = document.querySelector('#contenido_ofertas');
let mas_populares = document.querySelector('#contenido_mas_popular');

document.addEventListener('DOMContentLoaded', () => {
    const data = getData(url);
    showData(data, ofertas, mas_populares);
})

//  seleccion de producto para ver sus detalles

//  seleccion de detalles oferta
ofertas.addEventListener('click', async event => {
    event.preventDefault()
    const btnDetalle = event.target.classList.contains('btnDetalle')
    const id = event.target.id

    if (btnDetalle) {
        const lista = await getData(url);
        const objeto = lista.find(list => list.id === Number(id));

        localStorage.setItem('Detalle', JSON.stringify(objeto));

    }
});

//  Seleccion de detalles populares
mas_populares.addEventListener('click', async event => {
    const btnDetalle = event.target.classList.contains('btnDetalle')
    const id = event.target.id

    if (btnDetalle) {
        const lista = await getData(url);
        const objeto = lista.find(list => list.id === Number(id));

        localStorage.setItem('Detalle', JSON.stringify(objeto));
    }
});

//  ubicacion

let formulario_Ubicacion = document.getElementById('formulario_Ubicacion');

formulario_Ubicacion.addEventListener('submit', (e) => {
    e.preventDefault()
    let escogerUbicacion = document.getElementById('escogerUbicacion').value;
    document.getElementById('txtUbicacion').textContent = escogerUbicacion;
    document.getElementById('txtUbicacionCarrito').textContent = escogerUbicacion;
    console.log(escogerUbicacion);

})





