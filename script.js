// Typing effect script

const words = [" Strength", " Courage", " Compassion"]; // Words to type one by one
const animatedTextElement = document.getElementById("dynamicText");
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        animatedTextElement.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, 150); // Delay between each character
    } else {
        // Once the word is fully typed, clear it after a short delay
        setTimeout(() => {
            animatedTextElement.innerHTML = ""; 
            charIndex = 0;
            wordIndex = (wordIndex + 1) % words.length; // Move to the next word and loop back
            setTimeout(typeWord, 500); // Start typing the next word
        }, 1000); // Delay before clearing the word
    }
}

// Start the typing effect
typeWord();



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



