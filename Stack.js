class Stack {
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    push(value) {
        this._storage[this._length] = value;
        this._length++;
    }

    pop() {
        if (this._length) {
            const lastValue = this._storage[this._length - 1];
            delete this._storage[this._length - 1];
            this._length--;
            return lastValue;
        }
    }

    peek() {
        if (this._length) {
            return this._storage[this._length -1]
        }
    }
}