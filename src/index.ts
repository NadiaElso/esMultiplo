let num1: number = Number(prompt("Ingrese un número"));

let num2: number = Number(prompt("Ingrese un segundo número"));

function esMultiplo(resul: true, resul2: false) {
  if (num1 % num2 === 0) {
    console.log("Es multiplo");
  } else {
    console.log("No es multiplo");
  }
}

esMultiplo(true, false);
console.log(esMultiplo);
