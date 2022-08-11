input.onButtonPressed(Button.A, function () {
    basic.showString("HOUGAKU")
    while (!(input.logoIsPressed())) {
        basic.showNumber(input.compassHeading())
    }
    break;
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
basic.showString("Hello")
radio.setGroup(1)
