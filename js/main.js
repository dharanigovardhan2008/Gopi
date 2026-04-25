// Book a Call - WhatsApp Redirect
document.getElementById('bookCall').addEventListener('click', () => {
  const phone = '919494777869'; // Country code + number
  const message = encodeURIComponent('Hi! I would like to book a call with NexusAI to discuss a project.');
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
});

// Book a Project - Open Modal
const projectModal = document.getElementById('projectModal');
document.getElementById('bookProject').addEventListener('click', () => {
  projectModal.classList.add('active');
});

document.getElementById('closeModal').addEventListener('click', () => {
  projectModal.classList.remove('active');
});

projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) {
    projectModal.classList.remove('active');
  }
});

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
