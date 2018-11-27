function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let spaceCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (num > arr[i]) {
            spaceCounter++;
        }
    }
    num = spaceCounter;
    return num;
}

getIndexToIns([40, 60], 50);