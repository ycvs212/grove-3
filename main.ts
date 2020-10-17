let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showBarGraph(pins.map(
    pins.analogReadPin(AnalogPin.P0),
    0,
    1023,
    0,
    255
    ), 255)
})
