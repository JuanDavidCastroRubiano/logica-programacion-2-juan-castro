const celsiusInput = document.getElementById('celsiusInput');
const convertButton = document.getElementById('convertButton');
const errorMessageDiv = document.getElementById('errorMessage');
const resultsDiv = document.getElementById('results');

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function isValidNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

convertButton.addEventListener('click', () => {

    errorMessageDiv.textContent = '';
    resultsDiv.textContent = '';

    const inputCelsius = celsiusInput.value;

    if (inputCelsius.trim() === '') {
        errorMessageDiv.textContent = 'Por favor, ingresa un valor.';
        return; 
    }

    if (!isValidNumber(inputCelsius)) {
        errorMessageDiv.textContent = 'Error: Debes ingresar un valor numérico válido.';
        celsiusInput.value = ''; 
        return; 
    }

    const temperaturaCelsius = parseFloat(inputCelsius);

    // 2. Realizar las conversiones
    const temperaturaKelvin = celsiusToKelvin(temperaturaCelsius);
    const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);

    resultsDiv.innerHTML = `
        <p><strong>Grados Kelvin:</strong> ${temperaturaKelvin.toFixed(2)}</p>
        <p><strong>Grados Fahrenheit:</strong> ${temperaturaFahrenheit.toFixed(2)}</p>
    `;

    console.log(`Entrada Celsius: ${temperaturaCelsius}`);
    console.log(`Grados Kelvin: ${temperaturaKelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);
});

