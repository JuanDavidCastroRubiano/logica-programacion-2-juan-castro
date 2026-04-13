const celsiusInput = document.getElementById('celsiusInput');
const convertButton = document.getElementById('convertButton');
const errorMessageDiv = document.getElementById('errorMessage');
const resultsDiv = document.getElementById('results');

// Función para convertir Celsius a Kelvin
function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

// Función para convertir Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para validar si una entrada es un número
function isValidNumber(input) {
    return !isNaN(parseFloat(input)) && isFinite(input);
}

// Event listener para el botón de convertir
convertButton.addEventListener('click', () => {
    // Limpiar mensajes anteriores
    errorMessageDiv.textContent = '';
    resultsDiv.textContent = '';

    const inputCelsius = celsiusInput.value;

    // 1. Validar la entrada
    if (inputCelsius.trim() === '') {
        errorMessageDiv.textContent = 'Por favor, ingresa un valor.';
        return; // Detiene la ejecución si está vacío
    }

    if (!isValidNumber(inputCelsius)) {
        errorMessageDiv.textContent = 'Error: Debes ingresar un valor numérico válido.';
        celsiusInput.value = ''; // Limpiar el input
        return; // Detiene la ejecución si no es un número
    }

    // Convertir la entrada a número flotante
    const temperaturaCelsius = parseFloat(inputCelsius);

    // 2. Realizar las conversiones
    const temperaturaKelvin = celsiusToKelvin(temperaturaCelsius);
    const temperaturaFahrenheit = celsiusToFahrenheit(temperaturaCelsius);

    // 3. Mostrar los resultados en el DOM
    resultsDiv.innerHTML = `
        <p><strong>Grados Kelvin:</strong> ${temperaturaKelvin.toFixed(2)}</p>
        <p><strong>Grados Fahrenheit:</strong> ${temperaturaFahrenheit.toFixed(2)}</p>
    `;

    // Opcional: Mostrar también por consola
    console.log(`Entrada Celsius: ${temperaturaCelsius}`);
    console.log(`Grados Kelvin: ${temperaturaKelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${temperaturaFahrenheit.toFixed(2)}`);
});

