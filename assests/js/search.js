
const query = localStorage.getItem("search_query") || "";
const category = localStorage.getItem("search_category") || "All";
const sort = localStorage.getItem("search_sort") || "Relevance";

document.getElementById("summary").textContent =
    `Showing results for "${query}" in ${category} sorted by ${sort}.`;

const results = [
    { title: "Fluid Mechanics", author: "Frank White", year: 2021, edition: "3rd ed", status: "Available", location: "2nd floor", Section: "Civil Engineering" },
    { title: "Introduction to Fluid Mechanics", author: "Fox & McDonald", year: 2020, edition: "2nd ed", status: "Available", location: "2nd floor", Section: "Civil Engineering" },
    { title: "Fundamentals of Fluid Mechanics", author: "Munson", year: 2019, edition: "3rd ed", status: "Reserved", location: "2nd floor", Section: "Civil Engineering" },
    { title: "Advanced Hydraulics", author: "K. Subramanya", year: 2018, edition: "1st ed", status: "Not Available", location: "1st floor", Section: "Civil Engineering" }
];

const resultsContainer = document.getElementById("results");

results.forEach(item => {
    const div = document.createElement("div");
    div.className = "result-card";

    // Choose color based on status
    let statusColor;
    if (item.status === "Available") {
        statusColor = "green";
    } else if (item.status === "Reserved") {
        statusColor = "orange";
    } else if (item.status === "Not Available") {
        statusColor = "red";
    } else {
        statusColor = "#4276ed";
    }

    div.innerHTML = `
      <div class="result-title">${item.title}</div>
      <div class="result-meta">
        <p><strong>Author:</strong> ${item.author}</p>
        <p><strong>Year:</strong> ${item.year}</p>
        <p><strong>Edition:</strong> ${item.edition}</p>
        <p style="font-weight: bold; color: ${statusColor};"><strong>Status:</strong> ${item.status}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Section:</strong> ${item.Section}</p>
      </div>
    `;
    resultsContainer.appendChild(div);
});

function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
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
