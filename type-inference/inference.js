"use strict";
/*
TypeScript is a typed language. However, it is not mandatory to specify the type of a variable. TypeScript infers types of variables when there is no explicit information available in the form of type annotations.

Types are inferred by TypeScript compiler when:

Variables are initialized

Default values are set for parameters

Function return types are determined

For example,

*/
var a = 'some text';
var b = 123;
// a= b  // Compile error type number is not assignable to string.
var newArr = [0, 1, "test"];
newArr.push('str'); //accepted as this element is of the recognizable types seen in the array above which are either strings or numbers
// newArr.push(true)  // not accepted as this element(a boolean) is not of the recognizable types seen in the array above which are either strings or numbers
function sumNum(a, b) {
    return a + b;
}
var total = sumNum(10, 20);
//var str: string = sum(10,20) // error
