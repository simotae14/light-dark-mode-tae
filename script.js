const toggleSwitch = document.querySelector('input[type="checkbox"]');

// Switch Theme Dinamically
const switchTheme = (event) => {
  document.documentElement.setAttribute('data-theme', event.target.checked ? 'dark' : 'light');
};

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);