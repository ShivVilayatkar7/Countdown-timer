let countdownInterval;

function myFunction() {
    const userInput = new Date(document.getElementById("dateInput").value);
    const now = new Date();
    const difference = userInput - now;

    if (difference < 0) {
        alert("Please enter a future date.");
        return;
    }

    startTimer(difference);
}

function startTimer(timeDifference) {
    countdownInterval = setInterval(() => {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = formatTime(days);
        document.getElementById("hours").textContent = formatTime(hours);
        document.getElementById("minutes").textContent = formatTime(minutes);
        document.getElementById("seconds").textContent = formatTime(seconds);

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
        }

        timeDifference -= 1000;
    }, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function stop() {
    clearInterval(countdownInterval);
}

function reset() {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
}
