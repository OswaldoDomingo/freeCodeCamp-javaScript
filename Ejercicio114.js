/**
Tu función debe devolver un arreglo.
Tu código no debe utilizar bucles (for, while o funciones de orden superior como forEach, map, filter, o reduce).
rangeOfNumbers debe utilizar recursión (llamadas a sí mismo) para resolver este desafío.
rangeOfNumbers(1, 5) debe devolver [1, 2, 3, 4, 5].
rangeOfNumbers(6, 9) debe devolver [6, 7, 8, 9].
rangeOfNumbers(4, 4) debe devolver [4].
No se debe usar variables globales como almacenamiento temporal del array.
Hemos definido una función llamada rangeOfNumbers con dos parámetros. 
La función debe devolver un arreglo de enteros que comienza con el número representado por el parámetro startNum 
y termina con el número representado por el parámetro endNum. 
El número inicial será siempre menor o igual que el número final. 
Tu función debe utilizar recursión, llamándose a sí misma, y no utilizar bucles de ningún tipo. 
También debe funcionar en el caso que startNum y endNum sean iguales.
 */
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    console.log(startNum + " < " + endNum);
    return [];
  } else {
    console.log(startNum + " > " + endNum);
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

console.log(rangeOfNumbers(1, 9));
