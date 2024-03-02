const precio = 400000;

function formatearPrecio(precio) {
    return Intl.NumberFormat('es-CL', {
        maximumFractionDigits: 2, 
    }).format(precio);
}

function calcularPrecioTotal(cantidad, precio) {
    const amount = Number(cantidad);
    const price = Number(precio);

    const total = price * amount;

    return formatearPrecio(total);
    
}

function aumentar() {
    const precioTotalElement = document.querySelector('.valor-total')
    const cantidadElement = document.querySelector('.cantidad')
    const cantidadValue = Number(document.querySelector('.cantidad').innerHTML);
    const nuevaCantidad = cantidadValue +1

    cantidadElement.innerHTML = nuevaCantidad;

    const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);

    precioTotalElement.innerHTML = valorTotal;
}

function restar() {
    const precioTotalElement = document.querySelector('.valor-total')
    const cantidadElement = document.querySelector('.cantidad')
    const cantidadValue = Number(document.querySelector('.cantidad').innerHTML);

    if (cantidadValue > 0) {
        const nuevaCantidad = cantidadValue -1;
        cantidadElement.innerHTML = nuevaCantidad;

        const valorTotal = calcularPrecioTotal(nuevaCantidad, precio);
        precioTotalElement.innerHTML = valorTotal;
    }
  
}


const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = formatearPrecio(precio);