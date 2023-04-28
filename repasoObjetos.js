//Construccuion del objeto
const objeto = {
    "25376777A": {
      "mi nombre":"Oswaldo",
      apellido:"Domingo",
      telefono:"644259611",
      correo:"devweb@oswaldo.dev"},
    "19358969F": {
      "mi nombre":"Manuel",
      apellido:"Domingo",
      telefono:"",
      correo:"manuelDomingoValero@oswaldo.dev"
    }
  
  }
  
  console.log(objeto["25376777A"]["mi nombre"]);
  //Oswaldo
  //Cambiar el nombre por la notación por corchetes
  const cambioNombre = objeto["25376777A"]["mi nombre"] = "Oswaldo Manuel";
  
  console.log(objeto["25376777A"]["mi nombre"]);
  //Oswaldo Manuel
  //Añadimos la propiedad ciudad => valencia
  objeto["25376777A"]["ciudad"] = "Valencia";

  console.log(objeto["25376777A"]["ciudad"]);
  //Valencia
  //Vemos si tiene la propiedad ciudad
  let ciudadManolo = objeto["19358969F"]["ciudad"];
  //Si es falsa se crea y se le asigna una ciudad
  if(!ciudadManolo){
    ciudadManolo = objeto["19358969F"]["ciudad"] = "Valencia"
  }

  console.log("Manuel vive en:", ciudadManolo);
  //Manuel vive en: Valencia
  
  console.log(objeto["19358969F"]);
  /**
    {
    'mi nombre': 'Manuel',
    apellido: 'Domingo',
    telefono: '',
    correo: 'manuelDomingoValero@oswaldo.dev',
    ciudad: 'Valencia'
}
   */