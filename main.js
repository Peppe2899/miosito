// JavaScript per esempio di interattività
document.addEventListener("DOMContentLoaded", function() {
  const menuLinks = document.querySelectorAll("nav ul li a");

  menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Impedisce il comportamento di default (saltare alla sezione)

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Scorrimento fluido
      });
    });
  });
});
