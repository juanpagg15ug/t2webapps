const precioFinal = (precio, descuento = 0.15) => {
    // Si el precio es mayor a Q1000, aplicar 20% de descuento
    const descuentoAplicado = precio > 1000 ? 0.20 : descuento;
    
   
    const precioConDescuento = precio - (precio * descuentoAplicado);
    
    // Imprimir mensaje explicativo
    console.log(`\nPrecio Original: Q${precio.toFixed(2)}`);
    console.log(`Descuento Aplicado: ${(descuentoAplicado * 100).toFixed(0)}%`);
    console.log(`Precio Final: Q${precioConDescuento.toFixed(2)}`);
    console.log(`Ahorro: Q${(precio * descuentoAplicado).toFixed(2)}`);
    
    return precioConDescuento;
};
