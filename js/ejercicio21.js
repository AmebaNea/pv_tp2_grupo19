const entrada = document.getElementById("entradaTexto");
const salida = document.getElementById("textoMostrado");

entrada.addEventListener("input", () => {
  salida.textContent = entrada.value;
});