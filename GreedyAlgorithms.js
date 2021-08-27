// coin values :  5, 10, 25

// function makeChange(coins, amount) {
//     coins.sort((a,b) => b - a);

//     let totalCoins = 0;
//     let i = 0;

//     while (amount > 0) {
//         if (coins[i] <= amount) {
//             amount = amount - coins[i];
//             totalCoins++;
//         } else {
//             i++
//         }
//     }
//     return totalCoins;
// }

const coins = [10, 6, 1];
function makeChange2(value) {
    if (value === 0) return 0;

    let minCoins;
    coins.forEach(coin => {
        if (value - coin >= 0) {
            let currentMinCoins = makeChange2(value - coin);
            if(minCoins === undefined || currentMinCoins < minCoins) {
                minCoins = currentMinCoins;
            }
        }
    });
    return minCoins + 1;
}

console.log(makeChange2(12))
