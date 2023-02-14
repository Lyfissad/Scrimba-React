let homeScore = 0 
let guestScore = 0

function Add1home(){
    homeScore += 1
    document.getElementById("homeScore").textContent = homeScore
} 

function Add2home(){
    homeScore += 2
    document.getElementById("homeScore").textContent = homeScore
} 

function Add3home(){
    homeScore += 3
    document.getElementById("homeScore").textContent = homeScore
} 





function Guest1add(){
    guestScore += 1
    document.getElementById("guestScore").textContent = guestScore
}

function Guest2add(){
    guestScore += 2
    document.getElementById("guestScore").textContent = guestScore
}



function Guest3add(){
    guestScore += 3
    document.getElementById("guestScore").textContent = guestScore
}

function AC(){
    guestScore = 0
    homeScore = 0
    document.getElementById("guestScore").textContent = guestScore
    document.getElementById("homeScore").textContent = homeScore
}