function binary_search(array, item) {
    array.sort((function (a, b) { return a - b }));
    let min = 0;
    let max = array.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        if (array[guess] === item) {
            return guess
        } else {
            if (array[guess] < item) {
                min = guess + 1;
            } else {
                max = guess -1;
            }
        }
    }

    return -1;
};

const my_list = [11, 23, 45, 6546, 56, 1, 76, 123, 543, 665, 2463, 6566];

console.log(binary_search(my_list, 665));






