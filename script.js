const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
smoothLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId !== '#') {
      event.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

const bookingForm = document.querySelector('.booking-card');
if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const arrival = document.getElementById('arrival-date').value;
    const departure = document.getElementById('departure-date').value;
    const guests = document.getElementById('guest-count').value;

    if (!arrival || !departure || !guests) {
      alert('Please select your arrival, departure, and number of guests before checking availability.');
      return;
    }

    alert(`Great choice! We are checking availability for ${guests} guest(s) from ${arrival} to ${departure}.`);
  });
}
