const convertirDistancias = function(distanciasMetros) {
    // Validación del input
    if (!Array.isArray(distanciasMetros)) {
        return [];
    }
    
    // Convertir cada distancia de metros a kilómetros
    return distanciasMetros.map(function(metros) {
        return (metros / 1000).toFixed(2);
    });
};

// Prueba de la función
const distanciasEnMetros = [500, 1500, 3000, 7500, 10000];
const distanciasEnKm = convertirDistancias(distanciasEnMetros);
console.log("Distancias originales (metros):", distanciasEnMetros);
console.log("Distancias convertidas (km):", distanciasEnKm);

// Mostrar conversión detallada
distanciasEnMetros.forEach((metros, index) => {
    console.log(`  ${metros}m = ${distanciasEnKm[index]}km`);
});