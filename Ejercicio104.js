/**
 * sum([1], 0) debe ser igual a 0.
 * Esperando:sum([2, 3, 4], 1) debe ser igual a 2.
 * Esperando:sum([2, 3, 4, 5], 3) debe ser igual a 9.
 * Esperando:Tu código no debe depender de ningún tipo de bluces (for o while) o funciones de orden alto tales como forEach, map, filter, o reduce.).
 * Esperando:Debes usar recursión para resolver este problema.
 */
sum([1], 0); //0
sum([2, 3, 4], 1); //2
sum([2, 3, 4, 5], 3); //9
function sum(arr, n) {
    if(n<=0){
        return 0;
    }else{
        return sum(arr, n-1)+arr[n-1];
    }
  }