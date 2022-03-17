let DetallesOferta = document.querySelector('#contenido_modal');
let Detalles_mas_popular = document.querySelector('#contenido_modal');

const getLocalStorage = () => {
    const detalle = JSON.parse(localStorage.getItem('Detalle'));

    const { nombre, precio, porcentaje_descuento, imagen } = detalle;

    // constante para formato de moneda
    const moneda = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    })

    if (detalle.descuento === true) {

        // modal para ofertas
        DetallesOferta.innerHTML =
        `
        
        <div class="detalle-producto">
            <div class="">
                <img class="detalle-imagen" src="${imagen}">
            </div>
            <div class="contenido_txt_detalle">
                <h1 class="detalleNombre detalle-txt-producto">${nombre}</h1>
                <div class="precios-detalle-producto">
                    <h2 class="detalleOperacion detalle-txt-producto">${moneda.format(precio - (precio * (porcentaje_descuento)))}/Kg</h2>
                    <p class="fuente1_regular precio_anterior" >${moneda.format(precio)}/Kg</p>
                    <p class="dimenciones_porcentaje">${porcentaje_descuento * 100}% dto.</p>
                </div>
                <p class="detalle-precio-iva">Precio con IVA incluido</p>
                <p class="fuente1_regular">Peso aproximado por pieza puede variar de acuerdo al precio real.</p>
                <div class="">
                    <select class="">
                        <option value="none" selected disabled>Por elegir</option>
                        <option value="maduro">Maduro (Para hoy)</option>
                        <option value="normal">Normal (3-5 días)</option>
                        <option value="maduro">Verde (7 días)</option>
                    </select>
                    <div class="opciones-compra">
                        <div class="escoger_cantidad_contenido">
                            <button class="btnDisminuir btnDisminuirGramos" onclick="decrementer()" >-</button>
                            <input type="number" value=500 id="contar" readonly><p>g</p>
                            <button  class="btnAumentar btnAumentarGramos" onclick="incrementer()">+</button>
                        </div>
                        <button type="button" class="btn" onclick="AgregarProductos()" data-bs-dismiss="modal" aria-label="Close">Agregar</button>
                    </div>
            </div>
        `
    }

    if (detalle.descuento === false) {

        //modal para populares
        Detalles_mas_popular.innerHTML = 
        `

                    <div class="detalle-producto">
                    <div class="">
                        <img class="detalle-imagen" src="${imagen}">
                    </div>
                    <div class="contenido_txt_detalle">
                        <h1 class="detalleNombre detalle-txt-producto">${nombre}</h1>
                        <h2 class="detalleOperacion detalle-txt-producto">${moneda.format(precio)}</h2>
                        <p class="detalle-precio-iva">Precio con IVA incluido</p>
                        <p class="fuente1_regular">Peso aproximado por pieza puede variar de acuerdo al precio real.</p>
                            <div class="opciones-compra">
                                <div class="escoger_cantidad_contenido">
                                    <button class="btnDisminuir btnDisminuirUnidades" onclick="decrementer()">-</button>
                                    <input type="number" id="contar" value=1 class="inputUnidades" readonly><p>U</p>
                                    <button class="btnAumentar btnAumentarUnidades" onclick="incrementer()">+</button>
                                </div>
                                <button type="button" class="btn" onclick="AgregarProductos()" data-bs-dismiss="modal" aria-label="Close">Agregar</button>
                            </div>
                        </div>
                    </div>
        `
    }

    
}

document.querySelector('#DetallesModal').addEventListener('show.bs.modal', () => {
    DetallesOferta.innerHTML = '';
    Detalles_mas_popular.innerHTML = '';
});

document.querySelector('#DetallesModal').addEventListener('shown.bs.modal', getLocalStorage)

//funciones de incremar o disminuir unidades

const incrementer = () => {
    var i = document.getElementById("contar");
    i.value++;
}

const decrementer = () => {
    var i = document.getElementById("contar");
    i.value--;
}