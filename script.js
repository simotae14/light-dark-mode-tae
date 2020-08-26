const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark or Light images
const imageMode = (color) => {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Dark Mode Styles
const darkMode = () => {
  nav.style.background = 'rgb(0 0 0 / 50%)';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = 'Dark Mode';
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  // change images
  imageMode('dark');
};

// Light Mode Styles
const lightMode = () => {
  nav.style.background = 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = 'Light Mode';
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  // change images
  imageMode('light');
};

// Switch Theme Dinamically
const switchTheme = (event) => {
  document.documentElement.setAttribute('data-theme', event.target.checked ? 'dark' : 'light');
  if (event.target.checked) {
    darkMode();
  } else {
    lightMode();
  }
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);