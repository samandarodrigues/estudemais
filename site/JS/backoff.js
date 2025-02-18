document.addEventListener("DOMContentLoaded", function() {
    let countdownElement = document.getElementById("countdown");
    let countdownValue = 30;

    const countdownInterval = setInterval(function() {
        countdownValue--;
        countdownElement.textContent = countdownValue;

        if (countdownValue <= 0) {
            clearInterval(countdownInterval);
            window.location.href = "index1.html"; 
        }
    }, 1000);
});
