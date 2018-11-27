function destroyer(arr) {
    // Remove all the values
    let newArr = [];
    
    // for (let i = 1; i < arguments.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arguments[i] == arr[j]) {
    //             console.log(arguments[i] + "=" + arr[j]);
    //             newArr = arr.splice(j, 1);
    //         }
    //     }
    // }
    
    for (let i = 1; i < arguments.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            while (arguments[i] == arr[j]) {
                newArr = arr.splice(j, 1);
            }
        }
    }
    
    
    
    console.log(arr);

    return arr;
}

destroyer([2, 3, 2, 3], 2, 3);