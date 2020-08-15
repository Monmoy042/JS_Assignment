// Feet to Mile conversion
/*
Formula: mile = feet * 0.00018939
Here, 1 feet  = 0.00018939 mile
      5 feet  = 5 * 0.00018939 mile
*/
var feetToMile = function (feet) {
  if (feet <= 0) {
    console.log("You have entered a wrong input!!");
  } else {
    var mile = feet * 0.00018939;
    console.log(feet + " Feet is equal to " + mile + " Mile");
    return mile;
  }
};
feetToMile(5);
// var result = feetToMile(5);
// console.log(result);

// wood Calculator
var woodCalculator = function (noOfChair, noOfTable, noOfBed) {
  var woodPerChair = 1;
  var woodPerTable = 3;
  var woodPerBed = 5;
  if (woodPerChair <= 0 || woodPerTable <= 0 || woodPerBed <= 0) {
    return "You have entered a wrong input..!!";
  } else {
    var requiredWoodForChair = woodPerChair * noOfChair;
    var requiredWoodForTable = woodPerTable * noOfTable;
    var requiredWoodForBed = woodPerBed * noOfBed;
    var totalRequiredWood = requiredWoodForChair + requiredWoodForTable + requiredWoodForBed;
    return totalRequiredWood;
  }
};
console.log(woodCalculator(10,20,22));

// Brick Calculator
var brickCalculator = function (floor) {
  var brickPerFeet = 1000;
  if (floor <= 0) {
    console.log("You have entered a wrong input..!!");
  } else if (floor <= 10) {
    var totalRequiredBricks = floor * 15 * brickPerFeet;
    return totalRequiredBricks;
  } else if (floor > 10 && floor <= 20) {
    var briksForFirstTenFloor = 10 * 15 * brickPerFeet;
    var existFloor = floor - 10;
    var totalRequiredBricksForExistingFloor = existFloor * 12 * brickPerFeet;
    var requiredTotalBricks =
      briksForFirstTenFloor + totalRequiredBricksForExistingFloor;
    return requiredTotalBricks;
  } else {
    var requiredBricksTenFloor = 10 * 15 * brickPerFeet;
    var requiredBricksSecondTenFloor = 10 * 12 * brickPerFeet;
    var existingFloor = floor - 20;
    var existingBricksNumber = existingFloor * 10 * brickPerFeet;
    var requiredTotalBricks = requiredBricksTenFloor + requiredBricksSecondTenFloor + existingBricksNumber;
    return requiredTotalBricks;
  }
};
console.log(brickCalculator(12));

// Find out the tiny name of my friends
var name = [
  "Monmoy",
  "Nabil",
  "Avijit",
  "Shanto",
  "Taisir",
  "Saifullah",
  "Shahadat",
];
var tinyFriend = function (friendName) {
  var tinyName = friendName[0];
  for (var i = 0; i < friendName.length; i++) {
    if (friendName[i] == " ") {
      return "You have entered a wrong input....";
    } else {
      if (friendName[i].length < tinyName.length) {
        tinyName = friendName[i];
      }
    }
  }
  return tinyName;
};
console.log(tinyFriend(name));
