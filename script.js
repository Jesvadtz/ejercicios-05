// Ejercicio 01: Realiza un ciclo que imprima en consola los números del 1 al 100 de forma inversa (solicita los parámetros que consideres necesarios por consola).

//Opción 1
for (let i = 100; i >= 1; i--) {
  console.log(i);
}

//Opción 2
let i = 101;
while (i >= 1) {
  i = i - 1;
  console.log(i);
}

//Ejercicio 02: Realiza un ciclo que imprima en consola la suma de los números impares comprendidos del 1 al 100 (solicita los parámetros que consideres necesarios por consola).

//Opción 1
for (let i = 1; i <= 100; i++) {
  if (!(i % 2 === 0)) console.log(i);
}

// Ejercicio 03: Realiza un ciclo que imprima en consola los números pares comprendidos del 1 al 100 (solicita los parámetros que consideres necesarios por consola).

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}

// Ejercicio 04: Realiza un ciclo que imprima en consola la suma de los números comprendidos del 1 al 100 (solicita los parámetros que consideres necesarios por consola).

let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma = suma + i;
  console.log(suma);
}
