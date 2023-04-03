function testElse(val) {
    let result = "";
    
    if (val > 5) {
        result = "Más grande que 5";
    } else {
        result = "5 o más pequeño";
    }
    return result;
    }
    
    testElse(4);