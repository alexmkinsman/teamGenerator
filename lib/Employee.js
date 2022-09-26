class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
    
}

const employeeOne = new Employee("alex", 1, "akinsman825@gmail.com");
console.log(employeeOne.getName()) //returns alex

module.exports = Employee;