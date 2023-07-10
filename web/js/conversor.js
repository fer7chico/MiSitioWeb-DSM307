function convertTemperature() {
    const value = parseFloat(document.getElementById("temp-value").value);
    const fromScale = document.getElementById("temp-from").value;
    const toScale = document.getElementById("temp-to").value;

    let result = "";

    switch (fromScale) {
        case "centigrados":
            if (toScale === "fahrenheit") {
                result = `Fahrenheit: ${((value * 9/5) + 32).toFixed(2)} °F`;
            } else if (toScale === "kelvin") {
                result = `Kelvin: ${(value + 273.15).toFixed(2)} K`;
            }
            break;
        case "fahrenheit":
            if (toScale === "centigrados") {
                result = `Centigrados: ${((value - 32) * 5/9).toFixed(2)} °C`;
            } else if (toScale === "kelvin") {
                result = `Kelvin: ${(((value - 32) * 5/9) + 273.15).toFixed(2)} K`;
            }
            break;
        case "kelvin":
            if (toScale === "centigrados") {
                result = `Centigrados: ${(value - 273.15).toFixed(2)} °C`;
            } else if (toScale === "fahrenheit") {
                result = `Fahrenheit: ${(((value - 273.15) * 9/5) + 32).toFixed(2)} °F`;
            }
            break;
    }

    document.getElementById("temp-total").textContent = result;
}


function convertLength() {
  const value = parseFloat(document.getElementById("length-value").value);
  const fromUnit = document.getElementById("length-from").value;
  const toUnit = document.getElementById("length-to").value;

  let result = "";

  switch (fromUnit) {
    case "centimetros":
      switch (toUnit) {
        case "centimetros":
          result = value;
          break;
        case "pulgadas":
          result = (value / 2.54).toFixed(2);
          break;
        case "pies":
          result = (value / 30.48).toFixed(2);
          break;
        case "yardas":
          result = (value / 91.44).toFixed(2);
          break;
        case "millas":
          result = (value / 160934.4).toFixed(2);
          break;
      }
      break;
    case "pulgadas":
      switch (toUnit) {
        case "centimetros":
          result = (value * 2.54).toFixed(2);
          break;
        case "pulgadas":
          result = value;
          break;
        case "pies":
          result = (value / 12).toFixed(2);
          break;
        case "yardas":
          result = (value / 36).toFixed(2);
          break;
        case "millas":
          result = (value / 63360).toFixed(2);
          break;
      }
      break;
    case "pies":
      switch (toUnit) {
        case "centimetros":
          result = (value * 30.48).toFixed(2);
          break;
        case "pulgadas":
          result = (value * 12).toFixed(2);
          break;
        case "pies":
          result = value;
          break;
        case "yardas":
          result = (value / 3).toFixed(2);
          break;
        case "millas":
          result = (value / 5280).toFixed(2);
          break;
      }
      break;
    case "yardas":
      switch (toUnit) {
        case "centimetros":
          result = (value * 91.44).toFixed(2);
          break;
        case "pulgadas":
          result = (value * 36).toFixed(2);
          break;
        case "pies":
          result = (value * 3).toFixed(2);
          break;
        case "yardas":
          result = value;
          break;
        case "millas":
          result = (value / 1760).toFixed(2);
          break;
      }
      break;
    case "millas":
      switch (toUnit) {
        case "centimetros":
          result = (value * 160934.4).toFixed(2);
          break;
        case "pulgadas":
          result = (value * 63360).toFixed(2);
          break;
        case "pies":
          result = (value * 5280).toFixed(2);
          break;
        case "yardas":
          result = (value * 1760).toFixed(2);
          break;
        case "millas":
          result = value;
          break;
      }
      break;
  }

  document.getElementById("length-total").textContent = result;
}


function convertCurrency() {
    const value = parseFloat(document.getElementById("currency-value").value);
    const fromCurrency = document.getElementById("currency-from").value;
    const toCurrency = document.getElementById("currency-to").value;

    const rates = {
        mxn: 1,
        usd: 24.04,
        cad: 17.24,
        eur: 26.2,
        gbp: 30.05,
        clp: 0.028,
        uyu: 0.56,
        inr: 0.32,
        jpy: 0.22,
        pln: 5.78
    };

    const result = value * rates[fromCurrency] / rates[toCurrency];

    document.getElementById("currency-total").textContent = `${value} ${fromCurrency.toUpperCase()} = ${result.toFixed(2)} ${toCurrency.toUpperCase()}`;
}



