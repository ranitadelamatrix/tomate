function cargar(){

    // Obtener los valores del formulario
    const dni = document.getElementById('dni').value
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const direccion = document.getElementById('direccion').value;
    const localidad = document.getElementById('localidad').value;
    const telefono = document.getElementById('telefono').value;
    const contraseña = document.getElementById('contraseña').value;

    // Construir objeto con los datos del formulario
    const datos = {
        dni: dni,
        nombre: nombre,
        apellido: apellido,
        direccion: direccion,
        localidad: localidad,
        telefono: telefono,
        contraseña: contraseña

    };

    try {
        // Enviar los datos al servidor
        const response = fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        alert("bienvenido " +nombre+ " tu usuario se cargo correctamente")

            console.log("carga correcta")
        
        }
    
    catch(error){
            console.log(error)
        }
        
    };