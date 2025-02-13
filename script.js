const text = document.getElementById('text');
const length = document.getElementById('length');
const words = document.getElementById('words');

text.addEventListener('input', () => {

    words.textContent = `Text Words: ${WordCount(text.value.trim())}`
    length.textContent = `Text Symbols: ${text.value.trim().length}`
    
})

function WordCount(str) {
    return str.split(" ").length;
}

