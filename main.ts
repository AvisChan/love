let 可變電阻值 = 0
let tm = TM1637.create(
DigitalPin.P14,
DigitalPin.P13,
7,
4
)
basic.forever(function () {
    可變電阻值 = pins.analogReadPin(AnalogReadWritePin.P4)
    tm.showNumber(可變電阻值)
    basic.pause(100)
})
