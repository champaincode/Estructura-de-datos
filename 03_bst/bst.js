function BinarySearchTree(value) {
  this.value = value; //valor incicial 20
  this.left = null; // equivale al previous
  this.right = null; // equivale al next
  this.length = 1;
}
BinarySearchTree.prototype.insert = function (value) {
//SOLUCION REFACTORIZADA 
    direccion = value < this.value ? "left" : "right"
    this[direccion] ? this[direccion].insert(value) : this[direccion] = new BinarySearchTree(value);
    this.length++;

//FORMA SIN REFACTORIZAR 
    // if (value < this.value ){
    //     direccion = "left"
        
    // }else{
    //     direccion= "right"
    // }


    

    // if (this[direccion]) {
    //     this[direccion].insert(value)

    // } else {
    //     this[direccion] = new BinarySearchTree(value);
    // }
    //   if (value < this.value) {
//     // si es menor
//     nuevoArbol = new BinarySearchTree(value);
//     this.left = nuevoArbol;
//   }

//   if (value > this.value) {
//     //si es mayor
//     nuevoArbol = new BinarySearchTree(value);
//     this.rigth = nuevoArbol;
//   }

  
};

BinarySearchTree.prototype.contains = function (x) {
   
  if (x === this.value) {
    return true;
  } else if (x < this.value && this.left) {
    return this.left.contains(x);
  } else if (x > this.value && this.right) {
    return this.right.contains(x);
  } else {
    return false;
  }
    
};
BinarySearchTree.prototype.depthFirstForEach = function (fn,str="in-order") {
  if(str =="in-order"){
    if(this.left){
      this.left.depthFirstForEach(fn)
    }
    fn(this.value)
    if (this.right) {
      this.right.depthFirstForEach(fn)
    }
     }
    if(str =="pre-order"){
       
      fn(this.value)
      if(this.left){
        this.left.depthFirstForEach(fn,str)
      }
     
      if (this.right) {
        this.right.depthFirstForEach(fn,str)
      }
    }
    if(str =="post-order"){
       
      if(this.left){
        this.left.depthFirstForEach(fn,str)
      }
      if (this.right) {
        this.right.depthFirstForEach(fn,str)
      }
    
      fn(this.value)
    }
}

var queue = []

BinarySearchTree.prototype.breadthFirstForEach = function (fn) {
  //proceso
    fn(this.value) 
  //izquierda 
    if(this.left) queue.push(this.left)
  //derecha
    if(this.right) queue.push(this.right)

     var primerElementoDeQueue = queue.shift()

    if(primerElementoDeQueue){
      primerElementoDeQueue.breadthFirstForEach(fn)
    }

  }





  // if (this.left) {
  //   fn(this.value)
  //   this.left.breadthFirstForEach(fn)
    
  // }
  // if (this.right) {
  //   fn(this.value)
  //   this.right.breadthFirstForEach(fn)
  // }
  

BinarySearchTree.prototype.size = function () {
  return this.length;
};


