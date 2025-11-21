// Level order traversing
import { Node } from './Node.js';

function levelOrderRec(root, level, res) {
    if(root === null)
        return;

    if(res.length <= level)
        res.push([]);

    res[level].push(root.data);
    levelOrderRec(root.left, level+1, res);
    levelOrderRec(root.right, level+1, res);
}

function levelOrder(root) {
    const res = [];
    levelOrderRec(root, 0, res);
    return res;
}

const root = new Node(5);
root.left = new Node(12);
root.right = new Node(13);

root.left.left = new Node(7);
root.left.right = new Node(14);

root.right.right = new Node(2);

root.left.left.left = new Node(17);
root.left.left.right = new Node(23);

root.left.right.left = new Node(27);
root.left.right.right = new Node(3);

root.right.right.left = new Node(8);
root.right.right.right = new Node(11);


const res = levelOrder(root);
for(const level of res) {
    console.log(level.join(' '));
}