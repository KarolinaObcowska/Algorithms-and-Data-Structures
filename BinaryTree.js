class BinaryTree {
    constructor(question) {
        this.question = question;
        this.yes = null;
        this.no = null;
    }

    insert(question, side) {
        const newQuestion = new BinaryTree(question);
        this[side] = newQuestion;
        return newQuestion;
    }

    traverse(func) {
        func(this.question); 
        if (this.yes) this.yes.traverse(func);
        if (this.no) this.no.traverse(func)
    }

    contains(question) {
        if (this.question === question) {
            return true
        }

        return (this.yes && this.yes.contains(question) ? true : false)
            || (this.no && this.no.contains(question) ? ture: false)
    }
}