let isAsleep = false
let screenNumber = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    isAsleep = true
    screenNumber = Math.randomRange(1, 2)
    //screensaver 1
    if (isAsleep && screenNumber == 1) {
        while (isAsleep && screenNumber == 1) {
            randomTog()
            if (input.buttonIsPressed(Button.A)) {
                screenNumber = 0
                isAsleep = false
                basic.clearScreen()
            }
        }
    }
    //screensaver 2
    if (isAsleep && screenNumber == 2) {
        while (isAsleep && screenNumber == 2) {
            rain()
            if (input.buttonIsPressed(Button.A)) {
                screenNumber = 0
                isAsleep = false
                basic.clearScreen()
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    isAsleep = false
    screenNumber = 0
    basic.clearScreen()
    basic.showString("Awake")
})

function randomTog() {
    led.toggle(Math.randomRange(0, 4), Math.randomRange(0, 4))
    basic.pause(30)
}
function rain() {
    basic.clearScreen()
    x = Math.randomRange(0, 4)
    led.toggle(x, 0)
    basic.pause(100)
    led.toggle(x, 0)
    led.toggle(x, 2)
    basic.pause(100)
    led.toggle(x, 2)
    led.toggle(x, 4)
    basic.pause(100)
    led.toggle(x, 4)
}
