// CONVERT TO CELSIUS

function convertToF(celsius) {
  let fahrenheit;

  if (celsius !== "undefined") {
     fahrenheit = (celsius * (9/5) + 32);
  }
  return fahrenheit;
}

convertToF(30);



