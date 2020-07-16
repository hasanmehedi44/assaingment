// Feet to Mile calculator

function feetToMile (feet) {
    var mile = feet / 5280;
    return mile;
}
var resultMile = feetToMile(53723);
    resultMile = resultMile.toFixed(3); // i want to keep 3 digit after the decimal or point (".")
console.log(resultMile);


