let num: any = 123;

let employeeCode = <number> num;

console.log(typeof(employeeCode)) // it outputs a number.


// type assertions with objects

interface Employee {
    name: string;
    code: number;

}


let employeee = <Employee> {}

employeee.name = 'John'
employeee.code = 567

console.log(employeee
    )



    let newCode : any = 123;

    let newEmployeeCode = newCode as number 

    console.log(typeof(newEmployeeCode))