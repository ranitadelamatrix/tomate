




document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const dni = document.getElementById('dni').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const localidad = document.getElementById('localidad').value;
    const direccion = document.getElementById('direccion');
    const telefono = document.getElementById('telefono').value;
    const fecha_nacimiento = document.getElementById( 'fecha_nacimiento' ).value;
    const contraseña = document.getElementById('contraseña').value;

    // Construir objeto con los datos del formulario
    const datos = {
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        localidad: localidad,
        direccion: direccion,
        telefono: telefono,
        fecha_nacimiento: fecha_nacimiento,
        constraseña: contraseña

    };

    try {
        // Enviar los datos al servidor
        const response = await fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!response.ok) {
            console.error("el error es", error)
            throw new Error('Error al enviar los datos');
        
        }

        // Limpiar el formulario después de enviar los datos
        this.reset();

        // Mostrar mensaje de éxito
        alert('Integrante agregado exitosamente');
    } catch (error) {
        // Mostrar mensaje de error si ocurre algún problema
        console.error('Error al enviar los datos:', error);
        alert('Hubo un error al agregar el integrante');
    }
});
