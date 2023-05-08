// multiplyAll([[1], [2], [3]]) debe devolver 6
// Falló:multiplyAll([[1, 2], [3, 4], [5, 6, 7]]) debe devolver 5040
// Falló:multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) debe devolver 54
function multiplyAll(arr) {
    let product = 1;
    // Cambia solo el código debajo de esta línea
  for(let i = 0; i < arr.length; i++){
    for(let  j=0; j<arr[i].length; j++){
      product += arr[i] * arr[i][j];
    }
  }
    // Cambia solo el código encima de esta línea
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);