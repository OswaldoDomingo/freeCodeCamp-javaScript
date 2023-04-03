function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  console.log(orderMyLogic(7));
  console.log(orderMyLogic(4)); //orderMyLogic(4) debe devolver la cadena Less than 5
  console.log(orderMyLogic(6)); // Aprobado: orderMyLogic(6) debe devolver la cadena Less than 10
  console.log(orderMyLogic(11)); // Aprobado: orderMyLogic(11) debe devolver la cadena Greater than or equal to 10 

