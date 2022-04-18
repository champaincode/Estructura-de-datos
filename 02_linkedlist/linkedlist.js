function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(valor) {
  this.value = valor;
  this.next = null;
  this.previous = null;
}

LinkedList.prototype.addToTail = function (valor) {
    // se crea nuevo nodo 
  let newTail = new Node(valor);
  newTail.previous = this.tail
  newTail.next = null
  if (this.tail) {
    this.tail.next = newTail
  }else{ // agregamos el primer elemento a la ll
    this.head = newTail
  }
  this.tail = newTail
};
LinkedList.prototype.addToHead = function (valor) {
  let newHead = new Node(valor);
  newHead.previous = null
  newHead.next = this.head
   if (this.head) {
    this.head.previous = newHead;
     }
     else{ // agregamos el primer elemento a la ll
      this.tail = newHead 
      
  }
  this.head = newHead
 
};
LinkedList.prototype.removeTail = function () {
  if(!this.tail)return;
  let oldValue = this.tail.value;
  this.tail = this.tail.previous;
  if (this.tail) {
    this.tail.next = null
    
  }else{
    this.head = null
  }
  return oldValue
};
LinkedList.prototype.removeHead = function () {
if(!this.head) return undefined 
let oldValue = this.head.value
this.head = this.head.next
if (this.head) {
  this.head.previous = null
}else{
  this.tail = null
}

return oldValue
  
    
    
};
LinkedList.prototype.search = function (value) {
  if (typeof value === "function") {
    let currentNode = this.head;
  while (currentNode) {
    if(value(currentNode.value)){
       return currentNode.value
    }else{
      currentNode = currentNode.next;
    }
    
  }
  return null
  }
  let currentNode = this.head;
  while (currentNode) {
    if(currentNode.value === value){
       return value
    }else{
      currentNode = currentNode.next;
    }
    
  }
  return null
};

