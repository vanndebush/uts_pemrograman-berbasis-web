// * real-time date and time
setInterval(function() {
  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const fullDate = `${date}/${month + 1}/${year}`;
  const fullTime = `${hours}:${minutes}:${seconds}`;

  document.querySelector('.date').textContent = fullDate;
  document.querySelector('.time').textContent = fullTime;
}, 1000);

// * back to top
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  if (window.scrollY >= 200) {
    backToTop.classList.remove('d-none');
    backToTop.classList.add('d-block');
  } else {
    backToTop.classList.remove('d-block');
    backToTop.classList.add('d-none');
  }
});
backToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// * theme toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', function() {
  const navbar = document.querySelector('.navbar');
  const hero = document.getElementById('hero');
  const articles = document.getElementById('articles');
  const gallery = document.getElementById('gallery');
  const schedule = document.getElementById('schedule');
  const profile = document.getElementById('profile');
  const footer = document.querySelector('footer');

  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');

    navbar.classList.remove('bg-body-tertiary');
    navbar.classList.add('bg-dark', 'navbar-dark');

    themeToggle.classList.remove('btn-dark');
    themeToggle.classList.add('btn-light');
    themeToggle.innerHTML = '<i class="bi bi-moon"></i>';
    themeToggle.title = 'Switch to Light Theme';

    hero.classList.remove('bg-secondary-subtle');
    hero.classList.add('bg-secondary', 'text-light');

    articles.classList.add('bg-dark', 'text-light');
    articles.querySelectorAll('.card').forEach(card => card.classList.add('bg-secondary', 'text-light'));
    articles.querySelectorAll('small').forEach(small => {
      small.classList.remove('text-body-secondary');
      small.classList.add('text-light');
    });

    gallery.classList.remove('bg-body-tertiary');
    gallery.classList.add('bg-dark-subtle', 'text-black');

    schedule.classList.add('bg-dark', 'text-light');
    schedule.querySelectorAll('.card').forEach(card => {
      card.classList.remove('text-bg-light');
      card.classList.add('bg-secondary', 'text-light');
    });
    schedule.querySelectorAll('.card-header').forEach(cardHeader => cardHeader.classList.add('text-black'));

    profile.classList.remove('bg-body-tertiary');
    profile.classList.add('bg-dark-subtle', 'text-black');

    footer.classList.add('bg-dark', 'text-light');
    footer.querySelectorAll('a').forEach(e => {
      e.classList.remove('text-black');
      e.classList.add('text-light');
    });
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');

    navbar.classList.remove('bg-dark', 'navbar-dark');
    navbar.classList.add('bg-body-tertiary');

    themeToggle.classList.remove('btn-light');
    themeToggle.classList.add('btn-dark');
    themeToggle.innerHTML = '<i class="bi bi-sun"></i>';
    themeToggle.title = 'Switch to Dark Theme';

    hero.classList.remove('bg-secondary', 'text-light');
    hero.classList.add('bg-secondary-subtle');

    articles.classList.remove('bg-dark', 'text-light');
    articles.querySelectorAll('.card').forEach(card => card.classList.remove('bg-secondary', 'text-light'));
    articles.querySelectorAll('small').forEach(small => {
      small.classList.remove('text-light');
      small.classList.add('text-body-secondary');
    });

    gallery.classList.remove('bg-dark-subtle', 'text-black');
    gallery.classList.add('bg-body-tertiary');

    schedule.classList.remove('bg-dark', 'text-light');
    schedule.querySelectorAll('.card').forEach(card => {
      card.classList.remove('bg-secondary', 'text-light');
      card.classList.add('text-bg-light');
    });
    schedule.querySelectorAll('.card-header').forEach(cardHeader => cardHeader.classList.remove('text-black'));

    profile.classList.remove('bg-dark-subtle', 'text-black');
    profile.classList.add('bg-body-tertiary');

    footer.classList.remove('bg-dark', 'text-light');
    footer.querySelectorAll('a').forEach(e => {
      e.classList.remove('text-light');
      e.classList.add('text-black');
    });
  }
});