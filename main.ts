input.onButtonPressed(Button.A, function () {
    basic.showString("HOUGAKU")
    basic.showString("" + (input.compassHeading()))
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
basic.showString("Pless Enter For A/B/A&B Boton or logo taps!!")
