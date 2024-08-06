"use strict";
//  Q # 3
//  Name Cases: Store a person’s name in a variable, and then print that person’s name in 
//  lowercase, uppercase, and titlecase.
let nameCases = "arsalan";
console.log("UpperCase:", nameCases.toUpperCase());
console.log("LowerCase:", nameCases.toLowerCase());
console.log("TitleCase:", nameCases.replace(/\b\w/g, c => c.toUpperCase()));
