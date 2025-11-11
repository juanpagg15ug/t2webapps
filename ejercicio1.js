function calcularTotalCompra(precios) {
    // Validación básica del input
    if (!Array.isArray(precios) || precios.length === 0) {
        return { subtotal: 0, iva: 0, total: 0 };
    }
    
    // Calcular subtotal sumando todos los precios
    const subtotal = precios.reduce((acumulado, precio) => acumulado + precio, 0);
    
    // Calcular IVA (12% en Guatemala)
    const IVA_RATE = 0.12;
    const iva = subtotal * IVA_RATE;
    
    // Calcular total final
    const total = subtotal + iva;
    
    // Retornar objeto con los valores calculados
    return {
        subtotal: subtotal.toFixed(2),
        iva: iva.toFixed(2),
        total: total.toFixed(2)
    };
}

// Prueba de la función
const preciosCompra = [150.50, 200.75, 89.99, 450.00];
const resultadoCompra = calcularTotalCompra(preciosCompra);
console.log("Precios de productos:", preciosCompra);
console.log(`Subtotal: Q${resultadoCompra.subtotal}`);
console.log(`IVA (12%): Q${resultadoCompra.iva}`);
console.log(`Total Final: Q${resultadoCompra.total}`);