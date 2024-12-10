// Función para mostrar u ocultar la contraseña
export function mostrarContra() {
    const passwordField = document.getElementById('password');
    const checkbox = document.getElementById('mostrar-contrasena');
    
    if (checkbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Función para generar los años en el select
export function generarAnios() {
    const select = document.getElementById("anioNacimiento");
    for (let year = 1920; year <= 2010; year++) {
        let option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        select.appendChild(option);
    }
}

// Función para cambiar el borde en campos válidos o no válidos
export function bordeValido() {
    if (this.value.trim() !== "") {
        this.style.border = '1px solid green';
    } else {
        this.style.border = '1px solid red';
    }
}

// Función para validar el DNI o NIE
export function validarDocumento(numDni, tipoDocumento) {
    const errorDocumento = document.getElementById('error-documento');
    errorDocumento.textContent = ''; // Limpiar error previo
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (tipoDocumento === "DNI") {
        if (/^\d{8}[A-Za-z]$/.test(numDni)) {
            const numeros = parseInt(numDni.slice(0, -1), 10);
            const letra = numDni.slice(-1).toUpperCase();
            if (letras[numeros % 23] !== letra) {
                return 'La letra del DNI no es correcta.';
            }
        } else {
            return 'El DNI debe tener el formato 8 números seguidos de una letra.';
        }
    } else if (tipoDocumento === "NIE") {
        if (/^[XYZ]\d{7}[A-Za-z]$/.test(numDni)) {
            const prefijo = numDni[0].replace('X', 0).replace('Y', 1).replace('Z', 2);
            const numeros = parseInt(prefijo + numDni.slice(1, -1), 10);
            const letra = numDni.slice(-1).toUpperCase();
            if (letras[numeros % 23] !== letra) {
                return 'La letra del NIE no es correcta.';
            }
        } else {
            return 'El NIE debe tener el formato X/Y/Z seguido de 7 dígitos y una letra.';
        }
    }
    return ''; // Sin errores
}

// Función para validar el formulario
export function validarFormulario(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const contrasena = document.getElementById('password').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const aficiones = document.querySelectorAll('input[name="aficiones"]:checked');
    const codigoPostal = document.getElementById('codigoPostal').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const titulo = document.getElementById('titulo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const numDni = document.getElementById('documento').value.trim();
    const tipoDocumento = document.getElementById('tipoDocumento').value;

    let hayErrores = false;

    if (username === '') {
        document.getElementById('error-username').textContent = 'El nombre de usuario es obligatorio.';
        hayErrores = true;
    } else {
        document.getElementById('error-username').textContent = '';
    }

    if (contrasena === '') {
        document.getElementById('error-contrasena').textContent = 'La contraseña es obligatoria.';
        hayErrores = true;
    } else {
        document.getElementById('error-contrasena').textContent = '';
    }

    if (nombre === '') {
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
        hayErrores = true;
    } else {
        document.getElementById('error-nombre').textContent = '';
    }

    if (apellidos === '') {
        document.getElementById('error-apellidos').textContent = 'Los apellidos son obligatorios.';
        hayErrores = true;
    } else {
        document.getElementById('error-apellidos').textContent = '';
    }

    if (aficiones.length < 2) {
        document.getElementById('error-aficiones').textContent = 'Debes seleccionar al menos 2 aficiones.';
        hayErrores = true;
    } else {
        document.getElementById('error-aficiones').textContent = '';
    }

    if (!/^\d{5}$/.test(codigoPostal) || !codigoPostal.startsWith('38')) {
        document.getElementById('error-codigoPostal').textContent = 'El código postal debe tener 5 dígitos y comenzar por 38.';
        hayErrores = true;
    } else {
        document.getElementById('error-codigoPostal').textContent = '';
    }

    if (!/^\(\+34\)\d{9}$/.test(telefono)) {
        document.getElementById('error-telefono').textContent = 'El teléfono debe tener el formato (+34)XXXXXXXXX.';
        hayErrores = true;
    } else {
        document.getElementById('error-telefono').textContent = '';
    }

    if (titulo.length < 4) {
        document.getElementById('error-titulo').textContent = 'El título debe tener al menos 4 caracteres.';
        hayErrores = true;
    } else {
        document.getElementById('error-titulo').textContent = '';
    }

    if (descripcion.length < 4) {
        document.getElementById('error-descripcion').textContent = 'La descripción debe tener al menos 4 caracteres.';
        hayErrores = true;
    } else {
        document.getElementById('error-descripcion').textContent = '';
    }

    const errorDocumento = validarDocumento(numDni, tipoDocumento);
    if (errorDocumento) {
        document.getElementById('error-documento').textContent = errorDocumento;
        hayErrores = true;
    } else {
        document.getElementById('error-documento').textContent = '';
    }

    if (!hayErrores) {
        alert('Formulario enviado correctamente.');
        form.submit();
    }
}

// Función para mostrar los mensajes de validación
export function mostrarMensajesValidacion() {
    const mensajesContenedor = document.getElementById('mensajes-validacion');
    mensajesContenedor.innerHTML = ''; // Limpiar los mensajes previos

    const elementosValidacion = document.querySelectorAll('input:required, textarea:required');
    
    // Iterar sobre cada campo de entrada o textarea requerido
    elementosValidacion.forEach(elemento => {
        const mensajeValidacion = elemento.validationMessage;
        if (mensajeValidacion) {
            const nombreElemento = elemento.getAttribute('id') || elemento.getAttribute('name');
            const mensajeHTML = `<p><strong>${nombreElemento}:</strong> ${mensajeValidacion}</p>`;
            mensajesContenedor.innerHTML += mensajeHTML;
        }
    });
}
