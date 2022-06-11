
const returnFirstTwoDrivers= function(drivers1) {
return drivers1.slice(0,2);
}

const returnLastTwoDrivers= function(drivers2) {
    return drivers2.slice(2,5);
}
    
let selectingDrivers = 
    [returnFirstTwoDrivers,returnLastTwoDrivers];


    const createFareMultiplier = function(n) {
        return function(fare) {
        return fare * n;
    } }

    const fareDoubler = createFareMultiplier(2)
    const fareTripler = createFareMultiplier(3)
    
    const selectDifferentDrivers = function (arrayOfDrivers, 
        returnFirstTwoDrivers)
    {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }