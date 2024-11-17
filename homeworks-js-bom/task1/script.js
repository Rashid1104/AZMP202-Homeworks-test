function startCountdown() {
    const hoursInput = document.getElementById('hours').value;
    const minutesInput = document.getElementById('minutes').value;
    const secondsInput = document.getElementById('seconds').value;

    let hours = parseInt(hoursInput) || 0;
    let minutes = parseInt(minutesInput) || 0;
    let seconds = parseInt(secondsInput) || 0;

    // Validation
    if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        alert("Zəhmət olmasa düzgün dəyərlər daxil edin!");
        return;
    }

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    if (totalSeconds === 0) {
        alert("Geri sayım üçün bir vaxt daxil edin!");
        return;
    }

    const countdownElement = document.getElementById('countdown');
    const startButton = document.getElementById('startButton');
    const alarmSound = document.getElementById('alarmSound');
    const celebrationGif = document.getElementById('celebration');

    startButton.disabled = true;

    const interval = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(interval);
            countdownElement.textContent = "Zaman bitdi!";
            alarmSound.play();
            celebrationGif.style.display = 'block';
            startButton.disabled = false;
            return;
        }

        totalSeconds--;
        const displayHours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const displayMinutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const displaySeconds = String(totalSeconds % 60).padStart(2, '0');

        countdownElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
    }, 1000);
}
