let isAsleep = false
let screenNumber = 0
let xCoord = 0
let yCoord = 0
//go to sleep
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    isAsleep = true
    while (isAsleep) {
        //screensaver 1
        if (screenNumber == 1) {
            basic.clearScreen()
            while (screenNumber == 1) {
                randomTog()
            }
        }
        //screensaver 2
        if (screenNumber == 2) {
            basic.clearScreen()
            while (screenNumber == 2) {
                rain()
            }
        }
        //screensaver 3
        if (screenNumber == 3) {
            basic.clearScreen()
            xCoord = 0
            yCoord = 0
            while (screenNumber == 3) {
                spin()
            }
        }
        if (screenNumber == 4) {
            basic.clearScreen()
            xCoord = 0
            yCoord = 0
            while (screenNumber == 4) {
                snake()
            }
        }
        if (screenNumber == 5) {
            basic.clearScreen()
            while (screenNumber == 5) {
                rain()
            }
        }
    }
})
//wakeup
input.onButtonPressed(Button.B, function () {
    screenNumber = 0
    isAsleep = false
    basic.clearScreen()
    basic.showString("Awake")
    led.plotAll()
})

input.onGesture(Gesture.Shake, function () {
    screenNumber = 1
})
input.onGesture(Gesture.LogoDown, function () {
    screenNumber = 2
})
input.onGesture(Gesture.TiltRight, function () {
    screenNumber = 3
})
input.onGesture(Gesture.TiltLeft, function () {
    screenNumber = 4
})
input.onGesture(Gesture.LogoUp, function () {
    screenNumber = 5
})

function randomTog() {
    led.toggle(Math.randomRange(0, 4), Math.randomRange(0, 4))
    basic.pause(30)
}
function rain() {
    basic.clearScreen()
    xCoord = Math.randomRange(0, 4)
    led.toggle(xCoord, 0)
    basic.pause(100)
    led.toggle(xCoord, 0)
    led.toggle(xCoord, 2)
    basic.pause(100)
    led.toggle(xCoord, 2)
    led.toggle(xCoord, 4)
    basic.pause(100)
    led.toggle(xCoord, 4)
}

function spin() {
    led.toggle(xCoord, 0)
    led.toggle(xCoord - 1, 0)
    led.toggle(xCoord, 1)
    led.toggle(xCoord - 1, 1)
    led.toggle(4, yCoord)
    led.toggle(4, yCoord - 1)
    led.toggle(3, yCoord)
    led.toggle(3, yCoord - 1)
    led.toggle(4 - xCoord, 4)
    led.toggle(5 - xCoord, 4)
    led.toggle(4 - xCoord, 3)
    led.toggle(5 - xCoord, 3)
    led.toggle(0, 4 - yCoord)
    led.toggle(0, 5 - yCoord)
    led.toggle(1, 4 - yCoord)
    led.toggle(1, 5 - yCoord)
    xCoord += 1
    yCoord += 1
    basic.pause(100)
    if (xCoord == 6) {
        xCoord = 0
        yCoord = 0
        led.toggle(2, 2)
    }
}

function snake() {
    if (yCoord == 0 || yCoord == 2 || yCoord == 4) {
        for (let i = 0; i < 5; i++) {
            led.toggle(i, yCoord)
            led.toggle(4 - i, yCoord - 1)
            basic.pause(100)
            xCoord = i
        }
        yCoord++
    }
    if (yCoord == 1 || yCoord == 3 || yCoord == 5) {
        for (let i = 4; i > -1; i--) {
            led.toggle(i, yCoord)
            led.toggle(4 - i, yCoord - 1)
            basic.pause(100)
            xCoord = i
        }
        yCoord++
    }
    else {
        yCoord = 0
        basic.clearScreen()
        basic.pause(50)
    }
}
