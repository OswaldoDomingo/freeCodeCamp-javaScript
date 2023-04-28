
// function checkObj(obj, checkProp) {
//     // Cambia solo el código debajo de esta línea
//     return "Change Me!";
//     // Cambia solo el código encima de esta línea
//   }


function checkObj(obj, checkProp) {
    let value = obj.hasOwnProperty(checkProp);
      value ? value = obj[checkProp] : value = "Not Found"
    return value;

}

// Aprobado: checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") debe devolver la cadenapony. 
// Aprobado: checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") debe devolver la cadena kitten. 
// Aprobado: checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") debe devolver la cadena Not Found. 
// Aprobado: checkObj({city: "Seattle"}, "city") debe devolver la cadena Seattle.
// Aprobado: checkObj({city: "Seattle"}, "district") debe devolver la cadena Not Found.
// Aprobado: checkObj({pet: "kitten", bed: "sleigh"}, "gift") debe devolver la cadena Not Found.

