const times5 = (n) => {n * 5};

const cache = {};

const memoTimes5 = (n) => {
    if (n in cache) {
        console.log(`Fetching from cache ${n}`);
        return cache[n];
    } else {
        console.log('Calculating result');
        let result = times5(n);
        cache[n] = result;
        return result;
    }
};

console.log(memoTimes5(10));
console.log(memoTimes5(10));
console.log(memoTimes5(20));
