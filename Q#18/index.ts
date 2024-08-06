

// Q # 19
// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placeToVisit: string[] = ["Canada","Garmany","Australia","Englind","Pakistan"];

// print in an original order
console.log("Original order:",placeToVisit);

// print arrey in elphabatical order
console.log("Alphabatical order:",placeToVisit.slice().sort());

// array  is still in its orginal order
console.log("Original order:",placeToVisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabatical order:",placeToVisit.slice().sort().reverse());

// array  is still in its orginal order
console.log("Original order after reverse sorting:",placeToVisit);

// reverse the order of list
placeToVisit.reverse();
console.log("Reverse order:",placeToVisit);

// reverse the order of list again
placeToVisit.reverse();
console.log("Original order again:",placeToVisit);

// sort array so it's stored in alphabetical order
console.log(" Sorted in Alphabatical order:",placeToVisit.slice().sort());


// sort to change array so it's stored in reverse alphabetical order
console.log("Stored in Reverse Alphabatical order:",placeToVisit.slice().sort().reverse());
