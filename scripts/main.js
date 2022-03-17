import { getData } from "./getData.js";
import { showData } from "./showData.js";

const endpoint = 'https://api-tiendita1.herokuapp.com/productos/'

let ofertas = document.querySelector('#cards-ofertas-container');
let populares = document.querySelector('#cards-populares-container');

document.addEventListener('DOMContentLoaded', () => {
    const data = getData(endpoint);
    showData(data, ofertas, populares);
})

//  seleccion de producto para ver sus detalles

//  seleccion de detalles oferta
ofertas.addEventListener('click', async event => {
    const btnDetalle = event.target.classList.contains('btnDetalle')
    const id = event.target.id

    if (btnDetalle) {
        const lista = await getData(endpoint);
        const objeto = lista.find(list => list.id === Number(id));

        localStorage.setItem('Detalle', JSON.stringify(objeto));

    }
});

//  Seleccion de detalles populares
populares.addEventListener('click', async event => {
    const btnDetalle = event.target.classList.contains('btnDetalle')
    const id = event.target.id

    if (btnDetalle) {
        const lista = await getData(endpoint);
        const objeto = lista.find(list => list.id === Number(id));

        localStorage.setItem('Detalle', JSON.stringify(objeto));
    }
});

//  ubicacion

let formUbicacion = document.getElementById('formUbicacion');

formUbicacion.addEventListener('submit', (e) => {
    e.preventDefault()
    let selectUbicacion = document.getElementById('selectUbicacion').value;
    document.getElementById('textUbicacion').textContent = selectUbicacion;
    document.getElementById('textUbicacionCarrito').textContent = selectUbicacion;
    console.log(selectUbicacion);

})





