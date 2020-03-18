const spot1 = document.getElementById("spot1")
const spot2 = document.getElementById("spot2")
const spot3 = document.getElementById("spot3")
const spot4 = document.getElementById("spot4")
const spot5 = document.getElementById("spot5")
const spot6 = document.getElementById("spot6")
const spot7 = document.getElementById("spot7")
const spot8 = document.getElementById("spot8")
const spot9 = document.getElementById("spot9")

var currentPlayer = true

function updateBoard() {
    document.getElementById("btn1").onclick == true && currentPlayer ?
    document.getElementById("btn1").innerHTML = "x" :
    document.getElementById("btn1").innerHTML = "o"

    document.getElementById("btn2").onclick == true && currentPlayer ?
    document.getElementById("btn2").innerHTML = "x" :
    document.getElementById("btn2").innerHTML = "o"

    document.getElementById("btn3").onclick == true && currentPlayer ?
    document.getElementById("btn3").innerHTML = "x" :
    document.getElementById("btn3").innerHTML = "o"

    document.getElementById("btn4").onclick == true && currentPlayer ?
    document.getElementById("btn4").innerHTML = "x" :
    document.getElementById("btn4").innerHTML = "o"

    document.getElementById("btn5").onclick == true && currentPlayer ?
    document.getElementById("btn5").innerHTML = "x" :
    document.getElementById("btn5").innerHTML = "o"

    document.getElementById("btn6").onclick == true && currentPlayer ?
    document.getElementById("btn6").innerHTML = "x" :
    document.getElementById("btn6").innerHTML = "o"

    document.getElementById("btn7").onclick == true && currentPlayer ?
    document.getElementById("btn7").innerHTML = "x" :
    document.getElementById("btn7").innerHTML = "o"

    document.getElementById("btn8").onclick == true && currentPlayer ?
    document.getElementById("btn8").innerHTML = "x" :
    document.getElementById("btn8").innerHTML = "o"

    document.getElementById("btn9").onclick == true && currentPlayer ?
    document.getElementById("btn9").innerHTML = "x" :
    document.getElementById("btn9").innerHTML = "o"

    currentPlayer ? currentPlayer = false : currentPlayer = true
}
