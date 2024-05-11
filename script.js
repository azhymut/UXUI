const pages = [
    "Texto da página 1 do Dom Quixote...",
    "Texto da página 2 do Dom Quixote...",
    "Texto da página 3 do Dom Quixote...",
    "Texto da página 4 do Dom Quixote...",
    "Texto da página 5 do Dom Quixote..."
];
let currentPage = 0;

function changePage(step) {
    currentPage += step;
    if (currentPage < 0) {
        currentPage = 0;
    } else if (currentPage > pages.length - 1) {
        currentPage = pages.length - 1;
    }
    document.getElementById("text-content").innerText = pages[currentPage];
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains("dark-mode")) {
        body.classList.replace("dark-mode", "light-mode");
    } else {
        body.classList.replace("light-mode", "dark-mode");
    }
}

window.onload = function() {
    document.getElementById("text-content").innerText = pages[currentPage];
}
