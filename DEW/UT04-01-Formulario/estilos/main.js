import { mostrarContra, generarAnios, bordeValido, validarFormulario, mostrarMensajesValidacion } from './funciones.js';

// Seleccionar el formulario
const form = document.querySelector('form');

// Asignar la función de validación a los inputs requeridos
const inputs = document.querySelectorAll('input:required, textarea:required');
inputs.forEach(input => {
    input.addEventListener('input', bordeValido);
});

// Contador de caracteres para el título
document.getElementById('titulo').addEventListener('input', function () {
    const tituloLength = this.value.length;
    document.getElementById('titulo-counter').textContent = `${tituloLength}/15`;
});

// Contador de caracteres para la descripción
document.getElementById('descripcion').addEventListener('input', function () {
    const descripcionLength = this.value.length;
    document.getElementById('descripcion-counter').textContent = `${descripcionLength}/120`;
});

// Generar años al cargar la página
window.onload = generarAnios;

// Validar formulario al enviarlo
form.addEventListener('submit', function(event) {
    validarFormulario(event);  // Realizar validación del formulario
    mostrarMensajesValidacion(); // Mostrar mensajes de validación
});

// Función para mostrar u ocultar la contraseña (asociada al checkbox o similar)
document.getElementById('mostrarContrasena').addEventListener('click', mostrarContra);
