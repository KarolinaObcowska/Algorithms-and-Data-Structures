function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let tempEl = array[minIndex];
            array[minIndex] = array[i];
            array[i] = tempEl
        }
    }
    return array
}

const list = [45, 23, 65, 12, 76, 8, 2];
console.log(selectionSort(list));