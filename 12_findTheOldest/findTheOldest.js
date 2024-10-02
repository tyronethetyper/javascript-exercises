const findTheOldest = function(array) {
    ages_array = array.map((person) => {
        if (person.yearOfDeath === undefined) {
            let currentYear = new Date().getFullYear();
            return currentYear - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth;
    })
    console.log(ages_array);
    let maxIndex = ages_array.reduce((maxIdx, currentVal, currentIndex, ages_array) =>
        currentVal > ages_array[maxIdx] ? currentIndex : maxIdx, 0);
    return array[maxIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
