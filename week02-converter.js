function cedisToDollars(cedis){
    let dollars = cedis / 10.5;
    return dollars.toFixed(2);
}

function kmToMiles(km){
    let miles = km * 0.621371;
    return miles.toFixed(2);
}

function celciusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(2);
}

cedisToDollars(105); 
console.log(`GH₵105 is equal to $${cedisToDollars(105)}.`); 
console.log(`10 km is equal to ${kmToMiles(10)} miles.`);
console.log(`0°C is equal to ${celciusToFahrenheit(0)}°F .`);
