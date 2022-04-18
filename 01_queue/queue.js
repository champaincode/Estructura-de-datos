function Queue() {
  this.head = 0;
  this.tail = 0;
  this.data = [];
  this.contador = 0;
}

Queue.prototype.enqueue = function (valor) {
  this.data[this.tail] = valor
  this.tail++;
}

Queue.prototype.dequeue = function () {
  if(!this.data[this.head]) return undefined;
  let value = this.data[this.head] 
  this.head++
  this.contador--;
  return value
}

//size es el ancho de la cola
Queue.prototype.size = function () { 
  return this.tail - this.head
}
