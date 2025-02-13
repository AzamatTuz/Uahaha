const text = document.getElementById('text');
const length = document.getElementById('length');
let textLength = 0 

text.addEventListener('input', () => {
    if (text.value == "") {
        textLength += 0
    }
    else{
        for (let i = 0; i < text.value.length; i++) {
            
            i++
            
        }
    }
    
    length.textContent = textLength
})