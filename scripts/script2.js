// Function to multiply a number by 5 and display the result
function multiplication(myNumber) {
    console.log(myNumber * 5);
}

multiplication(3); // Run/execute the function

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Enter the Temperature in Celsius"));
    if (isNaN(celsius)) {
        console.log("Please enter a valid number.");
        return;
    }
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(`The temperature in Fahrenheit is ${fahrenheit.toFixed(2)}°F`);
}

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        console.log("Please enter a valid number.");
        return;
    }
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`The temperature in Celsius is ${celsius.toFixed(2)}°C`);
}

// Function to update the HTML with product details
function updateProductDetails(product, subtotal, total) {
    document.getElementById("products").innerHTML += `
        <p> Name: ${product} </p>
        <p> Subtotal: ${subtotal} </p>
        <p> Total: ${total} </p>
    `;
}