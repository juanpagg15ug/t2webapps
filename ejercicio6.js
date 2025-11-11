const comisionTransferencia = (monto) => {
    const TASA_COMISION = 0.05; // 5%
    const comision = monto * TASA_COMISION;
    const montoFinal = monto + comision;
    
    return {
        tipoOperacion: "Transferencia Bancaria",
        tasaComision: "5%",
        comision: comision.toFixed(2),
        montoFinal: montoFinal.toFixed(2)
    };
};
const comisionPagoServicio = (monto) => {
    const TASA_COMISION = 0.02; // 2%
    const comision = monto * TASA_COMISION;
    const montoFinal = monto + comision;
    
    return {
        tipoOperacion: "Pago de Servicio",
        tasaComision: "2%",
        comision: comision.toFixed(2),
        montoFinal: montoFinal.toFixed(2)
    };
};
function ejecutarTransaccion(monto, callback) {
    // Validar que el monto sea válido
    if (typeof monto !== 'number' || monto <= 0 || isNaN(monto)) {
        console.log("❌ Error: El monto debe ser un número positivo válido");
        return;
    }
    
    // Validar que el callback sea una función
    if (typeof callback !== 'function') {
        console.log("❌ Error: El segundo parámetro debe ser una función callback");
        return;
    } 
const resultado = callback(monto);
    
    // Mostrar información de la transacción
    console.log("\n" + "─".repeat(60));
    console.log("💳 DETALLES DE LA TRANSACCIÓN");
    console.log("─".repeat(60));
    console.log(`Tipo de Operación:  ${resultado.tipoOperacion}`);
    console.log(`Monto Original:     Q${parseFloat(monto).toFixed(2)}`);
    console.log(`Tasa de Comisión:   ${resultado.tasaComision}`);
    console.log(`Comisión Aplicada:  Q${resultado.comision}`);
    console.log(`Monto Final:        Q${resultado.montoFinal}`);
    console.log("─".repeat(60));
}
