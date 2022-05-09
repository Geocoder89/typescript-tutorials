var str1 = 'Hello Typescript';
console.log(str1.charAt(0));
console.log(str1.charAt(2));
///////////////////////////////////////
// CONCAT
///////////////////////////////////////
var string1 = 'Hello Typescript';
var string2 = 'it is going nice';
var concatenatedString = string1.concat(' ', string2);
console.log(concatenatedString);
///////////////////////////////////////
// INDEX OF
///////////////////////////////////////
var stringIndex = 'Typescript';
console.log(stringIndex.indexOf('T'));
console.log(stringIndex.indexOf('p'));
console.log(stringIndex.indexOf('t'));
console.log(stringIndex.indexOf('e'));
///////////////////////////////////////
// REPLACE
///////////////////////////////////////
var strReplace1 = 'Hello Javascript';
var strReplace2 = 'Typescript';
console.log(strReplace1.replace('Java', 'Type'));
console.log(strReplace1.replace('Javascript', strReplace2));
///////////////////////////////////////
// SPLIT
///////////////////////////////////////
var str1Split = 'Apple, Banana, Orange';
var str2Split = ',';
console.log(str1Split.split(str2Split));
console.log(str1Split.split(str2Split, 2));
console.log(str1Split.split(str2Split, 1));
///////////////////////////////////////
// TOUPPERCASE
///////////////////////////////////////
var strUppercase = 'Hello Typescript';
console.log(strUppercase.toUpperCase());
///////////////////////////////////////
// TOLOWERCASE
///////////////////////////////////////
var strToLowercase = 'HELLO TYPESCRIPT';
console.log(strToLowercase.toLowerCase());

const helloWorld = ()=> ("hello","hi")

console.log(helloWorld())