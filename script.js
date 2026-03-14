console.log("Portfolio website loaded");

// Smooth scroll (optional, enhances sticky nav)
document.querySelectorAll('#navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form alert
document.querySelector("form").addEventListener("submit", function(e){
    alert("Thank you! Your message has been sent.");
});
