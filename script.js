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
// Radio
window.onload = function() {
    typeText();
};


window.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    const radioToggle = document.getElementById('radioToggle');
    const radioIconContainer = document.querySelector('.radio-icon');

    // Auto-play music when the page loads
    audio.play();

    // Toggle music on/off when radio icon is clicked
    radioToggle.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            radioIconContainer.classList.remove('paused'); // Remove grayscale when playing
            radioToggle.title = "Click to stop music";
        } else {
            audio.pause();
            radioIconContainer.classList.add('paused'); // Add grayscale when paused
            radioToggle.title = "Click to play music";
        }
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const radioIcon = document.querySelector('.radio-icon');

// Toggle the menu visibility on clicking the three-dot menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    radioIcon.classList.toggle('active');
});



