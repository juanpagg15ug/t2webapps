function enviarCorreo(destinatario = "soporte@empresa.com", mensaje = "Consulta general") {
    // Obtener fecha y hora actual
    const fechaEnvio = new Date().toLocaleString('es-GT', {
        dateStyle: 'full',
        timeStyle: 'medium'
    });
    
    // Simular envío de correo
    console.log("\n" + "═".repeat(60));
    console.log("📧 SIMULACIÓN DE ENVÍO DE CORREO ELECTRÓNICO");
    console.log("═".repeat(60));
    console.log(`Para:      ${destinatario}`);
    console.log(`Mensaje:   ${mensaje}`);
    console.log(`Fecha:     ${fechaEnvio}`);
    console.log(`Estado:    ✓ Enviado exitosamente`);
    console.log("═".repeat(60));
}
enviarCorreo()
enviarCorreo("cliente@example.com");
