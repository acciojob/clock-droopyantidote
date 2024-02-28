// Get the <p> element with id="timer"
const timerElement = document.getElementById('timer');

// Function to update the timer
function updateTimer() {
    // Create a new Date object to get the current date and time
    const now = new Date();

    // Format the time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Format the date as YYYY-MM-DD
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    // Construct the string to display in the timer
    const timerString = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    // Update the text content of the <p> element with the timer string
    timerElement.textContent = timerString;
}

// Update the timer initially when the page loads
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);
