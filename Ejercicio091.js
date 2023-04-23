/**
 * 


const article = {
    "title": "How to create objects in JavaScript",
    "link": "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
    "author": "Kaashan Hussain",
    "language": "JavaScript",
    "tags": "TECHNOLOGY",
    "createdAt": "NOVEMBER 28, 2018"
  };
console.log(article);

  const articleAuthor = article["author"];
  const articleLink = article["link"];
  
  const value = "title";
  const valueLookup = article[value];
  
  console.log(articleAuthor);
  console.log(articleLink);
  console.log(value);
  console.log(valueLookup);

 */

  // Configuración
/*
articleAuthor es la cadena Kaashan Hussain, 
articleLink es la cadena https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/, 
y valueLookup es la cadena How to create objects in JavaScript.

Convierte la declaración switch en un objeto llamado lookup. 
Úsalo para buscar val y asignar la cadena asociada a la variable result.

*/

function phoneticLookup(val) {
    let result = "";

    const lookup = {
        "alpha" : "Adams",
        "bravo" : "Boston",
        "charlie" : "Chicago",
        "delta" : "Denver",
        "echo" : "Easy",
        "foxtrot" : "Frank"
    }
    const value = val;
    result = lookup[value];
  
    return result;
  }
  
  console.log(phoneticLookup("charlie"));
  console.log(phoneticLookup("alpha"));
  console.log(phoneticLookup("bravo"));
  console.log(phoneticLookup("delta"));
  console.log(phoneticLookup("foxtrot"));
  console.log(phoneticLookup(""));
/*
Chicago
Adams
Boston
Denver
Frank
undefined
*/
