"use strict";
// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// write an if-else chain.
Object.defineProperty(exports, "__esModule", { value: true });
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
// First Version:
let alien_color = "green";
if (alien_color === "green") {
    console.log("alien color is green, player just earned 5 point for shooting the alien");
}
else {
    console.log("alien color is not green , player earned 10 points");
}
// Second Version:
// let alien_color = "red";
// if(alien_color === "green"){
//     console.log("alien color is green, player just earned 5 point for shooting the alien");
// }else {
//     console.log("alien color is not green , player earned 10 points");
// }
