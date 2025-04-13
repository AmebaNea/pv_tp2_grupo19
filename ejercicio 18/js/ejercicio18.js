function cambiarTexto(elementoParrafo,texto){
    elementoParrafo.textContent = texto;

}

const boton= document.getElementById("boton");
const parrafo= document.getElementById("parrafo");
const parrafOriginal= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consectetur quidem atque impedit asperiores. Doloremque, commodi temporibus aliquid ipsam aliquam ratione ex iste magnam cum. Soluta hic autem exercitationem? Dolor.';
const parrafoNuevo = "Texto cambiado"
let flag = true;

boton.addEventListener('click',() => {
    const texto = flag?parrafoNuevo:parrafOriginal;
    cambiarTexto(parrafo,texto);
    flag = !flag;
});
