const text = document.getElementById('text');
const length = document.getElementById('length');
let textLength = 0;

text.addEventListener('input', () => {

    length.textContent = `Text Symbols: ${text.value.trim()}` 

});
