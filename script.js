function rollDice() {
    const no_of_roles = parseInt(document.getElementById("input").value, 10);
    const value = document.getElementById("value");
    const picture = document.getElementById("picture");
    const values = [];
    const images = [];
    for (let i = 0; i < no_of_roles; i++) {
        const diceValue = Math.floor(Math.random() * 6) + 1; 
        values.push(diceValue); 
        images.push(`<img src="pic/${diceValue}.png" alt="Dice ${diceValue}">`); 
    }
    value.textContent = `Dice Values: ${values.join(", ")}`;
    picture.innerHTML = images.join("");
}
