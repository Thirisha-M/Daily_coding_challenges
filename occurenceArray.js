// You are a given with an array ar[] and number n. You have to print the number of occurrences of n.
// Example 1:
// Input:
// ar = [1,2,1,2,3,4,1];
// n = 1;
// Output :
// 3
// Example 2:
// Input:
// ar = [2,2,5,5,3]
// n = 3;
// Output :
// 1
function occurences(arr, n) {
    var count = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == n) {
            count++;
        }
    }
    return count;
}
var number = [2, 2, 5, 5, 3];
var n = 3;
var exists = occurences(number, n);
console.log(exists);
