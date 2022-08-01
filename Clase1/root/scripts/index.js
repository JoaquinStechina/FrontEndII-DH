let arreglo = [];
for(let i = 0; i < 4; i++){
    let aux = parseInt(prompt("Decime el numero "+i+": "));
    arreglo.push(aux);
}
console.log(arreglo)
let aux = 0;
for(let i = 0; i < arreglo.length; i++){
    aux += arreglo[i];
    console.log(aux);
}