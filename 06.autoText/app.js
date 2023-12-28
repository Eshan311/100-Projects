let typed_text = document.querySelector(".typed-text");
let words = ["awesome", "nice", "cool", "confusing"];
let index = 0;
let charIndex = 0;

let typingDelay = 200;
let erasingDelay = 200;
let newLetterDelay = 2000;

document.addEventListener("DOMContentLoaded", () => {
    if (words.length) {
        setTimeout(type, newLetterDelay);
    }
});

function type() {
    if (charIndex < words[index].length) {
        typed_text.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typed_text.textContent = words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        index++;
        if (index >= words.length) index = 0;
        setTimeout(type, typingDelay + 1100);
    }
}