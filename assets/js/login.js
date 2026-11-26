window.addEventListener('DOMContentLoaded', () => {
  const alert = document.querySelector('.alert');

  if (alert) {
    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
});

document.querySelector('form').addEventListener('submit', e => {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === '') {
    e.preventDefault();
    alert('Username field is required');
    usernameInput.focus();
    return;
  } else if (password === '') {
    e.preventDefault();
    alert('Password field is required');
    passwordInput.focus();
    return;
  }
});