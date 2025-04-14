document.addEventListener('DOMContentLoaded', function()
{
  document.getElementById('home').classList.add('active');
});

document.querySelectorAll('.nav-links a').forEach(anchor =>
  {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    document.querySelectorAll('section').forEach(section => section.classList.remove('active'));

    targetElement.classList.add('active');

    setTimeout(() => {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);

    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});