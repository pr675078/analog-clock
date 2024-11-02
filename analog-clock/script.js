function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondHand = document.getElementById('second');
    const minuteHand = document.getElementById('minute');
    const hourHand = document.getElementById('hour');

    const secondDegrees = ((seconds / 60) * 360) + 90; // Add 90 to offset the rotation
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = rotate('${secondDegrees}deg');
    minuteHand.style.transform = rotate('${minuteDegrees}deg');
    hourHand.style.transform = rotate('${hourDegrees}deg');
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock position
updateClock();