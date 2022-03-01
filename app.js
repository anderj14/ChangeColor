const inputColor = document.getElementById('inputColor')
const button = document.getElementById('button')
const titleColor = document.getElementById('titlecolor')
const boxColor = document.getElementById('boxcolor')

button.addEventListener('click', () => {
    titleColor.textContent = inputColor.value
    boxColor.style.backgroundColor = inputColor.value
})