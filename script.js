const text = document.getElementById('text');
const length = document.getElementById('length');

text.addEventListener('input', () => {
    length.textContent = text.value.length
})