// boolean values are both supported by javascript and typescript and stored as true/false values
////////////////////////////
// TYPESCRIPT BOOLEAN
/////////////////////////////
// note that the Boolean in uppercase is different from the boolean in lowercase,the booleaan in uppercase is an object type while the lowercase is a primitive type.
// it is recommended to use the primitive type of boolean in your code because while Javascript coerces and object to its primitive type,Typescript does not,it treats it like an object type
// so instead of using for example function checkExistence(b: boolean),use the lowercase function checkExistence(b: boolean)
// example of boolean definitions
var isPresent = true;
console.log(isPresent);
