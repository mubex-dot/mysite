let incrementEl = document.getElementById("increment-btn")
let saveEl = document.getElementById("save-btn")
let resetEl = document.getElementById("reset-btn")
let count = 0
function increment() {
    count += 1
    counter.textContent = count
}


function save() {
    let countStr = count + " - "
    previous.textContent += countStr
    counter.textContent = 0
    count = 0
}

function reset() {
    let countReset = 0
    previous.textContent = countReset
    counter.textContent = 0
    count = 0
}
