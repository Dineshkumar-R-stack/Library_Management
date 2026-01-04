
// Time Updater
function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('datetime').textContent = time;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Book Data
const currentIssued = [
    { title: "AI Ethics", author: "John Smith", issueDate: "Apr 20, 2025", dueDate: "May 5, 2025" },
    { title: "Neural Networks", author: "James Brown", issueDate: "Apr 22, 2025", dueDate: "May 7, 2025" }
];

const overdueBooks = [
    { title: "Machine Learning Essentials", author: "Andrew Ng", issueDate: "Apr 1, 2025", dueDate: "Apr 20, 2025" }
];

const previousReturned = [
    { title: "Python Crash Course", author: "Eric Matthes", issueDate: "Mar 5, 2025", returnDate: "Mar 25, 2025" },
    { title: "Deep Learning with PyTorch", author: "Ian Goodfellow", issueDate: "Mar 15, 2025", returnDate: "Apr 1, 2025" },
    { title: "Introduction to AI", author: "Stuart Russell", issueDate: "Mar 20, 2025", returnDate: "Apr 10, 2025" }
];

// Rendering Sections
const currentContainer = document.getElementById("current-results");
currentIssued.forEach(book => {
    const div = document.createElement("div");
    div.className = "result-card";
    div.innerHTML = `
    <div class="result-title">${book.title}</div>
    <div class="result-meta">
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Issue Date:</strong> ${book.issueDate}</p>
      <p><strong>Due Date:</strong> ${book.dueDate}</p>
      <p><strong>Status:</strong> Issued</p>
    </div>
  `;
    currentContainer.appendChild(div);
});

const overdueContainer = document.getElementById("overdue-results");
overdueBooks.forEach(book => {
    const div = document.createElement("div");
    div.className = "result-card overdue";
    div.innerHTML = `
    <div class="result-title">${book.title}</div>
    <div class="result-meta">
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Issue Date:</strong> ${book.issueDate}</p>
      <p><strong>Due Date:</strong> ${book.dueDate}</p>
      <p><strong>Status:</strong> <span style="color:red; font-weight:bold;">⚠️ Overdue</span></p>
    </div>
  `;
    overdueContainer.appendChild(div);
});

const returnedContainer = document.getElementById("returned-results");
previousReturned.forEach(book => {
    const div = document.createElement("div");
    div.className = "result-card";
    div.innerHTML = `
    <div class="result-title">${book.title}</div>
    <div class="result-meta">
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Issue Date:</strong> ${book.issueDate}</p>
      <p><strong>Return Date:</strong> ${book.returnDate}</p>
      <p><strong>Status:</strong> Returned</p>
    </div>
  `;
    returnedContainer.appendChild(div);
});

// Dropdown Handling
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
