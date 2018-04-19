var zodiac = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
var randomWord  = zodiac[Math.floor(Math.random() * zodiac.length)];
var wins = 0;
var looses = 0;
var maxChance = 10;
var answerArr = [];
var temp = [];

//make page show underscores with random word length
for (var i = 0; i < randomWord.length; i++) {
    answerArr.push ("_");
}
output();


document.onkeyup = function guessWord() {
    var userGuess = event.key;
    answerArr = [];
    //guess wrong letter show in the page and if enter same letter several times, the maxchance won't be counted.
    if (temp.indexOf(userGuess) == -1) {
        temp.push(userGuess);
        maxChance --;
    }
    // push the right letter into the "_", others still show "_"
    for (var j = 0; j < randomWord.length; j++) {
        if (temp.indexOf(randomWord[j]) > -1) {
            answerArr.push(randomWord[j]);
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

    output();

    if (maxChance == 0) {
        looses++;
        randomWord  = zodiac[Math.floor(Math.random() * zodiac.length)];
        temp = [];
        maxChance = 10;
    }
}

function output() {
    document.getElementById("win").textContent = wins;
    document.getElementById("lose").textContent = looses;
    document.getElementById("remaining").textContent = maxChance;
    document.getElementById("current-word").textContent = answerArr;
    document.getElementById("letter").textContent = temp;
}



