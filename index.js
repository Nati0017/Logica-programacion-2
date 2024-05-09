function convertirTemperatura() {
    let celsius;
    do {
        celsius = parseFloat(prompt("Por favor, ingresa la temperatura en grados Celsius:"));
        if (isNaN(celsius)) {
            console.error("Error: Debes ingresar un número válido.");
        }
    } while (isNaN(celsius));

    let fahrenheit = celsius * 9/5 + 32;
    
    let kelvin = celsius + 273.15;
    
    console.log(celsius + " grados Celsius son " + fahrenheit.toFixed(2) + " grados Fahrenheit.");
    console.log(celsius + " grados Celsius son " + kelvin.toFixed(2) + " grados Kelvin.");
}

convertirTemperatura();
