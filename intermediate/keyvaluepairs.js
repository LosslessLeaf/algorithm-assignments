function whatIsInAName(collection, source) {
    var arr = [];


    console.log(Object.values(collection));
        
        
        

    for (let i = 0; i < collection.length; i++) {


        Object.keys(collection[i]).forEach(function(key) {
            if (collection[i][key] == source[key]) {
                console.log(collection[i][key]);
            }
        });
    }
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });

// whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
