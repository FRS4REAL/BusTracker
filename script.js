const counterDisplay = document.getElementById("counter");
const lastTimeDisplay = document.getElementById("last-time");
const timePassedDisplay = document.getElementById("time-passed");
const actionBtn = document.getElementById("action-btn");
const resetBtn = document.getElementById("reset-btn");

let count = parseInt(localStorage.getItem("bustCounter")) || 0;
let lastTime = parseInt(localStorage.getItem("lastBustTime")) || null;

// Display current values on load
counterDisplay.textContent = count;
if (lastTime) {
    lastTimeDisplay.textContent = new Date(lastTime).toLocaleString();
} else {
    lastTimeDisplay.textContent = "N/A";
}

// Update the "time passed" every second
setInterval(() => {
    if (lastTime) {
        const seconds = Math.floor((Date.now() - lastTime) / 1000);
        timePassedDisplay.textContent = seconds;
    } else {
        timePassedDisplay.textContent = "N/A";
    }
}, 1000);

// When you click the sin button
actionBtn.addEventListener("click", () => {
    count++;
    lastTime = Date.now();
    localStorage.setItem("bustCounter", count);
    localStorage.setItem("lastBustTime", lastTime);

    counterDisplay.textContent = count;
    lastTimeDisplay.textContent = new Date(lastTime).toLocaleString();
});

// Reset button nukes it all
resetBtn.addEventListener("click", () => {
    count = 0;
    lastTime = null;
    localStorage.removeItem("bustCounter");
    localStorage.removeItem("lastBustTime");

    counterDisplay.textContent = 0;
    lastTimeDisplay.textContent = "N/A";
    timePassedDisplay.textContent = "N/A";
});
