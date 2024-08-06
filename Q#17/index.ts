

// Q # 17

let guestList: string[] = ["Dua","Rohan","Ahmed","Alisha","Taha","Ali"];
// print message
console.log("Unfortunately! the new dinner table won't arrive so we can invite only two guest.");

// Remove guest from the list
while(guestList.length > 2) {
    let removedGuest : string | undefined = guestList.pop();
    if(removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you.`);
    }
}

// print a message to each of the two people still on your list,
// letting them know they're still invited.
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for the dinner.`);
})