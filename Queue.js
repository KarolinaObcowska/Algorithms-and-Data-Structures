class Queue {
    constructor() {
        this.queue = [];
    };

    getLength() {
        return this.queue.length;
    };

    addItem(item) {
        return this.queue.push(item);
    };

    removeItem() {
        return this.queue.shift();
    };

    takeItem() {
        return this.queue[0];
    };

    isEmpty() {
        return this.length === 0;
    };
}