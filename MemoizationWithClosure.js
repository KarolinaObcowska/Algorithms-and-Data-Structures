const memoize = (cb) => {
    let cache = {};
      return (n, ...args) => { //[9]
          if (n in cache) {
              console.log('Fetching from cache:', n);
              return cache[n];
          }
          else {
              console.log('Calculating result');
              let result = cb(n, ...args); // cb(9)
              cache[n] = result;
              return result;
          }
      };
  };
  
  // returned function from memoizedAdd
  const memoizedTimes10 = memoize(times10);
  // console.log('~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
  console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
  console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
  
  