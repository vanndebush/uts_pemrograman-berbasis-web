// * real-time date and time
const dateEl = document.querySelector('.date');
const timeEl = document.querySelector('.time');

const updateDateTime = () => {
  const time = new Date();

  const date = String(time.getDate()).padStart(2, '0');
  const month = String(time.getMonth() + 1).padStart(2, '0');
  const year = time.getFullYear();

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  dateEl.textContent = `${date}/${month}/${year}`;
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;
};

updateDateTime();
setInterval(updateDateTime, 1000);

// * back to top
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => backToTop.classList.toggle('d-none', window.scrollY < 200));
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// * theme toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

const setTheme = isDark => {
  const navbar = document.querySelector('.navbar');
  const hero = document.getElementById('hero');
  const articles = document.getElementById('articles');
  const gallery = document.getElementById('gallery');
  const schedule = document.getElementById('schedule');
  const profile = document.getElementById('profile');
  const footer = document.querySelector('footer');

  document.body.classList.toggle('dark-theme', isDark);
  document.body.classList.toggle('light-theme', !isDark);

  navbar.classList.toggle('bg-dark', isDark);
  navbar.classList.toggle('navbar-dark', isDark);
  navbar.classList.toggle('bg-body-tertiary', !isDark);

  themeToggle.classList.toggle('btn-light', isDark);
  themeToggle.classList.toggle('btn-dark', !isDark);
  themeToggle.title = isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme';
  if (themeIcon) {
    themeIcon.classList.toggle('bi-moon', isDark);
    themeIcon.classList.toggle('bi-sun', !isDark);
  }

  hero.classList.toggle('bg-secondary', isDark);
  hero.classList.toggle('text-light', isDark);
  hero.classList.toggle('bg-secondary-subtle', !isDark);

  articles.classList.toggle('bg-dark', isDark);
  articles.classList.toggle('text-light', isDark);
  articles.querySelectorAll('.card').forEach(card => {
    card.classList.toggle('bg-secondary', isDark);
    card.classList.toggle('text-light', isDark);
  });
  articles.querySelectorAll('small').forEach(small => {
    small.classList.toggle('text-light', isDark);
    small.classList.toggle('text-body-secondary', !isDark);
  });

  gallery.classList.toggle('bg-dark-subtle', isDark);
  gallery.classList.toggle('text-black', isDark);
  gallery.classList.toggle('bg-body-tertiary', !isDark);

  schedule.classList.toggle('bg-dark', isDark);
  schedule.classList.toggle('text-light', isDark);
  schedule.querySelectorAll('.card').forEach(card => {
    card.classList.toggle('bg-secondary', isDark);
    card.classList.toggle('text-light', isDark);
    card.classList.toggle('text-bg-light', !isDark);
  });
  schedule.querySelectorAll('.card-header').forEach(cardHeader => cardHeader.classList.toggle('text-black', isDark));

  profile.classList.toggle('bg-dark-subtle', isDark);
  profile.classList.toggle('text-black', isDark);
  profile.classList.toggle('bg-body-tertiary', !isDark);

  footer.classList.toggle('bg-dark', isDark);
  footer.classList.toggle('text-light', isDark);
  footer.querySelectorAll('a').forEach(link => {
    link.classList.toggle('text-light', isDark);
    link.classList.toggle('text-black', !isDark);
  });
};

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-theme');
  setTheme(!isDark);
});