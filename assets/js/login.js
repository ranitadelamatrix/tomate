// Obtener el modal de inicio de sesión por su ID
var modal = document.getElementById('id01');

// Obtener el botón de login por su clase
var loginBtn = document.querySelector('.btn-loggin');

// Obtener el formulario de registro por su ID
var registerForm = document.getElementById('id02');

// Función para abrir el formulario de registro
function openRegisterForm() {
    // Ocultar el modal de inicio de sesión
    modal.style.display = "none";
    // Mostrar el formulario de registro
    registerForm.style.display = "block";
}

// Evento para abrir el formulario de registro al hacer clic en el botón de login
loginBtn.addEventListener('click', openRegisterForm);

// Función para cerrar el modal de inicio de sesión
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Evento para cerrar el modal de inicio de sesión al hacer clic en el botón de cancelar
document.querySelector('.btn-cancelar').addEventListener('click', function() {
    modal.style.display = "none";
});

document.getElementById('btnMostrarRegistro').addEventListener('click', function() {
    // Ocultar formulario de inicio de sesión
    document.getElementById('id01').style.display = 'none';
    // Mostrar formulario de registro
    document.getElementById('registroForm').style.display = 'block';
});