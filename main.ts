function feuV () {
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    basic.pause(5000)
    strip.clear()
    strip.show()
}
function feuR () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    while (TEMPS != 0) {
        basic.showNumber(TEMPS)
        basic.pause(1000)
        TEMPS = TEMPS - 1
    }
    basic.clearScreen()
    strip.clear()
    strip.show()
}
let TEMPS = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 3, NeoPixelMode.RGB)
strip.setBrightness(25)
strip.showColor(neopixel.colors(NeoPixelColors.White))
TEMPS = 0
let ETAT = 1
basic.forever(function () {
    if (ETAT == 1) {
        TEMPS = 10
        feuR()
        ETAT = 0
    } else {
        if (ETAT == 0) {
            feuV()
            TEMPS = 0
            ETAT = 1
        }
    }
})
