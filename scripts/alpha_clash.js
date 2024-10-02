// function play() {
//     // step:1 HIDE THE HOME Screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    // console.log('player pressed', playerPressed);
    // stop if the player press esc
    if (playerPressed === 'Escape') {
        gameOver();
    }

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check matched or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // console.log('you have pressed correctly', expectedAlphabet);
        // updated score
        // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // 2.increase the score
        // const newScore = currentScore + 1;

        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }

    else {
        console.log('You missed. You lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);



        if (updatedLife === 0) {
            gameOver();
        }

        // step:1 get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // step:2 reduce the life count
        // const newLife = currentLife - 1;

        // // step:3 display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}
// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet:', alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background Color
    setBackgroundColorById(alphabet);
}
function play() {
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final Score 
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // 2. clear the last selected alphabet 
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}