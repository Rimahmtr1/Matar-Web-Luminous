// Smooth scroll active link highlighting

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 90; // header height approx
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Smooth scrolling for nav links (animated scroll)
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scroll({
        top: targetSection.offsetTop - 80, // offset for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Simple form submission handling with validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Thank you for your message! We'll get back to you soon.");
  this.reset();
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
// Preloader hide on window load with fadeout
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 0.6s ease';

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 600);
});
