input.onButtonPressed(Button.A, function () {
    basic.showString("HOUGAKU")
    while (!(input.logoIsPressed())) {
        hougaku = 1
        basic.showNumber(input.compassHeading())
        if (hougaku == 1) {
            if (input.pinIsPressed(TouchPin.P0)) {
                if (0 == input.compassHeading()) {
                    music.playMelody("C5 C5 - C5 C5 - C5 C5 ", 2000)
                } else if (randint(355, 5) == input.compassHeading()) {
                    music.playMelody("F - F - F - F - ", 1000)
                } else {
                    if (randint(357, 3) == input.compassHeading()) {
                        music.playMelody("- A - A - A - A ", 1500)
                    }
                }
            }
        }
    }
    hougaku = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Lite Mode")
    basic.showString("Mode The Exit For A Boton")
    while (!(input.buttonIsPressed(Button.A))) {
        power.fullPowerOn(FullPowerSource.B)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("KION/OND")
    basic.showString("" + (input.temperature()))
})
let hougaku = 0
basic.showString("Hello")
radio.setGroup(1)
basic.forever(function () {
	
})
