// Transform flat list to nested list

const flatList = [
    {
        id: 1,
        name: "lvl 1 item 1",
        parentId: null
    },
    {
        id: 2,
        name: "lvl 1 item 2",
        parentId: null
    },
    {
        id: 3,
        name: "lvl 2 item 3",
        parentId: 1
    },
    {
        id: 4,
        name: "lvl 3 item 4",
        parentId: 3
    },
    {
        id: 5,
        name: "lvl 2 item 5",
        parentId: 2
    }
];

/*
TODO:
1. Get root elements
2. Check children if they have children
3. If not -> return item with empty children
4. If yes -> go to #2
*/

const addChildren = item => {
    const children = flatList.filter(childItem => childItem.parentId === item.id);
    
    let nestedChildren = [];

    if(children.length > 0) {
        nestedChildren = children.map(child => addChildren(child));
    }

    return Object.assign({}, item, { children: nestedChildren });
};

const nestedList = flatList.filter(item => item.parentId === null).map(addChildren);
console.log(nestedList);