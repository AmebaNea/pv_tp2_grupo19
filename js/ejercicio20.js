const paisSelect = document.querySelector('#pais');
const capitalSelect = document.querySelector('#capital');

const capitales = {
  argentina: 'Buenos Aires',
  brasil: 'Brasilia',
  japon: 'Tokio',
  australia: 'Canberra',
  angola: 'Luanda',
  polonia: 'Varsovia'
};

paisSelect.addEventListener('change', () => {
  const paisSeleccionado = paisSelect.value;
  const capital = capitales[paisSeleccionado];

  for (let i = 0; i < capitalSelect.options.length; i++) {
    if (capitalSelect.options[i].value === capital) {
      capitalSelect.selectedIndex = i;
      break;
    }
  }

  console.log(`País seleccionado: ${paisSeleccionado}, Capital: ${capital}`);
});
