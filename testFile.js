function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let array = [1, 2, 3];
    array.splice(n, 0, arr1);
    console.log(array);
}

frankenSplice([1, 2, 3], [4, 5], 1);
