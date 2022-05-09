/*


// other data type presentations
var empId: number = 1;
var empName: string = "Steve";


but for tuples it can be written


var employee: [number,string]

*/
var employee = [1, "steve"];
/*

in the initial example we have set two variables of different types to indicate the empId a number and that of the empName which is a string,this can be easily achieved using the tuple syntax as seen above,which negates neeeding to declare two different variables, tuples can take in multiple data types as seen below


*/
var person = [1, 'Dele', true];
console.log(person);
/*
You can also declare an array of tuples as well
*/
var employeeArray;
employeeArray = [[1, "Steve"], [2, "Dele"], [3, "black"]];
console.log(employeeArray);
//  Accessing tuple elements
console.log(employeeArray[0]);
console.log(employee[0]);
// Like arrays you can add elements to a tuple using the push method
employee.push(2, 'Johnson');
console.log(employee);
//  we can also use array methods like concat to retrieve the index of an element in the tuple and perform an operation
employee[1] = employee[1].concat(' Jobs');
console.log(employee);
