$(document).ready(function() {
    $('#formulario').on('submit', function(event) {
        event.preventDefault(); // Evita el envío normal del formulario

        var formData = $(this).serialize(); // Serializa los datos del formulario

        $.ajax({
            type: 'POST',
            url: 'form.php',
            data: formData,
            success: function(response) {
                console.log('Formulario enviado exitosamente');
                console.log(response); // Muestra la respuesta del servidor
            },
            error: function(xhr, status, error) {
                console.error('Error en el envío del formulario: ' + error);
            }
        });
    });
});
