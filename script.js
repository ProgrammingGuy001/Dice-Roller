function rollDice() {
    // Retrieve input value
    const no_of_roles = parseInt(document.getElementById("input").value, 10);
    const value = document.getElementById("value");
    const picture = document.getElementById("picture");

    // Arrays to store dice values and image elements
    const values = [];
    const images = [];

    // Loop to generate dice rolls
    for (let i = 0; i < no_of_roles; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1; // Random value between 1 and 6
        values.push(diceValue); // Add value to the array
        images.push(`<img src="pic/${diceValue}.png" alt="Dice ${diceValue}">`); // Add corresponding image
    }

    // Update the value div with dice values
    value.textContent = `Dice Values: ${values.join(", ")}`;

    // Update the picture div with dice images
    picture.innerHTML = images.join(""); // Join image strings and insert into the picture div
}
