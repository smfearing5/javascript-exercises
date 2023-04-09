const reverseString = function(str) {
    let output = "";

    for (i=0; i<str.length; i++) {
        output = str[i] + output;
    }

    return output;
};

// Do not edit below this line
module.exports = reverseString;
