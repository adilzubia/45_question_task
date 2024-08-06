"use strict";
// Q # 16
let guestList = ["Rohan", "Alisha", "Taha"];
console.log("Great News! we found a bigger table");
// unshift()
guestList.unshift("Dua");
// splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "Ahmed");
// push
guestList.push("Ali");
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
