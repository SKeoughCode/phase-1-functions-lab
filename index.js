// Code your solution in this file!
const headquartersStreet = 42;

function distanceFromHqInBlocks(someValue) {
    // returns the number of blocks given a value
    let temp = someValue;
    temp = Math.abs(headquartersStreet - temp);
    return temp;

}

function distanceFromHqInFeet(someValue) {
    // returns the number of feet given a value
    let numBlocks = distanceFromHqInBlocks(someValue);
    numBlocks *= 264;
    return numBlocks;

}

function distanceTravelledInFeet(start, destination) {

    let distanceInBlocks = Math.abs(start - destination);
    let distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;

}

function calculatesFarePrice(start, destination) {

    var tempDistanceInFeet = distanceTravelledInFeet(start, destination);
    console.log(tempDistanceInFeet);
    let fare = 0;
    if (tempDistanceInFeet <= 400) {
        fare = 0;
        return fare;
    }
    else if (400 < tempDistanceInFeet && tempDistanceInFeet < 2000) {
        let fare = ((tempDistanceInFeet - 400) * .02);
        return fare;
    }
    else if (2000 < tempDistanceInFeet && tempDistanceInFeet < 2500) {

        let temp = 25;
        return temp;
    }
    else if (tempDistanceInFeet > 2500) {
        return 'cannot travel that far';
    }
}