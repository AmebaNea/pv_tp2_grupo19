let nombres = ['Lucas', 'Ana', 'Alejandra', 'Giovanna', 'Ramiro', 'Nahuel'];

const nombreMasLargo = nombres.reduce((masLargo, nombreActual) => {
    return nombreActual.length > masLargo.length ? nombreActual : masLargo;
  });

console.log(`El nombre más largo es: ${nombreMasLargo}`);
