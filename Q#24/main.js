"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let orange = "orange";
// Test for equality
console.log("orange is equal to orange");
console.log(orange == orange);
// Test for inequality
console.log("orange is not equal to orange");
console.log(orange !== orange);
// Test using the lower case function
let uppercase = "ORANGE";
// Equal to
console.log("ORANGE is equal to orange after converting to lowercase");
console.log(uppercase.toLowerCase() == "orange");
// Not equal to
console.log("ORANGE is not equal to orange after converting to lowercase");
console.log(uppercase.toLowerCase() !== "orange");
// Numerical tests involving equality and inequality, greater than and less than,
// greater than or equal to, and less than or equal to
let ten = 10;
let twenty = 20;
// Equal to
console.log("ten is equal to twenty");
// Not equal to
console.log("ten is not equal to twenty");
console.log(ten != twenty);
// Greater than
console.log("twenty is greater than ten");
console.log(twenty > ten);
// Less than
console.log("twenty is less than ten");
console.log(twenty < ten);
// Greater than or equal to
console.log("twenty is greater than or equal to ten");
console.log(twenty >= ten);
// Less than or equal to
console.log("twenty is less than or equal to ten");
console.log(twenty <= ten);
// Tests using "and" and "or" operators
let thirty = 30;
let forty = 40;
// using && (and)
console.log("forty is not equal to 30 and forty is greater than thirty");
console.log(forty != thirty && forty > thirty);
console.log("forty is not equal to 30 and thirty is greater than forty");
console.log(forty != thirty && thirty > forty);
// using || (or)
console.log("forty is greater than 30 or forty is not equal to forty");
console.log(forty > 30 || forty != forty);
console.log("forty is less than 30 or forty is not equal to forty");
console.log(40 < thirty || forty != forty);
// Test whether an item is in a array
let fruits = ["banana", "apple", "mamgo"];
console.log("apple is include in my array");
console.log(fruits.includes("apple"));
// • Test whether an item is not in a array
console.log("apple is not include in my array");
console.log(!fruits.includes("apple"));
