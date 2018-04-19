var zodiac = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
//ask computer choose a random word
var wins = 0;
var looses = 0;
var maxChance = 10;
var randomWord  = zodiac[Math.floor(Math.random() * zodiac.length)];
var remainingLetter = randomWord.length;
var answerArr = [];
var temp = [];
//var userGuess = [];

for (var i = 0; i < randomWord.length; i++) {
    answerArr.push ("_");
}
output();


document.onkeyup = function guessWord() {
    var userGuess = event.key;
    answerArr = [];
    if (temp.indexOf(userGuess) == -1) {
        temp.push(userGuess);
        maxChance --;
    }
    for (var j = 0; j < randomWord.length; j++) {
        if (temp.indexOf(randomWord[j]) > -1) {
            answerArr.push(randomWord[j]);
            remainingLetter --;
        }
        else {
            answerArr.push("_");
        }
    }
    if (answerArr.join("") == randomWord) {
        wins ++;
        randomWord  = zodiac[Math.floor(Math.random() * zodiac.length)];
        maxChance = 10;
        temp = [];
    }
    output()
}

function output() {
    document.getElementById("win").textContent = wins;
    document.getElementById("remaining").textContent = maxChance;
    document.getElementById("current-word").textContent = answerArr;
    document.getElementById("letter").textContent = temp;
}



