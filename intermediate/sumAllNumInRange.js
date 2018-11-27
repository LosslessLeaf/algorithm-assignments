function sumAll(arr) {
    arr.sort(function(a, b) { return a - b });
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    for (let j = arr[0]+1; j < arr[1]; j++) {
        sum += j;
    }
    console.log(sum);
    return sum;
}

sumAll([1, 4]);