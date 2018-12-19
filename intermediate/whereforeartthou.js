function whatIsInAName(collection, source) {
    var arr = [];
    var checkerObj = Object.keys(source);

    for (let i = 0; i < collection.length; i++) {
        for (var sourceKey in source) {
            var sourceKeyValue = source[sourceKey];
        }
        for (var n in collection[i]) {
            var collectionKeyValue = collection[i][n];
            if (collectionKeyValue === sourceKeyValue) {
                var objToCheck = Object.keys(collection[i]);
                    console.log(n);
                    for (let j = 0; j < checkerObj.length; j++) {
                        if (checkerObj[j] === n) {
                            arr.push(collection[i]);
                    }
                }

            }
        }
        
        
        
        
        
        
    }
    console.log(arr);

    return arr;
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
