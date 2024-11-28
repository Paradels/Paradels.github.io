// Seleccionar el formulario
const form = document.querySelector('form');

// Función para mostrar u ocultar la contraseña
function mostrarContra() {
    const passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Función para validar el formulario
function validarFormulario(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Obtener los valores de los campos
    const username = document.querySelector('input[placeholder="UserName"]').value.trim();
    const password = document.getElementById('password').value.trim();
    const nombre = document.querySelector('input[placeholder="Nombre"]').value.trim();
    const apellidos = document.querySelector('input[placeholder="Apellidos"]').value.trim();
    const telefono = document.querySelector('input[placeholder="Ejem:(+34)922646464"]').value.trim();
    const codigoPostal = document.querySelector('input[placeholder="38XXX"]').value.trim();
    const documento = document.getElementById('documento').value.trim();
    const anioNacimiento = document.querySelector('input[placeholder="año"]').value.trim();

    let errores = [];

    // Validar Nombre de Usuario
    if (!username) {
        errores.push('El Nombre de Usuario es obligatorio.');
    }

    // Validar Contraseña
    if (password.length < 6) {
        errores.push('La Contraseña debe tener al menos 6 caracteres.');
    }

    // Validar Nombre y Apellidos
    if (!nombre) {
        errores.push('El Nombre es obligatorio.');
    }
    if (!apellidos) {
        errores.push('Los Apellidos son obligatorios.');
    }

    // Validar Teléfono
    const telefonoRegex = /[0-9]{9}/;
    if (!telefonoRegex.test(telefono)) {
        errores.push('El Teléfono debe tener el formato (+34)XXXXXXXXX.');
    }

    // Validar Código Postal
    if (!/^[0-9]{5}$/.test(codigoPostal)) {
        errores.push('El Código Postal debe tener 5 dígitos.');
    }

    // Validar Documento
    const documentoRegex = /^[0-9]{8}[A-Z]$/;
    if (!documentoRegex.test(documento)) {
        errores.push('El Número de Documento debe tener el formato 99999999X.');
    }

    // Validar Año de Nacimiento
    const anioActual = new Date().getFullYear();
    if (!/^[0-9]{4}$/.test(anioNacimiento) || anioNacimiento < 1900 || anioNacimiento > anioActual) {
        errores.push('El Año de Nacimiento no es válido.');
    }

    // Mostrar errores o enviar formulario
    if (errores.length > 0) {
        alert('Errores encontrados:\n' + errores.join('\n'));
    } else {
        alert('Formulario enviado correctamente.');
        form.submit(); // Enviar el formulario
    }
}

// Agregar el evento de validación al formulario
form.addEventListener('submit', validarFormulario);
