document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('formMessage');
  if (!name) { message.textContent = 'Please enter your name.'; return; }
  message.textContent = `Thanks, ${name}! Your demo message is ready.`;
  this.reset();
});