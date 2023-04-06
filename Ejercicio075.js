

// Escribe sentencias if / else if encadenadas para cumplir con las siguientes condiciones:

// num < 5 - devuelve Tiny
// num < 10 - devuelve Small
// num < 15 - devuelve Medium
// num < 20 - devuelve Large
// num >= 20 - devuelve Huge



function testSize(num) {
    // Cambia solo el código debajo de esta línea
    if(num < 5){
        return "Tiny";
    } else if(num < 10){
        return "Small";
    } else if(num < 15){
        return "Medium";
    } else if(num < 20){
        return "Large";
    } else if(num >= 20){
        return "Huge"
    } else {
        return "Change Me";
    }
    // Cambia solo el código encima de esta línea
  }
  
  testSize(7);
  testSize(0);
  testSize(4);
  testSize(5);
  testSize(8);
  testSize(10);
  testSize(14);
  testSize(15);
  testSize(17);
  testSize(20);
  testSize(25);