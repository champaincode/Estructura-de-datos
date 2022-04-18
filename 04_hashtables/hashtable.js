function HashTable() {
    this.numBuckets = 35;
    this.buckets = []
}

HashTable.prototype.set = function(key,valor){
    if (typeof key != 'string') throw new TypeError("Keys must be strings")
    let keyHasheada = this.hash(key)
    if (this.buckets[keyHasheada]){
        this.buckets[keyHasheada].addToHead({key:key,valor:valor})
    }else{
        let nuevaLista = new LinkedList()
        nuevaLista.addToHead({key:key,valor:valor})
        this.buckets[keyHasheada]=nuevaLista
    }
}

HashTable.prototype.get = function(key){
    let keyHasheada = this.hash(key)
    if (this.buckets[keyHasheada]) return this.buckets[keyHasheada].search(e=>e.key==key).valor

}

HashTable.prototype.hasKey = function(key){
    let keyHasheada = this.hash(key)
    let elemento = this.buckets[keyHasheada].search(e=>e.key==key)
    return elemento ? true : false
}

HashTable.prototype.hash = function(key){
    // let ac = 0
    // for (let i = 0; i < key.length; i++) {
    //     ac += key[i].charCodeAt()
        
    // }
    // return ac % this.numBuckets
    return (key.split("").map(e=>e.charCodeAt()).reduce((el1,el2)=>el1+el2))%this.numBuckets
}