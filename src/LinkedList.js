const LinkedNode = require('./LinkedNode');

function LinkedList() {
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.addElmAtstart = function (value) {
    let tempNode = new LinkedNode(value);

    tempNode.next = this.root;
    this.root = tempNode;
    this.size += 1;
}

LinkedList.prototype.init = function (array) {
    for (let i= 0; i < array.length; i++) {
        this.addElmAtstart(array[i]);
    }
}

LinkedList.prototype.toArray = function () {
    let arr = [];
    let tempNode = this.root;

    while(tempNode) {
        arr.push(tempNode.value);
        tempNode = tempNode.next;
    }

    return arr;
}

LinkedList.prototype.toString = function () {
    let string = '[ ';
    let tempNode = this.root;

    while(tempNode) {
        string += (tempNode.value) + ', ';
        tempNode = tempNode.next;
    }

    string += ']';
    return string;
}

LinkedList.prototype.clearFirst = function() {
    let tempNode = this.root.next;
    const firstElm = this.root.value;
    this.root = tempNode;

    return firstElm;
}

LinkedList.prototype.clearEnd = function() {
    let tempNode = new LinkedNode();
    let nextTN = tempNode.next;

    while(tempNode) {
        nextTN = null;
        tempNode = tempNode.next
    }
}

// const test = new LinkedList();
// test.init([9, 8, 5]);
// let b = test.clearEnd();
// let c = test.toArray();
// console.log(b);
// console.log(c);
