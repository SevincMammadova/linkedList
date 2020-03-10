function LinkedNode(value) {
    this.value = value;
    this.next = null;
}

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
    if (Array.isArray(array)){
        for (let i= 0; i < array.length; i++) {
            this.addElmEnd(array[i]);
        }  
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
    let string = '[';
    let tempNode = this.root;

    while(tempNode) {
        string += (tempNode.value) + ',';
        tempNode = tempNode.next;
    }

    string += ']';
    
    return string;
}

LinkedList.prototype.deleteFirst = function() {
    if (!this.root) return;
    
    let tempNode = this.root.next;
    const firstElm = this.root.value;

    this.root = tempNode;
    this.size--;

    return firstElm;
}

LinkedList.prototype.clearAll = function() {
    this.root = null;
    this.size = 0;

}

LinkedList.prototype.addElmEnd = function(value) {
    let tempNode = new LinkedNode(value);

    let currentNode = this.root;

    if (!this.root) {
        this.root = tempNode;
        this.size++;
        return this.size;
    }
    
    while (currentNode.next) {
    currentNode = currentNode.next;
    }
    currentNode.next = tempNode;
    this.size += 1;

    return this.size;
}

LinkedList.prototype.removeEndElm = function () {  //функция не совсем работоспособна,буду благодарна 
    let currentNode = this.root;                   //если укажете где может скрываться ошибка
    let removeNode = this.root.next;

    if (!this.root) return;
    if (!removeNode) {
       removeNode = null;
       currentNode = removeNode;
       return removeNode;
    }

    while(removeNode.next !== null) {
       currentNode = removeNode;
       removeNode = removeNode.next;
    }
   currentNode.next = removeNode.next;
   this.size -= 1;

   return removeNode;
}

LinkedList.prototype.getListSize = function() {
    return this.size;
}


let test = new LinkedList();
test.init([5,6]); 
let b = test.removeEndElm();
let c = test.toArray();
console.log(b);
console.log(c);

