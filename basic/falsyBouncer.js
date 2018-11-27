function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
    return arr;
}

bouncer([7, "ate", "", false, 9]);