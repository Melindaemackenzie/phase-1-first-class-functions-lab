
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo', 'Kelly', 'John']

function returnFirstTwoDrivers (drivers) {
    return drivers.slice (0, 2);
}

function returnLastTwoDrivers (drivers) {
    return drivers.slice (-2);
}

const selectingDrivers = [(returnFirstTwoDrivers), (returnLastTwoDrivers)]

function createFareMultiplier(int) {
    return function myFunction(fare) {
        return (fare * int);
    }
}
const fareDoubler = createFareMultiplier(2) 



const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, x) {
    return x(drivers);
}


