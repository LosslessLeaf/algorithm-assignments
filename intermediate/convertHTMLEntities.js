function convertHTML(str) {
    // &colon;&rpar;
    str = str.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    console.log(str);

    return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Schindler's List");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML('Stuff in "quotation marks"');
convertHTML("Sixty > twelve");
convertHTML("<>");
convertHTML("abc");
