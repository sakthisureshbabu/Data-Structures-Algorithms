// Design a class for employee which takes id and name in during construction of object and has a salary property

class Employee {
    constructor(id, name) {
        if(!id || !name) {
            throw new Error('Employee Id and name are mandatory');
        }
        this.id = id;
        this.name = name;
    }

    setSalary(salary) {
        this.salary = salary;
    }

    getId() { return this.id }

    getName() { return this.name }

    getSalary() { return this.salary; }
}

class Manager extends Employee {
    setDepartment(name) {
        this.department = name;
    }

    getDepartment() {
        return this.department;
    }
}

const employee = new Employee(24, "Smith");
employee.setSalary(35000);
console.log(employee.getName())
console.log(employee.getSalary());
console.log(employee.getId());
