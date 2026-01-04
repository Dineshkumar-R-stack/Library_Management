
function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('datetime').textContent = time;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// New Arrivals data
const results = [
    { title: "Quantum Computing Basics", author: "Michael Nielsen", year: 2023, edition: "2nd Edition", Section: "Computer Science" },
    { title: "Data Analytics with Python", author: "Wes McKinney", year: 2022, edition: "1st Edition", Section: "Data Science" },
    { title: "Advanced Machine Learning", author: "Peter Flach", year: 2021, edition: "3rd Edition", Section: "Artificial Intelligence" },
    { title: "Artificial Intelligence", author: "Stuart Russell", year: 2020, edition: "4th Edition", Section: "Computer Science" }
];

const resultsContainer = document.getElementById("results");
results.forEach(item => {
    const div = document.createElement("div");
    div.className = "result-card";
    div.innerHTML = `
		<div class="result-title">${item.title}</div>
		<div class="result-meta">
		  <p><strong>Author:</strong> ${item.author}</p>
		  <p><strong>Year:</strong> ${item.year}</p>
		  <p><strong>Edition:</strong> ${item.edition}</p>
		  <p><strong>Section:</strong> ${item.Section}</p>
		</div>
	  `;
    resultsContainer.appendChild(div);
});

function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('datetime').textContent = `${time}`;
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
