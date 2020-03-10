const LinkedNode = require('./LinkedNode');

function LinkedList() {
    this.root = null;
    this.size = 0;
}

LinkedList.prototype.addElmAtStart = function (value) {
    let tempNode = new LinkedNode(value);

    tempNode.next = this.root;
    this.root = tempNode;
    this.size += 1;

    return tempNode;
}

LinkedList.prototype.init = function (array) {
    for (let i= 0; i < array.length; i++) {
        this.addElmAtStart(array[i]);
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

LinkedList.prototype.deleteFirst = function() {
    let tempNode = this.root.next;
    const firstElm = this.root.value;
    this.root = tempNode;

    return firstElm;
}

LinkedList.prototype.clearAll = function() {
    this.root = null;
    this.size = 0;

}

LinkedList.prototype.addElmEnd = function(value) {
    let tempNode = new LinkedNode(value);
    let currentNode = this.root;
    
    while (currentNode.next) {
    currentNode = currentNode.next;
    }
    currentNode.next = tempNode;
    this.size += 1;
}

LinkedList.prototype.removeEndElm = function () { 
    let currentNode = this.root;
    let removeNode = this.root.next;

   if (!currentNode) return null;
   if (!currentNode.next) {
       currentNode = null;
       return currentNode;
   }
   if (!removeNode) {
       currentNode = this.root.next;
   }

   while(removeNode.next !== null) {
       currentNode = removeNode;
       removeNode = removeNode.next;
   }
   currentNode.next = removeNode.next;
   this.size -= 1;

   return removeNode.next;
}

LinkedList.prototype.getListSize = function() {
    return this.size;
}


let test = new LinkedList();
test.init([]); 
let b = test.addElmAtStart(4);
let c = test.getListSize();
console.log(b);
console.log(c);

