// SETUP
// terminal -> 'open index.html'
// show browser console

alert('All systems go.')
alert('Ignition.')
alert('Shift into Drive.')
alert('Ready for blast off!')

const username = prompt("Hi there. What's your name?")

alert(`Greetings, ${username} --- Welcome to the Mars Adventure Game.`)
alert(`Yesterday, you receive a call from your good friend at NASA.`)
alert(`They need someone to go to Mars this weekend, and YOU'VE been chosen!`)

let excited = prompt("Are you excited? (type Y or N) ").trim().toUpperCase()

if (excited.startsWith("Y")) {
    alert("I knew you'd say that. It's so cool that you're going to Mars!")
} else if (excited.startsWith("N")) {
    alert("Well, it's too late to back out now.")
}

alert("It's time to pack for your trip to Mars.")

let numSuitcases = prompt('How many suitcases do you plan to bring?')

if (Number(numSuitcases) > 2) {
    alert("That's way too many. You'll have to pack more lightly.")
} else {
    alert("Perfect. You'll certainly fit in the spaceship!")
}

alert("You're allowed to bring one companion animal with you.")

let companionType = prompt('What kind of companion animal would you like to bring?')
let companionName = prompt("What is your companion's name?");

let firstLetter = companionName[0];
firstLetter = firstLetter.toUpperCase();

let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();

companionName = firstLetter + otherLetters;

// Confirm animal
alert(`Cool, so you're bringing ${companionName} the ${companionType}.`);

alert('NASA has a interior design team offering to outfit your space ship.')
alert(`You have 3 options for the interior decor of your ship...`)

let decorChoice = prompt(`Your options are:
A  Sleek, modern minimalism
B  Retro/vintage space age
C  Victorian-era steampunk
(type A B or C to choose)
`).toUpperCase()

let decor;

if (decorChoice === 'A') {
    decor = 'modern minimalist'
} else if (decorChoice === 'B') {
    decor = 'retro'
} else if (decorChoice === 'C') {
    decor = 'steampunk'
}

alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`)

let temp = 0
// alert(`Waiting for optimum Launch Pad Booster temperature. Currently: ${temp}`)

// setTimeout(() => {
//     temp += 200
// }, 2000).then(

//     alert(`Waiting for ${temp}`)
// )

while (temp < 1200) {
    alert(`Waiting for optimum Launch Pad Booster temperature. Currently: ${temp}`)
    setTimeout(() => {
        // temp += 200
    }, 2000)
    temp += 200
}


alert("*** LIFTOFF ***")


