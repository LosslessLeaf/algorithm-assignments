const titleCase = (str) => {
    let finalString = "";
    let newStr = str.toLowerCase().split(" ");
    console.log(finalString);
    for (let i = 0; i < newStr.length; i++) {
        if (i == newStr.length - 1) {
            finalString += newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
        }
        else {
            finalString += newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1) + " ";
        }
    }
    console.log(finalString);
    return finalString;
};

titleCase("I'm a little tea pot");