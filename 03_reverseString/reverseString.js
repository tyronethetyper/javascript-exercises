const reverseString = function(string) {
    let output = "";
    let i = string.length - 1
    for (; i >= 0; i--) {
        output += string.slice(i, i + 1);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
