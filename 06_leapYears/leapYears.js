const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(leapYears(1996)); // Output: true


// Do not edit below this line
module.exports = leapYears;
