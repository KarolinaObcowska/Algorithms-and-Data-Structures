class Queue {
    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }

    enqueue(value) {
        const lastIndex = this._length + this._headIndex;
        this._storage[lastIndex] = value;
        this._length++;
    }

    dequeue() {
        if (this._length) {
            const firstValue = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._length--;
            this._headIndex++;
            return firstValue;
        }
    }

    peek() {
        if (this._length) {
            const firstValue = this._storage[this._headIndex];
            return firstValue;
        }
    }
}