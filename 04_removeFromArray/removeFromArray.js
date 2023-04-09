const removeFromArray = function(arr, ...args) {
    argArray = [...args];
    let output = [];
    let keep;

    for (i=0; i<arr.length; i++) {
        keep = true;
        for (j=0; j<argArray.length; j++) {
            if (arr[i] === argArray[j]) {
                keep = false;
                break;
            }
        }
        if (keep) output.push(arr[i]);
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
