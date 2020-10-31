function Halloween_colours () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    for (let index = 0; index <= 10; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Orange))
        strip.show()
        basic.pause(200)
    }
    for (let index = 0; index <= 10; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(200)
    }
}
input.onButtonPressed(Button.A, function () {
    lights += 1
})
input.onButtonPressed(Button.B, function () {
    flicker = 1 - flicker
})
let strip: neopixel.Strip = null
let flicker = 0
let lights = 0
flicker = 0
strip = neopixel.create(DigitalPin.P1, 10, NeoPixelMode.RGB)
basic.forever(function () {
    if (lights == 0) {
        strip.clear()
        strip.show()
    }
    if (lights == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
    if (lights == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (lights == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (lights == 4) {
        strip.showRainbow(1, 360)
        lights = 5
    }
    if (lights == 5) {
        strip.rotate(1)
        strip.show()
    }
    if (lights == 6) {
        Halloween_colours()
    }
    if (lights >= 7) {
        lights = 0
    }
})
