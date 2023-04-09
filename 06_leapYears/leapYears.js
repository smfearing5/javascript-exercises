const leapYears = function(year) {
    let leap = true;

    if (year % 4 != 0) leap = false;
    if (year % 100 === 0 && year % 400 != 0) leap = false;

    return leap;
};

// Do not edit below this line
module.exports = leapYears;
