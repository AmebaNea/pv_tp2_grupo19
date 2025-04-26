const opciones = document.querySelectorAll('input[name="lenguaje"]');
const resultadoSeleccion = document.getElementById('resultadoSeleccion');

opciones.forEach(opcion => {
    opcion.addEventListener('change', (e) => {
        if (e.target.checked) {
            resultadoSeleccion.textContent = `Lenguaje seleccionado: ${e.target.value}`;
            console.log(`Lenguaje seleccionado: ${e.target.value}`);
        }
    });
});