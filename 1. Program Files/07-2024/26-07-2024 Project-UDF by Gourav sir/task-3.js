// Q-3. Write a function convertKilometersToMiles(kilometers) that converts kilometers to miles and returns the result.


let kilometers = 100
convert(kilometers)
function convert(kilometers) {
    let conversionFactor = 0.621371
    let miles = kilometers * conversionFactor
    console.log(`${kilometers} kilometers is equal to ${miles} miles`)
}