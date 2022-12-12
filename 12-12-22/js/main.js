//Ejercicio1
//Escribir una función que tome un arreglo de números 
//y devuelva el número mayor de la lista. Ejemplo del arreglo: [3,5,7,1,6]

let numeros = [3,5,7,1,6];

console.log(`El número mayor es ${Math.max(...numeros)}`);

//Ejercicio2
//María llega a su entrevista de trabajo para el rol de Desarollador
//Junior y se le pide que resuelva este problema: Dada una lista de números
//[-1,3,4,2,6], escribe una función en javascript para calcular
//el número más pequeño.

let numeros2 = [3,5,7,1,6];

console.log(`El número menor es ${Math.min(...numeros)}`);

//Ejercicio 3
//Escribir una función que permita saber si un número se repite dentro dentro
//de una arreglo
//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez
//[1,22,5,17,10,5,40,5]

let arreglo = [1, 22, 5, 17, 10, 5, 40, 5];
 let n1 = 5;

for (let arreglo = 0; index &lt; arreglo.length; index++) {
            const element = arreglo[index];
           
        }
    console.log(arreglo);

//Caso 2: 
//Resultado esperado: El número 7 se encuentra más de una vez [7,41,5,7,10,13,2]

let arreglo2 = [7, 41, 5, 7, 10, 13, 2];
let n2 = 7;

for (let arreglo2 = 0; index &lt; arreglo2.length; index++) {
            const element = arreglo2[index];
           
        }
    console.log(arreglo2);

    for (let arreglo2 = 0; index &lt; arreglo2.length; index++) {
                const element = arreglo2[index];
               
            }
        console.log(arreglo2);

//Caso 3:
//Resultado esperado: No hay números repetidos [1,22,5,14,24,31,27,15,105]

let arreglo3 = [1, 22, 5, 14, 24, 31, 27, 15, 105];
let n3 = null;

for (let arreglo3 = 0; index &lt; arreglo3.length; index++) {
            const element = arreglo3[index];
           
        }
    console.log(arreglo3);

//Ejercicio 3:
//Escribir una función que tome un arreglo ordenado y devuelva un arreglo
//completamente desordenado, Entrada [1,2,5,14,31,50,105]
//Posible salida: [105,31,14,1,2,50,21,5]

const desordenar = [1, 2, 5, 14, 24, 31, 50, 105];
console.log(desordenar.sort(()=>Math.random()-0.5));
