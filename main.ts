input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
    basic.showIcon(IconNames.SmallHeart)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.No)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
})
basic.showString("school :D")
