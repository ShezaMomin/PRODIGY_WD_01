// Select the navbar
const navbar = document.getElementById("navbar");

// Add scroll event listener for changing navbar style dynamically
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Add hover animations for menu items (optional custom logic)
const navItems = document.querySelectorAll(".nav-item a");

navItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.fontWeight = "bold";
    item.style.transform = "scale(1.1)";
    item.style.transition = "transform 0.2s ease, font-weight 0.2s ease";
  });

  item.addEventListener("mouseout", () => {
    item.style.fontWeight = "normal";
    item.style.transform = "scale(1)";
  });
});
