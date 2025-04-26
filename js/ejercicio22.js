const textoEntrada = document.getElementById('textoEntrada');
const mostrarTexto = document.getElementById('mostrarTexto');

textoEntrada.addEventListener('input', (e) => {
    const texto = e.target.value;
    mostrarTexto.textContent = texto;
    
    if (texto.length > 20) {
        mostrarTexto.classList.add('longitud-excedida');
    } else {
        mostrarTexto.classList.remove('longitud-excedida');
    }
});