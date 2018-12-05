function sumFibs(num) {
    var fibs = [];
    var firstFib = 1;
    var middleFib = 1;
    var trailingFib = 0;
    
    var oddFibs = [];
    for (let i = 0; i < num; i++) {
        if(i === 0 || i === 1) {
            fibs.push(firstFib);
        } else {
            trailingFib = firstFib + middleFib;
            
            firstFib = middleFib;
            middleFib = trailingFib;
            
            fibs.push(trailingFib);
        }

    }
    
    console.log(fibs);
    
    for(let i = 0; i <= fibs.length; i++) {
        if((fibs[i] === 1 || fibs[i] % 2 !== 0) && fibs[i] <= num) {
            oddFibs.push(fibs[i]);
        }
    }
    
    console.log(oddFibs);
    
    var sum = 0;
    
    for(let i = 0; i < oddFibs.length; i++) {
        sum += oddFibs[i];
    }
    
    console.log(sum);
    return sum;
}

sumFibs(10);





// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
