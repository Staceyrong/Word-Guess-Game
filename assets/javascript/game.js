var zodiac = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
//ask computer choose a random word
var wins = 0;
var looses = 0;
var remainingLetter = [];
var wrongLetter = [];
var maxChance = 5;
var randomWord  = zodiac[Math.floor(Math.random() * zodiac.length)];
var answerArr = [];
var userGuess = [];


function guessWord() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArr.push ("_");
    }
    document.getElementById("current-word").textContent = answerArr; 

    for (var j = 0; j < randomWord.length; j++) {
        if (userGuess == randomWord[j]) {
            answerArr.push(userGuess);
        }
        else {
            answerArr.push("_");
        }
    }
    document.getElementById("current-word").textContent = answerArr;
}


 
guessWord();