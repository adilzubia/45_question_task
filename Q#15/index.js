"use strict";
// Q # 15
// Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
let guestList = ["Arsalan", "Rohan", "Alisha"];
// print the name who is not invited for the dinner.
let unableAttend = guestList.splice(0, 1)[0];
console.log(`${unableAttend} not invited for dinner`);
// push
guestList.push("Taha");
// print a message
guestList.forEach(guest => {
    console.log(`Dear ${guest},you are invited to dinner.`);
});
