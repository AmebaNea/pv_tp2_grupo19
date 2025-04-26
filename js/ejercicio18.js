const cambiarTexto = (elementoParrafo, texto) => {
  console.log('Cambiando texto a:', texto);  // Para asegurarte de que el cambio de texto se está ejecutando.
  elementoParrafo.textContent = texto;
};

const boton = document.getElementById("boton");
const parrafo = document.getElementById("parrafo");
const parrafoOriginal = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur quidem atque impedit asperiores. Doloremque, commodi temporibus aliquid ipsam aliquam ratione ex iste magnam cum. Soluta hic autem exercitationem? Dolor.';
const parrafoNuevo = "Texto cambiado";
let flag = true;

boton.addEventListener('click', () => {
  console.log('Botón clickeado');  // Verifica si el evento se dispara correctamente
  const texto = flag ? parrafoNuevo : parrafoOriginal;
  cambiarTexto(parrafo, texto);
  flag = !flag;
});