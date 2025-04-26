document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector('#enviar');

  boton.addEventListener('click', () => {
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const lu = document.querySelector('#lu').value;

    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${lu}`);
  });
});
