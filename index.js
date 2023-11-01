// Your code goes here
// debugger

const text = document.getElementById('text')

// debugger

// text.textContent = 'This is really cool!'

// debugger

// text.textContent = 'JavaScript is so cool. It lets me add text to my page programmatically.'

// const body = document.getElementById('body')

// const p = document.createElement('p')

// body.appendChild(p)

// p.textContent = 'This is really cool!'

// const button = document.createElement('button')

// body.appendChild(button)

// button.textContent = 'Button'

// button.addEventListener('click', (e) => alert('I was clicked!'))

document.addEventListener("DOMContentLoaded", function () {
    console.log("The DOM has loaded");
    text.textContent = 'This is really cool!'
});