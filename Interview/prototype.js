// Design the same classes by using only JavaScript prototypes

var Employee = function(id, name) {
    if(!id || !name) {
        throw new Error("Employee id and name are mandatory");
    }

    this.id = id;
    this.name = name;
}

Employee.prototype.getId = function() {
    return this.id;
}

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.setSalary = function(salary) {
    this.salary = salary;
}

Employee.prototype.getSalary = function() {
    return this.salary;
}

var Manager = function(params) {
    Employee.apply(this, arguments);
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype = setDepartment = function(name) {
    this.department = name;
}

Manager.prototype.getDepartment = function() {
    return this.getDepartment;
}

const employee = new Employee(1, "Jack");
employee.setSalary(20000);
console.log(employee.getSalary());
console.log(employee.getId(),' ',employee.getName());

const manager = new Manager(2, "John");