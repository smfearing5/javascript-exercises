const getTheTitles = function(arr) {
    let output = [];
    arr.forEach(book => output.push(book.title));

    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
