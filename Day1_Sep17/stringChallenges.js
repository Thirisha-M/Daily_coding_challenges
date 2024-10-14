/*Write a function that takes a string and returns the number of characters in it.
output
countCharacters("hello");  // Expected output: 5
countCharacters("typescript");  // Expected output: 10*/
var countCharacters;
countCharacters = function (str) {
    return str.length;
};
console.log(countCharacters('hello'));
/*Write a function that takes a string and returns it reversed.
output
reverseString("hello");  // Expected output: "olleh"
reverseString("typescript");  // Expected output: "tpircsety"*/
var reverseString;
reverseString = function (str) {
    return str.split("").reverse().join("");
};
console.log(reverseString('hello'));
/*Write a function that checks if a string contains a specific substring.
output
containsSubstring("typescript", "script");  // Expected output: true
containsSubstring("hello", "world");  // Expected output: false*/
// var findSubString:(str:string,substring:string)=>boolean
// findSubString=function(str:string,substring:string)
// {
//     return str.includes(substring);
// }
// console.log(findSubString("typescript","script"))
// console.log(findSubString("hello","world"))
//another method
function containsSubstring(str, substring) {
    for (var i = 0; i <= str.length - substring.length; i++) {
        if (str.slice(i, i + substring.length) === substring) {
            return true;
        }
    }
    return false;
}
console.log(containsSubstring("typescript", "script")); // Expected output: true
console.log(containsSubstring("hello", "world")); // Expected output: false
