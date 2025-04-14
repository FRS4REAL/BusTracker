let counter = 0;
let lastTime = null;
let timePassed = 0;
let timerInterval = null;

const counterDisplay = document.getElementById("counter");
const lastTimeDisplay = document.getElementById("last-time");
const timePassedDisplay = document.getElementById("time-passed");
const actionButton = document.getElementById("action-btn");
const resetButton = document.getElementById("reset-btn");

actionButton.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;

    if (lastTime !== null) {
        timePassed = Math.floor((Date.now() - lastTime) / 1000); // time in seconds
        timePassedDisplay.textContent = timePassed;
    } else {
        timePassedDisplay.textContent = 0;
    }

    lastTime = Date.now();
    lastTimeDisplay.textContent = new Date(lastTime).toLocaleTimeString();

    // Reset the timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimePassed, 1000);
});

resetButton.addEventListener("click", () => {
    counter = 0;
    lastTime = null;
    timePassed = 0;
    clearInterval(timerInterval);
    counterDisplay.textContent = counter;
    lastTimeDisplay.textContent = "N/A";
    timePassedDisplay.textContent = timePassed;
});

function updateTimePassed() {
    if (lastTime !== null) {
        timePassed = Math.floor((Date.now() - lastTime) / 1000);
        timePassedDisplay.textContent = timePassed;
    }
}
