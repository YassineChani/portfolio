// Dark / Light Mode handler with localStorage persistence
const themeToggleBtn = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    rootElement.classList.add('dark');
  } else {
    rootElement.classList.remove('dark');
  }
}

initTheme();

themeToggleBtn.addEventListener('click', () => {
  rootElement.classList.toggle('dark');
  if (rootElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Mobile menu handler
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value || 'Prise de contact Portfolio';
  const message = document.getElementById('message').value;

  // Open default email client with prefilled information
  const mailtoUrl = `mailto:imparyassine@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent("Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
  
  window.location.href = mailtoUrl;

  formFeedback.classList.remove('hidden');
  contactForm.reset();

  setTimeout(() => {
    formFeedback.classList.add('hidden');
  }, 6000);
});

// Projects Category Filter Handler
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Update active button classes
    filterButtons.forEach(btn => {
      btn.classList.remove('bg-neutral-900', 'dark:bg-white', 'text-white', 'dark:text-neutral-950');
      btn.classList.add('bg-neutral-100', 'dark:bg-neutral-800/80', 'text-neutral-600', 'dark:text-neutral-300');
    });

    button.classList.remove('bg-neutral-100', 'dark:bg-neutral-800/80', 'text-neutral-600', 'dark:text-neutral-300');
    button.classList.add('bg-neutral-900', 'dark:bg-white', 'text-white', 'dark:text-neutral-950');

    // Show/hide project cards
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (filter === 'all' || cardCategory === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

