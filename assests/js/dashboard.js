
document.querySelector('.search-btn').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.trim();
    const category = document.querySelector('.search-category').value;
    const sort = document.querySelector('.search-sort').value;

    if (!query) {
        alert("Please enter a search term.");
        return;
    }

    const params = new URLSearchParams({
        q: query,
        category,
        sort
    });

    window.location.href = `result.html?${params.toString()}`;
});

const quotes = [
    "Books are a uniquely portable magic — Stephen King",
    "A library is not a luxury but one of the necessities of life — Henry Ward Beecher",
    "Reading is to the mind what exercise is to the body — Joseph Addison",
    "When in doubt, go to the library — Hermione"
];
document.getElementById('quoteBox').innerText =
    quotes[Math.floor(Math.random() * quotes.length)];

const today = new Date();
document.getElementById('todayDate').textContent =
    today.toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    document.getElementById('datetime').textContent = time;
}
setInterval(updateDateTime, 1000);
updateDateTime();

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