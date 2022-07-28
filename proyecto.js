
let nombre = prompt("Ingresa tu nombre");

while(nombre != "ESC"){
    switch(nombre){
        case "Adriel" :
            alert( "Hola Adriel!");
            break;
        
        case "Nicolas" :
            alert("Hola Nicolas!");
            break;

        case "Edu" :
            alert("Hola Edu!");
            break;
        
        default: 
            alert("Ingresa tu nombre correctamente");
            break;
    }
    nombre = prompt("Ingresa tu nombre");
}



