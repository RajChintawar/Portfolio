
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section, h1, h2");
    const navLinks = document.querySelectorAll("nav ul li a");

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

var typed = new Typed("#typed", {
  strings: [
    "Hi, I'm Raj Chintawar !",
    "Engineering Student",
    "MERN-Stack Dev| Problem Solving| Tech Enthu|",
      "Java| C++| Python|",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  loop: true
});


const profileContainer = document.getElementById("profileContainer");
const profileCard = document.getElementById("profileCard");

// Mobile tap support (no double tap)
profileContainer.addEventListener("touchstart", () => {
  profileCard.classList.toggle("flipped");
});

// Optional: also allow click fallback
profileContainer.addEventListener("click", () => {
  profileCard.classList.toggle("flipped");
});








const toggleBtn = document.getElementById("theme-toggle");

// Determine stored preference (light by default)
const storedTheme = localStorage.getItem("theme");
const prefersDark = storedTheme === "dark";

// Apply theme on load
if (prefersDark) {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️";
} else {
    document.body.classList.remove("dark-mode");
    toggleBtn.textContent = "🌙";
}

// Toggle on button click
toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    toggleBtn.textContent = isDark ? "☀️" : "🌙";
});





const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
