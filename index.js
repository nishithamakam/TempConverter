const convertBtn = document.getElementById('convertBtn');
const temperatureInput = document.getElementById('temperatureInput');
const inputScale = document.getElementById('inputScale');
const outputScale = document.getElementById('outputScale');
const resultElement = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  if (isNaN(temperature)) {
    resultElement.textContent = 'Invalid input';
    return;
  }

  const inputUnit = inputScale.value;
  const outputUnit = outputScale.value;
  
  const convertedTemperature = convertTemperature(temperature, inputUnit, outputUnit);
  resultElement.textContent = `${temperature.toFixed(2)} ${inputUnit} is ${convertedTemperature.toFixed(2)} ${outputUnit}`;
});

function convertTemperature(value, inputUnit, outputUnit) {
  if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
    return (value * 9/5) + 32;
  } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
    return (value - 32) * 5/9;
  } else {
    return value; // Same scale
  }
}
