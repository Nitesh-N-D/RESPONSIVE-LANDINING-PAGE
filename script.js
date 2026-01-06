
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
});


const themeSwitch = document.getElementById("themeSwitch");

themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
