const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links'); // Missing dot for the class selector

navToggle.addEventListener('click', function () {
  if (links.classList.contains('show-links')) {
    links.classList.remove('show-links'); // Wrong class name was being removed
  } else {
    links.classList.add('show-links');
  }
});
