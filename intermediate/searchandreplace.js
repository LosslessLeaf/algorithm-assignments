function myReplace(str, before, after) {

    if (before.charAt(0) === before.charAt(0).toUpperCase() && after.charAt(0) !== after.charAt(0).toUpperCase()) {
        var afterFL = after.charAt(0).toUpperCase();
        console.log(afterFL);
    } else {
        afterFL = after.charAt(0);
    }
    
    var afterArr = after.split("").splice(1, after.length).join("");
    
    after = afterFL + afterArr;
    str = str.replace(before, after);
    
    console.log(str);


    return str;
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("His name is Tom", "Tom", "john");
// myReplace("Let us get back to more Coding", "Coding", "algorithms");
