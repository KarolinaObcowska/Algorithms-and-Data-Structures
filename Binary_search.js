function binary_search(array, item) {
    array.sort((function (a, b) { return a - b }));
    let firstElement = 0;
    let lastElement = array.length - 1;
    console.log(array);
    while (firstElement <= lastElement) {
        let midElement = Math.floor((firstElement + lastElement) / 2);
        if (array[midElement] === item) {
            return midElement;
        } else if (array[midElement] < item) {
            firstElement = midElement + 1;
        } else {
            lastElement = midElement - 1;
        }
    }
    return null;
};

const my_list = [11, 23, 45, 6546, 56, 1, 76, 123, 543, 665, 2463, 6566,];

console.log(binary_search(my_list, 665));






