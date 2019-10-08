let isAsleep = false
let screenNumber = 0
let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    isAsleep = true
    screenNumber = 1//Math.randomRange(0, 1)
    //screensaver 1
    if (isAsleep && screenNumber == 1) {
        while (isAsleep && screenNumber == 1) {
            randomTog()
            if (input.buttonIsPressed(Button.A)) {
                screenNumber = 0
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
    x = Math.randomRange(0, 4)
    y = Math.randomRange(0, 4)
    led.toggle(x, y)
    basic.pause(50)
}
