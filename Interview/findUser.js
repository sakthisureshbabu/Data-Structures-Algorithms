// Check that user with such name exists in array of Objects

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true
    },
    {
        id: 2,
        name: "John",
        isActive: true
    },
    {
        id: 3,
        name: "Mike",
        isActive: false
    }
];

const isNameExists = (users, name) => users.some(user => user.name === name);
const findName = (users, name) => users.find(user => user.name === name);
console.log(isNameExists(users, "Mike"));
console.log(findName(users, "Will") ? true : false);