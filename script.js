// Change navbar style on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.querySelector('.btn').addEventListener('click', () => {
  alert("Thanks for clicking!");
});
