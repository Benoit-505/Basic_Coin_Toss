input.onButtonPressed(Button.A, function () {
    if (Coin_Toss == 0) {
        basic.showString("H")
    } else {
        basic.showString("T")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Coin_Toss = randint(0, 1)
})
let Coin_Toss = 0
Coin_Toss = randint(0, 1)
basic.forever(function () {
	
})
