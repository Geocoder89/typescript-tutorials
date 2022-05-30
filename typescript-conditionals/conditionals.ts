let x: number = 10, y = 20;

if(x < y) {
    console.log('x is less than y')
}




let x1: number = 10, y1 = 20;

if (x1 > y1) 
{
    console.log('x is greater than y.');
} 
else if (x1 < y1)
{
    console.log('x is less than y.'); //This will be executed
}
else if (x1 == y1) 
{
    console.log('x is equal to y');
}


// we can also use ternary operators for conditionals


let x2: number = 10, y2= 20


x2> y2? console.log('x2 is greater than y2'): console.log('x2 is less than y2')



// using switch and case statements

let day : number = 4;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}