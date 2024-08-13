// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene una referencia al formulario
    const form = document.getElementById('newsletter-form');
    
    // Agrega un evento de escucha para el envío del formulario
    form.addEventListener('submit', function(event) {
        // Previene el comportamiento por defecto del formulario (evita que se envíe)
        event.preventDefault();
        
        // Obtiene el valor del campo de email
        const email = document.getElementById('email').value;
        
        // Verifica si se ha ingresado un email
        if (email) {
            // Muestra un mensaje de éxito con el email ingresado
            alert(`Thank you for subscribing with email: ${email}`);
            
            // Limpia el campo de email después de un envío exitoso
            document.getElementById('email').value = '';
        }
    });
});