const calcularMayor = (numero1, numero2) => {
    if(numero1 > numero2){
        alert(`El numero ${numero1} es el mayor.`);
    } else if( numero2 > numero1) {
        alert(`El numero ${numero2} es el mayor.`);
    }else{
        alert(`El numero ${numero1} y el ${numero2} son iguales.`);
    }
}

// ejemplos

calcularMayor(8,12);
calcularMayor(17,6);
calcularMayor(64,64);