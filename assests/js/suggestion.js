
function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('datetime').textContent = `${time}`;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Form Alert
document.getElementById('suggestionForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ Thank you for your valuable suggestion!');
    this.reset();
});

// Dropdown toggles
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
