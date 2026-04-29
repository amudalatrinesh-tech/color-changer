const btn = document.getElementById('btn');
const colorCode = document.getElementById('color-code');
const body = document.body;

btn.addEventListener('click', () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    body.style.backgroundColor = randomColor;
    colorCode.textContent = randomColor;
});
