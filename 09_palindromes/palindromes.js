const palindromes = function (string) {
    string_array = string.toLowerCase().split("");
    clean_string = string_array.filter(removePunctuation);
    rev_string = clean_string.slice().reverse();
    console.log(clean_string);
    console.log(rev_string);
    return clean_string.every((value, index) => value === rev_string[index]);

    function removePunctuation(character) {
        return (character.charCodeAt(0) >= 48 && character.charCodeAt(0) <= 57) || (character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90) || (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)
    };
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes('Animal loots foliated detail of stool lamina.'));