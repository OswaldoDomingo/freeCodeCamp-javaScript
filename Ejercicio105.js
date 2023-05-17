// lookUpProfile("Kristian", "lastName") debe devolver la cadena Vos
// lookUpProfile("Sherlock", "likes") debe devolver ["Intriguing Cases", "Violin"]
// lookUpProfile("Harry", "likes") debe devolver un arreglo
// lookUpProfile("Bob", "number") debe devolver la cadena No such contact
// lookUpProfile("Bob", "potato") debe devolver la cadena No such contact
// lookUpProfile("Akira", "address") debe devolver la cadena No such property
// Configuración
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];

  //const busca = contacts.firstName.Akira;
  // console.log(busca);
  function lookUpProfile(name, prop) {
    for(let i=0; i < contacts.length; i++){
      if(contacts[i].firstName === name){
        if(prop in contacts[i]){
          return contacts[i][prop];
        } else{
          return "No such property";
        }
      }
    }
    return "No such contact";
  }
  lookUpProfile("Akira", "likes");
  lookUpProfile("Kristian", "lastName")