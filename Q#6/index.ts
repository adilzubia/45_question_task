

// Q # 6 (STRIPPING NAMES)
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each
// character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let whiteSpace:string = "\n\t  Zubaida Adil  \t\n"
console.log(whiteSpace)
let withoutWhiteSpace = whiteSpace.trim()
console.log(withoutWhiteSpace)