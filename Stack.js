class Stack {
    constructor() {
        this.stack = [];
    };

    getLength() {
        return this.stack.length;
    };

    addItem(item) {
        return this.stack.push(item);
    };

    getItemTop() {
        return this.stack.pop();
    };

    getItemBottom() {
        return this.stack[this.length - 1];
    };

    isEmpty() {
        return this.length === 0;
    }
}