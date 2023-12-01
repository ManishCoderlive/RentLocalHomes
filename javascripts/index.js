  // JavaScript for responsive menu toggle
  const menuIcon = document.querySelector('.menu-icon');
  const cancelIcon = document.querySelector('.cancel-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.add('active');
    menuIcon.style.display = 'none';
    cancelIcon.style.display = 'block';
  });

  cancelIcon.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuIcon.style.display = 'block';
    cancelIcon.style.display = 'none';
  });