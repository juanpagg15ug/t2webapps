function calcularPromedio(...valores) {
    // Validar que se recibieron valores
    if (valores.length === 0) {
        console.log("❌ Error: No se recibieron valores para calcular el promedio");
        return null;
    }
    
    // Validar que todos los elementos sean numéricos
    const todosNumericos = valores.every(valor => typeof valor === 'number' && !isNaN(valor));
    
    if (!todosNumericos) {
        console.log("❌ Error: Todos los valores deben ser numéricos");
        console.log("   Valores recibidos:", valores);
        return null;
    }
    
    // Calcular la suma de todos los valores
    const suma = valores.reduce((acumulado, valor) => acumulado + valor, 0);
    
    // Calcular el promedio
    const promedio = suma / valores.length;
    
    // Retornar con dos decimales
    return parseFloat(promedio.toFixed(2));
}
const promedio1 = calcularPromedio(85, 90, 78, 92, 88);
console.log(`Valores: 85, 90, 78, 92, 88`);
console.log(`Promedio: ${promedio1}`);