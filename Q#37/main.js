"use strict";
function make_shirt(size = "Large", printMessage = "I love typescripts") {
    console.log(`Creating a ${size} shirt with the ${printMessage} print on shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love Jawascript");
