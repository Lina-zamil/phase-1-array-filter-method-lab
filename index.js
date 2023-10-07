// Code your solution here
let drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(arr, string) {
    let findMatchingResult = arr.filter(el => el.toUpperCase() === string.toUpperCase())
    return findMatchingResult
}
console.log((findMatching(drivers, 'bobby')))


function fuzzyMatch(arr, string) {
    let fuzzyMatchResult = arr.filter(el => el.startsWith(string))
    return fuzzyMatchResult
}
console.log((fuzzyMatch(drivers, 'Sa')))

let driverss = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
function matchName(arr, string) {
    let matchNameResult = arr.filter(el => el.name.toLowerCase() === string.toLowerCase())
    return matchNameResult
}
console.log((matchName(driverss, 'bobby')))

