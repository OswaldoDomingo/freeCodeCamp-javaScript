// let obj = {
//     name:"FreeCodeCamp",
//     review:"Awesome"
//   };
//   Object.freeze(obj);
//   obj.review = "bad";
//   obj.newProp = "Test";
//   console.log(obj); 
/**
 En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o borrar propiedades.
 */
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();