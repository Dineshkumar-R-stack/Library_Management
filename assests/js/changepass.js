
function updateDateTime() {
    const now = new Date();
    document.getElementById('datetime').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
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

function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value.trim();
    const newPassword = document.getElementById('newPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const message = document.getElementById('message');

    if (currentPassword !== '127003081') {
        message.style.color = 'red';
        message.textContent = "⚡ Current Password is wrong.";
        return;
    }

    if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
        message.style.color = 'red';
        message.textContent = "⚡ Please fill in all the fields.";
        return;
    }

    if (newPassword === '' || confirmPassword === '') {
        message.style.color = 'red';
        message.textContent = "⚡ Please fill in both fields.";
        return;
    }

    if (newPassword.length <= 6 || newPassword.length > 15) {
        message.style.color = 'red';
        message.textContent = "❗ Password must be between 6 and 15 characters.";
        return;
    }

    if (newPassword !== confirmPassword) {
        message.style.color = 'red';
        message.textContent = "❗ Passwords do not match.";
        return;
    }

    // If everything is fine
    message.style.color = 'green';
    message.textContent = "✅ Password successfully changed!";
}
