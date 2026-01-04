
const form = document.getElementById("loginForm");
const regNoInput = document.getElementById("regNo");
const passwordInput = document.getElementById("password");
const captchaInput = document.getElementById("captchaInput");
const errorElement = document.getElementById("error");
const btnText = document.getElementById("btn-text");
const btnSpinner = document.getElementById("btn-spinner");

let captchaCode = "";

function drawCaptcha() {
    const canvas = document.getElementById("captchaCanvas");
    const ctx = canvas.getContext("2d");
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    captchaCode = "";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1f150b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 5; i++) {
        captchaCode += chars[Math.floor(Math.random() * chars.length)];
    }

    ctx.font = "22px Georgia";
    ctx.fillStyle = "#fde68a";
    ctx.setTransform(1, 0, 0, 1, 10, 28);
    for (let i = 0; i < 5; i++) {
        const letter = captchaCode[i];
        const x = i * 22;
        const y = Math.random() * 4;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((Math.random() - 0.5) * 0.4);
        ctx.fillText(letter, 0, 0);
        ctx.restore();
    }

    for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = "#555";
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
}

drawCaptcha();
document.getElementById("captchaCanvas").addEventListener("click", drawCaptcha);

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const regNo = regNoInput.value.trim();
    const password = passwordInput.value.trim();
    const enteredCaptcha = captchaInput.value.trim().toUpperCase();
    const regNoPattern = /^12\d{7}$/;

    errorElement.textContent = "";

    if (!regNoPattern.test(regNo) || !regNoPattern.test(password)) {
        errorElement.textContent = "Invalid Registration Number or Password";
        return;
    }

    if (enteredCaptcha !== captchaCode) {
        errorElement.textContent = "Incorrect CAPTCHA code.";
        drawCaptcha();
        return;
    }

    btnText.style.display = "none";
    btnSpinner.style.display = "inline";

    setTimeout(() => {
        btnText.style.display = "inline";
        btnSpinner.style.display = "none";

        if (regNo === "127003081" && password === "127003081") {
            localStorage.setItem("regno", regNo);
            localStorage.setItem("name", "Hamdhan Ahmed S");
            localStorage.setItem("dept", "Computer Science");
            localStorage.setItem("designation", "Student");
            localStorage.setItem("valid_until", "Jun 2027");
            window.location.href = "mainpage_m.html";
        } else {
            errorElement.textContent = "Invalid registration number or password.";
        }
    }, 1500);
});

function togglePassword() {
    const pwd = document.getElementById("password");
    pwd.type = pwd.type === "password" ? "text" : "password";
}

const hour = new Date().getHours();
const greet = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
document.getElementById("greeting").innerText = `${greet}, SASTRA student!`;
