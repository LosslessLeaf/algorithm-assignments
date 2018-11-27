const findElement = (arr, func) => {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            console.log(num);
            return num;
        }
    }
    return undefined;
};

findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
findElement([1, 2, 3, 4], num => num % 2 === 0);