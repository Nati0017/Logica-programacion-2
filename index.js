function convertirTemperatura() {
    var celsius;
    do {
        celsius = prompt("Por favor, ingresa la temperatura en grados Celsius:");
        celsius = parseFloat(celsius); // Convertir la entrada a número
        if (isNaN(celsius)) {
            console.error("Error: Debes ingresar un número válido.");
        }
    } while (isNaN(celsius));

    // Convertir a grados Fahrenheit
    var fahrenheit = celsius * 9/5 + 32;
    
    // Convertir a Kelvin
    var kelvin = celsius + 273.15;
    
    // Mostrar resultados
    console.log(celsius + " grados Celsius son " + fahrenheit.toFixed(2) + " grados Fahrenheit.");
    console.log(celsius + " grados Celsius son " + kelvin.toFixed(2) + " grados Kelvin.");
}

convertirTemperatura();
