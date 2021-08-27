function swap(array, i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}


function bubbleSort(array) {
    let counterOuter,
        counterInner,
        counterSwap = 0;

        for(let i = 0; i< array.length; i++) {
            counterOuter++;
            for(let j = 1; j < array.length; j++) {
                counterInner++;
                if(array[j-1] > array[j]) {
                    counterSwap++;
                    swap(array, j - 1, j)
                }
            }
        }
        return array;
}


console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))