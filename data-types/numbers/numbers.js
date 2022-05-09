var first = 123; // number 
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57 
console.log(first.toExponential(1));
var myNumber = 10.8788;
console.log(myNumber.toFixed()); // returns 11
console.log(myNumber.toFixed(1)); //returns 10.9
console.log(myNumber.toFixed(2)); //returns 10.88
console.log(myNumber.toFixed(3)); //returns 10.879
console.log(myNumber.toFixed(4)); //returns 10.8788
var myNumLocale = 10667.987;
console.log(myNumLocale.toLocaleString());
console.log(myNumLocale.toLocaleString('de-DE'));
console.log(myNumLocale.toLocaleString('ar-EG'));
var myNumPrecision = 10.5679;
console.log(myNumPrecision.toPrecision());
console.log(myNumPrecision.toPrecision(1));
console.log(myNumPrecision.toPrecision(2));
console.log(myNumPrecision.toPrecision(3));
console.log(typeof (myNumPrecision.toPrecision(1)));
console.log(myNumPrecision.toPrecision(4));
var myNumberToString = 123;
console.log(myNumberToString.toString());
console.log(myNumberToString.toString(2));
