let btn = document.getElementById("btn");
let hex = document.getElementById("hexCode");

btn.addEventListener("click", () => {
    document.body.style.backgroundColor = randomColour();
    hex.innerHTML = randomColour();
});

function randomColour() {
    let temp = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += temp[Math.floor(Math.random() * 16)];
    }
    return color;
}