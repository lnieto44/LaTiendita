export const showData = async (list, ofertas, populares) => {
    const productos = await list;



    productos.forEach(producto => {
        const {id, nombre, precio, porcentaje_descuento, imagen} = producto
        
        // constante para formato de moneda
        const formatoCOP = new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        })

        if (producto.descuento === true) {
            
            ofertas.innerHTML +=
            `
            <div class="card">
                <div class="percentage">
                    <p class="Caption-Bold">${porcentaje_descuento * 100}% dto.</p>
                </div>
                <img class="card-img" src="${imagen}" alt="producto">
                <div class="description">
                    <div class="precios">
                        <p class="Body-1-Bold">${formatoCOP.format(precio - (precio * (porcentaje_descuento)))}/Kg</p>
                        <p class="Body-1-Regular precio-sin-descuento" >${formatoCOP.format(precio)}/Kg</p>
                    </div>
                    <p class="Body-2-Regular">${nombre}</p>
                </div>
                <button type="button" class="btn btnDetalle" id=${id} data-bs-toggle="modal" data-bs-target="#modalDetalles">Agregar</button>
            </div>
            `
        }

        if (producto.descuento === false) {

            populares.innerHTML +=
            `
            <div class="card">
                <img class="card-img" src="${imagen}" alt="producto">
                <div class="description">
                    <p class="Body-1-Bold">${formatoCOP.format(precio)}</p>
                    <p class="Body-2-Regular">${nombre}</p>
                </div>
                <button type="button" class="btn btnDetalle" id=${id} data-bs-toggle="modal" data-bs-target="#modalDetalles">Agregar</button>
            </div>
            `
        }

    })
}