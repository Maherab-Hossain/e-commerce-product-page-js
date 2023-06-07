
let upbtn = document.querySelector(`.up`)
let downbtn = document.querySelector(`.down`)
let output = document.querySelector(`input`)
let alertbtn = document.querySelector(`.alert`)

function outputUp() {
    let upvalue = Number (output.value)

    if (upvalue == 5) {
        alert(`Out of Stock`)
        return false
    }
    

    upvalue = upvalue + 1
    output.value = upvalue

}



upbtn.addEventListener(`click`, outputUp)



function outputDown() {
    let downvalue = Number (output.value)

    if (downvalue == 0) {
        return false
    }

    downvalue = downvalue - 1 
    output.value = downvalue 

}

downbtn.addEventListener(`click`, outputDown)


// Dark Mood Strats

let displaymoodbtn = document.querySelector(`.display`)
let bodybtn = document.querySelector(`body`)
let moodbtn = document.querySelector(`.mood`)
let lightbtn = document.querySelector(`.light`)

function moodresult() {
    bodybtn.classList.toggle(`displayMood`)

    if (bodybtn.classList.contains(`displayMood`)== false) {
        
        moodbtn.innerHTML=`Dark Mood`
        lightbtn.innerHTML= `<i class="bi bi-brightness-high-fill"></i>`

    } else {
        moodbtn.innerHTML=`Light Mood`
        lightbtn.innerHTML= `<i class="bi bi-moon-stars-fill"></i>`
    }
}


displaymoodbtn.addEventListener(`click`, moodresult)

// Dark Mood End
