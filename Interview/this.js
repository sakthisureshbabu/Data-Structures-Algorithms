// What will be logged here?

// Task 1
function getItem() {
    console.log(this);
}

getItem();

// Task 2
const item = {
    title: "Ball",
    getItem() {
        console.log("this", this);
    }
}

item.getItem();

// Task 3
class Item {
    title = "Ball";
    getItem() {
        [1, 2, 3].map(item => {
            console.log(this);
        });
        // function somefn() {
        //     console.log("this", this);
        // }
        // somefn();
    };
}

const items = new Item();
items.getItem();