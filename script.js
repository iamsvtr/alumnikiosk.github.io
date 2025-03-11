let inactivityTimer;

function resetTimer() {
    clearTimeout(inactivityTimer);
    document.getElementById("main-content").style.display = "grid";
    document.getElementById("carouselExample").style.display = "none";
    inactivityTimer = setTimeout(() => {
        document.getElementById("main-content").style.display = "none";
        document.getElementById("carouselExample").style.display = "block";
        new bootstrap.Carousel(document.querySelector('#carouselExample'), {interval: 5000, ride: 'carousel'});
    }, 8000);
}

document.addEventListener("mousemove", resetTimer);
document.addEventListener("keydown", resetTimer);
resetTimer();
