// Observer options
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

// Observer callback function
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      const skillBadges = entry.target.querySelectorAll('.skill-badge');
      skillBadges.forEach((badge, index) => {
        badge.style.setProperty('--delay', index);
        badge.classList.add('animate-skills');
      });
      observer.unobserve(entry.target);
    }
  });
};

// Create a new observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe elements with class 'animate-on-scroll'
document.querySelectorAll('.animate-on-scroll').forEach(element => observer.observe(element));

// Other existing JavaScript functions and event listeners

/* ----- EMAILJS FUNCTION ----- */
const sendEmail = () => {
  const fromName = document.querySelector('.input-field[name="name"]');
  const fromEmail = document.querySelector('.input-field[name="email"]');
  const message = document.querySelector('textarea[name="message"]');

  if (!fromName.checkValidity() || !fromEmail.checkValidity() || !message.checkValidity()) {
    fromName.reportValidity();
    fromEmail.reportValidity();
    message.reportValidity();
    return;
  }

  emailjs.send("service_2raqtrn", "template_ly4bp5v", {
    from_name: fromName.value,
    from_email: fromEmail.value,
    message: message.value,
    to_name: "Mohammad Fasih Shaukat"
  })
  .then(response => {
    console.log('SUCCESS!', response.status, response.text);
    showModal("Message sent successfully!");
  })
  .catch(error => {
    console.log('FAILED...', error);
    showModal("Failed to send the message. Please try again.");
  });
};

/* ----- NAVIGATION BAR FUNCTION ----- */
const myMenuFunction = () => {
  const menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
};

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = () => {
  const navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
};

/* ----- TYPING EFFECT ----- */
new Typed(".typedText", {
  strings: ["Designer", "MERN Stack Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- SMOOTH SCROLLING ----- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/* ----- MODAL FUNCTIONALITY ----- */
const showModal = (message) => {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const closeModal = document.getElementsByClassName("close")[0];

  modalMessage.textContent = message;
  modal.style.display = "block";

  closeModal.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};

/* ----- SCROLL REVEAL ANIMATION ----- */
const scrollRevealConfig = {
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
};

ScrollReveal().reveal('.featured-text-card', scrollRevealConfig);
ScrollReveal().reveal('.featured-name', { ...scrollRevealConfig, delay: 100 });
ScrollReveal().reveal('.featured-text-info', { ...scrollRevealConfig, delay: 200 });
ScrollReveal().reveal('.featured-text-btn', { ...scrollRevealConfig, delay: 200 });
ScrollReveal().reveal('.social_icons', { ...scrollRevealConfig, delay: 200 });
ScrollReveal().reveal('.featured-image', { ...scrollRevealConfig, delay: 300 });

ScrollReveal().reveal('.project-box', { ...scrollRevealConfig, interval: 200 });
ScrollReveal().reveal('.top-header', scrollRevealConfig);

ScrollReveal().reveal('.about-info', { origin: 'left', ...scrollRevealConfig, delay: 100 });
ScrollReveal().reveal('.contact-info', { origin: 'left', ...scrollRevealConfig, delay: 100 });

ScrollReveal().reveal('.skills-box', { origin: 'right', ...scrollRevealConfig, delay: 100 });
ScrollReveal().reveal('.form-control', { origin: 'right', ...scrollRevealConfig, delay: 100 });
