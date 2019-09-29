// create array of words 
var word = ['spiderman', 'superman', 'drax'];

//choose random word from array
let wordIndex = Math.floor(Math.random() * word.length);
let chosenWord = word[wordIndex];
let rightWord = [];
let wrongWord = [];
let underScore = [];

// DOM manipulation
let domUnderScore = document.getElementById('underscore')
let domRightGuess = document.getElementById('right-guess')
let domWrongGuess = document.getElementById('wrong-guess')

// choose underscores based on length of word
var createUnderscore = () => {
    for( var i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}

document.addEventListener('keypress', (e) => {
    //convert numbers from keyCode to string; This makes sure, that when you press the keyboard key "a" the program actually understands the key as an 'a' and not a number.
    let keyword = String.fromCharCode(e.keyCode);
    // user guess is right, 
    if(chosenWord.indexOf(keyword) > -1) {
        // push to right word array
        rightWord.push(keyword);
        //replace underscore with right letter
        underScore[chosenWord.indexOf(keyword)] = keyword;
        domUnderScore.innerHTML = underScore.join('');
        domRightGuess.innerHTML = rightWord.join('');

        if(underScore.join('') == chosenWord) {
            alert('you win!')
            // make sure the game reloads, so you can play again
            return document.location.reload(true);
        }
        
    } else {
        wrongWord.push(keyword);
        domWrongGuess.innerHTML = wrongWord.join('');
    }
})
domUnderScore.innerHTML = createUnderscore().join('')
