
// Quotes
const quotes = [
    "“Books are a uniquely portable magic.” — Stephen King",
    "“A library is not a luxury but one of the necessities of life.” — Henry Ward Beecher",
    "“Reading is to the mind what exercise is to the body.” — Joseph Addison",
    "“When in doubt, go to the library.” — Hermione Granger"
];
document.getElementById('quoteBox').innerText = quotes[Math.floor(Math.random() * quotes.length)];

// Date
const today = new Date();
document.getElementById('todayDate').textContent = today.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// Time
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Menu Toggle
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-left').classList.toggle('active');
    document.querySelector('.nav-right').classList.remove('active');
});

document.querySelector('.user-btn').addEventListener('click', () => {
    document.querySelector('.nav-right').classList.toggle('active');
    document.querySelector('.nav-left').classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-left')) document.querySelector('.nav-left').classList.remove('active');
    if (!e.target.closest('.nav-right')) document.querySelector('.nav-right').classList.remove('active');
});

// Search Button
document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();
    const category = document.querySelector('.search-category').value.toLowerCase();
    const sort = document.querySelector('.search-sort').value.toLowerCase();

    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    if (category === "all categories" || sort === "sort by") {
        alert("⚡ Please select a Category and Sort type before searching!");
        return;
    }

    localStorage.setItem("search_query", query);
    localStorage.setItem("search_category", category);
    localStorage.setItem("search_sort", sort);

    if ((query === "fluid mechanics" || query === "fluid mechanic") && category === "books" && sort === "title") {
        window.location.href = "search_m.html";
    } else {
        window.location.href = "result.html";
    }
});

// Simulating overdue detection
const hasOverdue = true;  // Assume true for now. Later you can connect it dynamically.

if (hasOverdue) {
    document.getElementById('alertBox').style.display = 'block';
}
