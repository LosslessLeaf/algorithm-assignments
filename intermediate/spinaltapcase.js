// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//     var splitString = str.split("");
//     for(let i = 0; i < splitString.length; i++) {
//         if(splitString[i] === splitString[i].toUpperCase()) {
//             var wordStart = splitString[i];
//         }
//     }

//   return str.toLowerCase().split(" ").join("-");
// }

// spinalCase('This Is Spinal Tap');


function spinalCase(str) {

    // var newStr = str.toLowerCase().replace(/ /g, "-").replace(/[A-Z]/g);
    // console.log(newStr);
    var splitStr = str.split("");
    for (let i = 0; i < splitStr.length; i++) {
        
        if(splitStr[i] === splitStr[i].toUpperCase() && splitStr[i] !== " ") {
            splitStr.splice(i, 0, "-");
        }
        if(splitStr[i] === splitStr[i].toUpperCase() && splitStr[i] !== " ") {
            splitStr[i] = splitStr[i].toLowerCase();
        }
        if(splitStr[i] === " ") {
            splitStr[i] = "-";
        }
        
    }

    console.log(splitStr.join(""));


    return str;
}

spinalCase('This Is Spinal Tap');


// spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
// spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
// spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
// spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
// spinalCase("AllThe-small Things") should return "all-the-small-things".
