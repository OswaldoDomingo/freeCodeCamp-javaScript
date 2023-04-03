function testElseIf(val) {
    if (val > 10) {
        return "Mayor que 10";
    }
    else if (val < 5) {
        return "Menor que 5";
    } 
    else {
        return "Entre 5 y 10";
    }  
    }
    
    testElseIf(7);