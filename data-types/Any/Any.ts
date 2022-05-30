/* 
TypeScript has type-checking and compile-time checks. However, we do not always have prior knowledge about the type of some variables, especially when there are user-entered values from third party libraries. In such cases, we need a provision that can deal with dynamic content. The Any type comes in handy here.
*/


let something: any = 'Hello world'
something = 23;

something = true


// similarly you can create an array of type any[] if you are uncertain about the type of values that are contained in this array.

let arr: any[] = ['John',200, true]
arr.push('Smith')

console.log(arr)  //Output: [ 'John', 212, true, 'Smith' ] 