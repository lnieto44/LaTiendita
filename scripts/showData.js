export const showData = async (lista, ofertas, mas_popular) => {
    const canasta_familiar = await lista;



    canasta_familiar.forEach(producto => {
        const {id, nombre, precio, porcentaje_descuento, imagen} = producto
        
        // constante para formato de moneda
        const moneda = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        })

        if (producto.descuento === true) {
            
            ofertas.innerHTML +=
            `
            <div class="tarjeta">
                <div class="percentaje">
                    <p class="dimenciones_porcentaje">${porcentaje_descuento * 100}% dto.</p>
                </div>
                <img class="tarjeta-img" src="${imagen}" alt="producto">
                <div class="descripcion">
                    <div class="precios">
                        <p class="fuente1_negrita">${moneda.format(precio - (precio * (porcentaje_descuento)))}/Kg</p>
                        <p class="fuente1_regular precio_anterior" >${moneda.format(precio)}/Kg</p>
                    </div>
                    <p class="fuente2_regular">${nombre}</p>
                </div>
                <button type="button" class="btn btnDetalle" id=${id} data-bs-toggle="modal" data-bs-target="#DetallesModal">Agregar</button>
            </div>
            `
        }

        if (producto.descuento === false) {

            mas_popular.innerHTML +=
            `
            <div class="tarjeta">
                <img class="tarjeta-img" src="${imagen}" alt="producto">
                <div class="descripcion">
                    <p class="fuente1_negrita">${moneda.format(precio)}</p>
                    <p class="fuente2_regular">${nombre}</p>
                </div>
                <button type="button" class="btn btnDetalle" id=${id} data-bs-toggle="modal" data-bs-target="#DetallesModal">Agregar</button>
            </div>
            `
        }

    })
}