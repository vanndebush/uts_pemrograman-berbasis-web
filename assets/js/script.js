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

  document.querySelector('.date').innerHTML = fullDate;
  document.querySelector('.time').innerHTML = fullTime;
}, 1000);