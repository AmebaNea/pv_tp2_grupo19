const cambiarColor = document.getElementById('cambiarColor');
const colores = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ff99ff', '#99ffff'];

cambiarColor.addEventListener('click', () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
    console.log(`Color cambiado a: ${colorAleatorio}`);
});