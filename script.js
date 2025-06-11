
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
    "Hi, I'm Raj Chintawar!",
    "Engineering Student",
    "Web Developer | Problem Solver | Tech Enthusiast"
  ],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});

