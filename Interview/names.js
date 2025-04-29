// 1. Write code to get array of names from given array of users
const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
        age: 31
    },
    {
        id: 2,
        name: "John",
        isActive: true,
        age: 27
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
        age: 30
    }
]

const names = users.map(user => user.name);
console.log(names);

//2. Get back only active users
const activeUsers = users.filter(user => user.isActive === true).map(user => user.name);
console.log(activeUsers);

//3. Sort users by age in descending
const sortUsers = users
    .sort((user1, user2) => user1.age > user2.age ? -1 : 1)
    .filter(user => user.isActive)
    .map(user => user.name);
console.log(sortUsers);