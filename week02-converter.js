function cedisToDollars(cedis){
    const dollars = cedis / 10.5;
    return Number(dollars.toFixed(2));
}

function kmToMiles(km){
    const miles = km * 0.621371;
    return Number(miles.toFixed(2));
}

function celsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return Number(fahrenheit.toFixed(2));
}

cedisToDollars(105); 
console.log(`GH₵105 is equal to $${cedisToDollars(105)}.`); 
console.log(`10 km is equal to ${kmToMiles(10)} miles.`);
console.log(`0°C is equal to ${celsiusToFahrenheit(0)}°F .`);
