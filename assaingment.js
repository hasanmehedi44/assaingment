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


