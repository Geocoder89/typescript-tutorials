// an array is a special data type which can store multiple values of different data types sequentially using a special syntax 
// Typescript supports arrays similarly to Javascript and there are two ways to declare an array
//  1. Using square brackets similar to how you declare arrays in Javascript
var fruits = ['Apple', 'Orange', 'Banana'];
console.log("These are the first fruits ".concat(fruits));
// 2. using a generic array type Array<elementType>
var fruits2 = ['Apple', 'Orange', 'Banana'];
console.log("These are the second fruits ".concat(fruits2));
// Arrays can contain elements of any data type,numbers,strings and even Objects and they can be declared and initialized separately.
var fruits3;
fruits3 = ['Guava', 'mangos', 'grapes'];
// an array can also contain elements of different data types using a generic array syntax as shown below
var values1 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log('first values', values1);
var values2 = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
console.log('second values', values2);
//  Accessing array elements
/*
The array elements can be accessed using the index of an element e.g. ArrayName[index]. The array index starts from zero, so the index of the first element is zero, the index of the second element is one and so on.
*/
var fruits4 = ['Apple', 'Orange', 'Banana'];
console.log(fruits4[0]);
console.log(fruits4[1]);
console.log(fruits4[2]);
console.log(fruits4[3]); // this will return undefined as there is no third index on the array above.
// to loop through array elements
fruits4.forEach(function (fruit) {
    console.log("I am a fruit, ".concat(fruit));
});
//  typescript array methods
/*

pop() - Removes the last element of the array and return that element

push() - 	Adds new elements to the array and returns the new array length

sort() -   	Sorts all the elements of the array

concat()	Joins two arrays and returns the combined result

indexOf()	Returns the index of the first match of a value in the array (-1 if not found)

copyWithin()	Copies a sequence of elements within the array

fill()	Fills the array with a static value from the provided start index to the end index

shift()	Removes and returns the first element of the array

splice()	Adds or removes elements from the array

unshift()	Adds one or more elements to the beginning of the array

includes()	Checks whether the array contains a certain element

join()	Joins all elements of the array into a string

lastIndexOf()	Returns the last index of an element in the array

slice()	Extracts a section of the array and returns the new array

toString()	Returns a string representation of the array

toLocaleString()	Returns a localized string representing the array


length() - returns the length of an array (the number of array elements).

*/
var cars = ["Saab", "Volvo", "BMW"];
console.log("This is the length ".concat(cars.length));
// to access the first and last elements in an array
console.log("This is the first element ".concat(cars[0]));
console.log("This is the last element ".concat(cars[cars.length - 1]));
// to sort an array
console.log("These are the cars sorted ".concat(cars.sort()));
//  adding an array element 
console.log("Adding Merecedes to the end of the cars array ".concat(cars.push('Mercedes')));
console.log(cars);
// creating a string from an array is achieved using the join() method
var carString = cars.join(', ');
console.log("This is the car array in form of string ".concat(carString));
// Find the index of an item in an array
/*
this is done using the array.prototype.indexOf method
*/
console.log(cars.indexOf('Mercedes'));
// there are two ways to check if an array contains certain items
/*

we can check if the car array contains a certain item,in this case subaru via the indexOf method which brings a -1 (false) value if that item does not exist or the includes() method which brings back false
*/
console.log(cars.includes('Mercedes')); //should bring back true
console.log(cars.includes('subaru')); //should bring back false
console.log(cars.indexOf('Mercedes') !== -1); // should bring back true
console.log(cars.indexOf('subaru') !== -1); // should bring back false
