const text = document.getElementById('text');
const length = document.getElementById('length');
let textLength = 0;

text.addEventListener('input', () => {

    length.textContent = `Text words: ${wordCount(text.value.trim())}` 

});
function wordCount(str){
    return str.split(" ").length
}