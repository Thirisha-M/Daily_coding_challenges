function vowels(str) {
    var count = 0;
    var letter = str.toLowerCase();
    for (var _i = 0, letter_1 = letter; _i < letter_1.length; _i++) {
        var letters = letter_1[_i];
        if (letters === 'a' || letters === 'e' || letters === 'i' || letters === 'o' || letters === 'u') {
            count++;
        }
    }
    return count;
}
console.log(vowels("divya"));
