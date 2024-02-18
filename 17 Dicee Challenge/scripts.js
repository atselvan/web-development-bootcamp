
function rollDice() {
    let player1Roll = Math.floor(Math.random() * 6) + 1
    let player2Roll = Math.floor(Math.random() * 6) + 1

    document.querySelector(".img1").setAttribute("src", "images/dice" + player1Roll + ".png")
    document.querySelector(".img2").setAttribute("src", "images/dice" + player2Roll + ".png")

    if (player1Roll > player2Roll) {
        document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"
    } else if (player1Roll < player2Roll) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆"
    } else {
        document.querySelector("h1").innerHTML = " Its a Draw!"
    }
}
