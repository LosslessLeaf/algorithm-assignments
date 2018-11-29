// function whatIsInAName(collection, source) {



// for (let i = 0; i < collection.length; i++) {
//     console.log("Running", i);
//     for (let i = 0; i < sourceObjKeys.length; i++) {
//         checkerKey = sourceObjKeys[i];
//         console.log(checkerKey);
//     }



//     // for (var sourceKey in source) {
//     //     console.log("in sourceKey loop");
//     //     var sourceKeyValue = source[sourceKey];
//     // }
//     // for (var n in collection[i]) {
//     //     console.log("in collectionKey loop");
//     //     var collectionKeyValue = collection[i][n];


//     //     console.log(sourceKeyValue);
//     //     console.log(collectionKeyValue);
//     // }


//     // for (var n in collection[i]) {
//     //     var collectionKeyValue = collection[i][n];
//     //     if (collectionKeyValue === sourceKeyValue) {
//     //         var objToCheck = Object.keys(collection[i]);
//     //             console.log(n);
//     //             for (let j = 0; j < checkerObj.length; j++) {
//     //                 if (checkerObj[j] === n) {
//     //                     arr.push(collection[i]);
//     //             }
//     //         }

//     //     }
//     // }

// }

//     return arr;
// }

// function whatIsInAName(collection, source) {
//     var arr = [];
//     var checkerObj = Object.keys(source);
//     for (let i = 0; i < collection.length; i++) {

//         for (var sourceKey in source) {
//             var sourceKeyValue = source[sourceKey];
//         }
//         for (var n in collection[i]) {
//             var collectionKeyValue = collection[i][n];
//             if (collectionKeyValue === sourceKeyValue) {

//                 var objToCheck = Object.keys(collection[i]);
//                 for (let i = 0; i < checkerObj.length; i++) {

//                     for (let j = 0; j < objToCheck.length; j++) {
//                         if (checkerObj[j] === objToCheck[j]) {
//                             arr.push(collection[i]);
//                         }

//                     }
//                 }


//             }
//         }
//     }
//     console.log(arr);

//     return arr;
// }

function whatIsInAName(collection, source) {
    var arr = [];
    var matched = 0;
    var sourceProperties = Object.keys(source);
    for (let i = 0; i < collection.length; i++) {

        var collectionIndexProps = Object.keys(collection[i]);
        for (let j = 0; j < collectionIndexProps.length; j++) {
            for (let k = 0; k < sourceProperties.length; k++) {
                if (collection[i].hasOwnProperty(sourceProperties[j])) {
                    matched++;
                }
            }
            if (matched === sourceProperties.length || matched >= sourceProperties.length) {
                arr.push(collection[i]);
            }
        }

    }





    console.log(arr);




    return arr;
}

// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
