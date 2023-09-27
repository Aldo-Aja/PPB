const buttonEl = document.querySelector('.button');
const overlayEl = document.querySelector('.overlay');
const bodyEl = document.body;

const toggleDarkMode = () => {
    bodyEl.classList.toggle('dark-mode');
    if (bodyEl.classList.contains('dark-mode')) {
        overlayEl.style.display = 'block';
    } else {
        overlayEl.style.display = 'none';
    }
};

buttonEl.addEventListener('click', toggleDarkMode);

overlayEl.addEventListener('click', (e) => {
    if (e.target === overlayEl) {
        toggleDarkMode();
    }
});
