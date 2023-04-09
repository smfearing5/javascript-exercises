const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) return "ERROR";

    
    let output = 0;
    let low;
    let high;
    if (num1 < num2) {
        low = num1;
        high = num2;
    }
    else {
        low = num2;
        high = num1;
    }

    for (i=low; i<=high; i++) output += i;

    return output;
};

// Do not edit below this line
module.exports = sumAll;
