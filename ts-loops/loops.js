"use strict";
/*
Typescript supports the following loops


for loop

for of loop

for in loop


*/
/*

1) for loop...this is used to execute a block of code a given number of times which is specified by a condition

//  syntax

for(first expression; second expression; third expression) {
    // statements to be executed repeatedly.
}
*/
for (let i = 0; i < 3; i++) {
    console.log(`Block statement execution number ${i}`);
}
/*
//  for of loop

typescript includes the for of loop to iterate and access elements of an array,list or tuple collection. the for of loop returns element from a collection eg array,list or tuple and so there is no need to use the traditional for loop as shown above
 */
let loopArr = [10, 20, 30, 50];
for (let val of loopArr) {
    console.log(val);
}
let loopStr = 'Hello world';
for (let char of loopStr) {
    console.log(`character is ${char}`);
}
/*

for in loop

another form of the for loop is the for in loop,this can be used in an array,list or tuple. the for in loop iterates through a list or collection and returns an index on each iteration
*/
let loopArray2 = [10, 30, 40, 59];
for (let index in loopArray2) {
    console.log(index);
    console.log( ////////////////////////////////////////////////////////////
    );
    console.log(loopArray2[index]);
}
