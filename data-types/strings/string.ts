
let str1: string = 'Hello Typescript'

console.log(str1.charAt(0))
console.log(str1.charAt(2))


///////////////////////////////////////

// CONCAT
///////////////////////////////////////


let string1: string = 'Hello Typescript';
let string2: string = 'it is going nice'

let concatenatedString = string1.concat(' ',string2)

console.log(concatenatedString)

///////////////////////////////////////

// INDEX OF
///////////////////////////////////////
let stringIndex: string = 'Typescript';

console.log(stringIndex.indexOf('T'))
console.log(stringIndex.indexOf('p'))
console.log(stringIndex.indexOf('t'))
console.log(stringIndex.indexOf('e'))

///////////////////////////////////////

// REPLACE
///////////////////////////////////////


let strReplace1: string = 'Hello Javascript';
let strReplace2: string = 'Typescript';


console.log(strReplace1.replace('Java','Type'))


console.log(strReplace1.replace('Javascript',strReplace2))



///////////////////////////////////////

// SPLIT
///////////////////////////////////////


let str1Split: string = 'Apple, Banana, Orange';
let str2Split: string = ',';


console.log(str1Split.split(str2Split))
console.log(str1Split.split(str2Split,2))
console.log(str1Split.split(str2Split,1))



///////////////////////////////////////

// TOUPPERCASE
///////////////////////////////////////
let strUppercase: string = 'Hello Typescript';


console.log(strUppercase.toUpperCase())



///////////////////////////////////////

// TOLOWERCASE
///////////////////////////////////////

let strToLowercase = 'HELLO TYPESCRIPT'

console.log(strToLowercase.toLowerCase())