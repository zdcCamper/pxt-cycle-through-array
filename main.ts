input.onButtonPressed(Button.AB, function () {
    // Shows your selected user.
    basic.showString("" + (currentUser))
})
input.onButtonPressed(Button.B, function () {
    // Stores the desired name in a variable called
    // "currentUser".
    //
    // Needs to select index -1 because the button A press
    // has already moved onto the next name on the list.
    currentUser = family[index - 1]
})
input.onButtonPressed(Button.A, function () {
    // Checks to see if you are at the end of the list. If
    // you are, start again at the start (index = 0)
    //
    // create a variable name index (this is the position
    // in the list)
    if (index >= family.length) {
        index = 0
    }
    // shows the name from the list.
    basic.showString("" + (family[index]))
    // Goes to the next item on the list.
    index += 1
})
let index = 0
let currentUser = ""
let family: string[] = []
// create an array (list) of family names
family = ["sam", "sue", "steve"]
