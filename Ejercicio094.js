// const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };
  
//   const gloveBoxContents = undefined;

/**
 * Accede al objeto myStorage y asigna el contenido de la propiedad glove box a la variable gloveBoxContents. 
 * Utiliza la notación de puntos para todas las propiedades cuando sea posible, de lo contrario utiliza la notación de corchetes.
 */

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  //const gloveBoxContents = undefined;
  
  const gloveBoxContents = myStorage.car.inside["glove box"];
  
  console.log(gloveBoxContents);
  
  //maps