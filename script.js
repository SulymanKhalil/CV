// ===== Mobile Menu =====
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
  menuBtn.classList.toggle("active"); // burger → X
});

// ===== Contact Form =====
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      window.location.href = `mailto:you@example.com?subject=Portfolio Contact&body=Name: ${name}%0AEmail: ${email}%0A${message}`;
    } else {
      alert("⚠️ Please fill all fields before submitting!");
    }
  });
}

// ===== Top Bar Offset =====
function updateTopBarHeight() {
  const topBar = document.querySelector('.top-bar');
  const height = topBar ? topBar.offsetHeight : 0;
  document.documentElement.style.setProperty('--topbar-h', height + 'px');
}

window.addEventListener('load', updateTopBarHeight);
window.addEventListener('resize', updateTopBarHeight);

