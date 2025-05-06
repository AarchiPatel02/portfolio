document.addEventListener('DOMContentLoaded', () => {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
      preloader.style.display = 'none';
    });
  
    // Scroll animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    document.querySelectorAll('.animate').forEach(el => observer.observe(el));
  
  // Typing effect
const phrases = [
    "Frontend Developer",
    "Backend Developer",
    "Real-Time App Builder",
    "Responsive Web Designer",
    "Live Hosting Specialist"
  ];
  const typing = document.querySelector(".typing");
  let i = 0, j = 0, current = "", isDeleting = false;
  
  function type() {
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        current = phrases[i].substring(0, j++);
        typing.textContent = current;
        setTimeout(type, 100);
      } else if (isDeleting && j > 0) {
        current = phrases[i].substring(0, --j);
        typing.textContent = current;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i = (i + 1) % phrases.length;
        setTimeout(type, 1000);
      }
    }
  }
  type();
  

  // Function to detect if element is in view
function checkInView() {
    const projectCards = document.querySelectorAll('.project-card');
  
    projectCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        card.classList.add('in-view');
      } else {
        card.classList.remove('in-view');
      }
    });
  }
  
  // Call the function on scroll and load
  window.addEventListener('scroll', checkInView);
  window.addEventListener('load', checkInView);
  
  });
  