 // Configuración
 const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
    };

    // Cambia solo el código debajo de esta línea
    function updateRecords(records, id, prop, value) {
        

    return records;
    }
    // Después de updateRecords(recordCollection, 5439, "artist", "ABBA"), artist debe ser la cadena ABBA
    // Después de updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracks debe tener la cadena Take a Chance on Me como último y único elemento.
    // Después de updateRecords(recordCollection, 2548, "artist", ""), artist no debe establecerse
    // Después de updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracks debe tener la cadena Addicted to Love como último elemento.
    // Después de updateRecords(recordCollection, 2468, "tracks", "Free"), tracks debe tener la cadena 1999 como primer elemento.
    // Después de updateRecords(recordCollection, 2548, "tracks", ""), tracks no debe establecerse
    // Después de updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitle debe ser la cadena Riptide

    console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
    //console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));

//     La función updateRecords toma 4 argumentos representados por los siguientes parámetros de función:

//     records - un objeto que contiene varios álbumes individuales
//     id - un número que representa un álbum específico en el objeto records
//     prop - una cadena que representa el nombre de la propiedad del álbum a actualizar
//     value - una cadena que contiene la información utilizada para actualizar la propiedad del álbum

// Completa la función utilizando las reglas siguientes para modificar el objeto pasado a la función.

//     Tu función debe devolver siempre el objeto records completo.
//     Si value es una cadena vacía, elimina la propiedad prop dada del álbum.
//     Si el accesorio no son pistas y el valor no es una cadena vacía, asigne el valor al accesorio de ese álbum.
//     Si prop son pistas y el valor no es una cadena vacía, agregue el valor al final de la matriz de pistas del álbum. 
//     Primero debe crear esta matriz si el álbum no tiene una propiedad de pistas.
//     If prop isn't tracks and value isn't an empty string, assign the value to that album's prop.
//     If prop is tracks and value isn't an empty string, add the value to the end of the album's tracks array. You need to create this array first if the album does not have a tracks property.

// Nota: Para las pruebas se utiliza una copia del objeto recordCollection. No debes modificar directamente el objeto recordCollection.