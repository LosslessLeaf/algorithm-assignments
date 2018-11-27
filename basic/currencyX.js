// Create a program called currencyX.js
// Program is gonna ask 3 questions:
// How much money do you have?(in dollars and cents);
// (What currency are you converting from? -- NEXT WEEK)
// What type of currency do you want to convert to? (LIST)

// Convert the currency. Tell the user how much money they have in the converted currency.

// When the types of currencies are displayed, display the currencies from an object.

const readline = require("readline-sync");


let conversionRates = {
    AUD: 1.40,
    GBP: 0.76,
    EUR: 0.86,
    JPY: 112.18,
    CHF: 0.99,
    AFN: 75.96,
    ALL: 108.45,
    DZD: 118.33,
    AOA: 301.42
};


let userMoney = readline.question(`How much money do you have? `);
console.log(`You have $${userMoney}.`);


let chooseCurrency = readline.question(`Choose a currency to convert to [AUD, GBP, EUR, JPY, CHF, AFN, ALL, DZD, AOA]: `);


Object.keys(conversionRates).forEach(function(key) {
    let value = conversionRates[key];
    
    let convertCurrency = value * userMoney;
    
    
    if (chooseCurrency == key) {
        console.log(`USD to ${key}: ${convertCurrency}`);
    }
    return;

});

