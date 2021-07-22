const uniqSort = function(array) {
    const cache = {};
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (!cache[array[i]]) {
            result.push(array[i]);
            cache[array[i]] = true;
        }
    }

    return result.sort((a,b) => a - b)
};

console.log(uniqSort([1, 4, 4, 2, 1, 4, 3, 3, 2, 2, 1, 9 ]));
