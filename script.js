// Typing effect script
const textToType = " Strength, Courage, and Compassion."; // Your subtext here
const subtextElement = document.getElementById("subtext");
let index = 0;

function typeText() {
    if (index < textToType.length) {
        subtextElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeText, 100); // Delay between each character
    }
}

window.onload = function() {
    typeText();
};
