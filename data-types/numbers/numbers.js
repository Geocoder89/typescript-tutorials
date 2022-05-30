"use strict";
let first = 123; // number 
let second = 0x37CF; // hexadecimal
let third = 0o377; // octal
let fourth = 0b111001; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57 
console.log(first.toExponential(1));
let myNumber = 10.8788;
console.log(myNumber.toFixed()); // returns 11
console.log(myNumber.toFixed(1)); //returns 10.9
console.log(myNumber.toFixed(2)); //returns 10.88
console.log(myNumber.toFixed(3)); //returns 10.879
console.log(myNumber.toFixed(4)); //returns 10.8788
let myNumLocale = 10667.987;
console.log(myNumLocale.toLocaleString());
console.log(myNumLocale.toLocaleString('de-DE'));
console.log(myNumLocale.toLocaleString('ar-EG'));
let myNumPrecision = 10.5679;
console.log(myNumPrecision.toPrecision());
console.log(myNumPrecision.toPrecision(1));
console.log(myNumPrecision.toPrecision(2));
console.log(myNumPrecision.toPrecision(3));
console.log(typeof (myNumPrecision.toPrecision(1)));
console.log(myNumPrecision.toPrecision(4));
let myNumberToString = 123;
console.log(myNumberToString.toString());
console.log(myNumberToString.toString(2));
