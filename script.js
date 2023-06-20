// Smooth scroll to anchor
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a[href^='#']");
    
    links.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        
        var target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
          });
        }
      });
    });
  });
  