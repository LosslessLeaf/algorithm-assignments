const test1 = [1, 2, 3, 1, 3, 5];
const test2 = [6, 9, 5, 4, 2, 1, 5, 9, 8];
const test3 = [2, 4, 6, 8, 2, 4, 6, 7];



function returnFirstDupe(arr) {
    let unique = new Set();
    let priorSize = 0;

    for (let i = 0; i < arr.length; i++) {
        priorSize = unique.size;
        unique.add(arr[i]);
        if (unique.size  === priorSize) {
            console.log(arr[i]);
            return arr[i];
        } else {
            priorSize++;
        }
    }
}

function containsDuplicates(test1) {
    let unique = new Set();
    let priorSize = 0;
    
    for (let i = 0; i < arr.length; i++) {
        priorSize = unique.size;
        unique.add(arr[i]);
    }
    
}

returnFirstDupe(test2);