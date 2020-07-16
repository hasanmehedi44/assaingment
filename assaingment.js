// Feet to Mile calculator

function feetToMile (feet) {
    var mile = feet / 5280;
    return mile;
}
var resultMile = feetToMile(53723);
    resultMile = resultMile.toFixed(3); // i want to keep 3 digit after the decimal or point (".")
console.log(resultMile);



// Chait table khat calculator

function woodCalculator (chair, table, khat) {
    var woodForTheChair = chair * 1; // input iteam "chair" must become only number of chair.
    var woodForTheTable = table * 3;  // input iteam "table" must become only number of table.
    var woodForTheKhat = khat * 5;  // input iteam "khat" must become only number of khat.
    var totalWoodNeeded = woodForTheChair + woodForTheTable + woodForTheKhat;
    return totalWoodNeeded;
}
var resultTotalWood = woodCalculator(2, 2, 1);
console.log(resultTotalWood + " cubic feet wood needed");


// Brick calculator
function brickCalculator (numberOfTala) {
    if ( numberOfTala <= 10 ) {
        var brikcs = numberOfTala * 15 * 1000;
    } else if ( numberOfTala > 10 && numberOfTala <= 20 ) {
        var tala = numberOfTala - 10;
            brikcs = 10 * 15 * 1000 + ( tala * 12 * 1000);
    } else if ( numberOfTala > 20) { 
        var tala = numberOfTala - 20;
            brikcs = ( 15 * 10 * 1000) + ( 12 * 10 * 1000) + ( tala * 10 * 1000);
    }
    return brikcs;
}

var resultTotalBricks = brickCalculator(25);
console.log(resultTotalBricks);


