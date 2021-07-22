function cutdown(i) {
    console.log(i);
    if (i <= 0) {
        return;
    } else {
        cutdown(i - 1);
    }
};

cutdown(100);