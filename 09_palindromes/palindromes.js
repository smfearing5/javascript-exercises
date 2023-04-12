const palindromes = function (str) {
    let arr = [];
    let char = ' ';

    // sort into an array, removing punctuation & spaces
    for (i=0; i<str.length; i++) {
        char = str[i].toLowerCase();
        if (char >= 'a' && char <= 'z') {
            arr.push(char);
        }
    }

    // evaluate each character pair in the array
    while (arr.length > 1) {
        if (arr[0] != arr[arr.length - 1]) return false
        else {
            arr.pop();
            arr.shift();
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
