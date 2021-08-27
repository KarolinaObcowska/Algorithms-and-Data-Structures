class HashTable{
    constructor(value) {
        this._storage = {};
        this._tableSize = value;
        this._inpitSize = 0;
    }

    insert(key, value) {
        const index = this._hash(key, this._tableSize);

        if(!this._storage[index]) {
            this._storage[index] = [];
        }
        this._storage[index].push([key, value])
    }

    retrieve(key) {
        const index = this._hash(key, this._tableSize);
        const arrayAtIndex = this._storage[index];
    
        if (arrayAtIndex) {
          for (let i = 0; i < arrayAtIndex.length; i++) {
            const keyValueArray = arrayAtIndex[i];
            if (keyValueArray[0] === key) return keyValueArray[1];
          }
        }
    
    }  

    _hash(str, n) {
        let sum = 0;
        for (let i = 0; i < str.length; i++)
            sum += str.charCodeAt(i) * 3
    
        return sum % n;
    }
    
}