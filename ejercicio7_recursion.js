let sistemaArchivos;

try {
    const rutaJSON = path.join(__dirname, 'sistemaArchivos.json');
    const datosJSON = fs.readFileSync(rutaJSON, 'utf8');
    sistemaArchivos = JSON.parse(datosJSON);
    console.log("\n✅ Sistema de archivos cargado correctamente desde JSON externo");
} catch (error) {
    console.error("\n❌ Error al cargar el sistema de archivos:", error.message);
    console.log("\n💡 Asegúrate de tener el archivo 'sistemaArchivos.json' en el mismo directorio");
    process.exit(1);
}