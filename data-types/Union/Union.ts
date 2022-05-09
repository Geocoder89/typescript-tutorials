/* 

Union types is a data type in typescript that enables use more than one data type for a variable or a function parameter

syntax goes as thus:

(type1 | type2 | type3 | .. | typeN)

*/

let code:(string | number)

code = 123;
code = 'ABC'
// code = false....this will throw an error on compilation from the ide because a boolean type is not assignable to a variable of type either string or number.

function displayTypeCode(code:(string | number)) {
    if(typeof(code) === 'string') {
        console.log('Code is a string')
    } else if(typeof(code) === 'number'){
        console.log('Code is a number')
    }
}


displayTypeCode(123); // Output: Code is number.
displayTypeCode("ABC"); // Output: Code is string.
// displayTypeCode(true)   // Compiler error since it only expects string and numbers as types.