let edades = [ 16, 18, 25, 8, 65, 35, 93, 2];

let sumaEdades = 0;
for (let i = 0; i < edades.length; i++) {
    sumaEdades += edades[i];
}

let promedio = sumaEdades / edades.length;
console.log(`Edades: ${edades}`);
console.log(`Promedio de edades: ${promedio}`);