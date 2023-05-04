let code = 0
basic.forever(function () {
    if (code == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (code == 1 && input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        code = 2
    }
})
basic.forever(function () {
    if (code == 1 && input.buttonIsPressed(Button.A)) {
        code = 0
    }
})
basic.forever(function () {
    if (code == 0 && input.buttonIsPressed(Button.A)) {
        code = 1
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    }
})
basic.forever(function () {
    if (code == 3 && input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        code = 4
    }
})
basic.forever(function () {
    if (code == 2 && input.logoIsPressed()) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            # # # . .
            `)
        code = 3
    }
})
basic.forever(function () {
    if (code == 4 && input.logoIsPressed()) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        code = 5
    }
})
