var zodiac = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
//ask computer choose a random word
var wins = 0;
var looses = 0;
var maxChance = 5;
var randomWord  = zodiac[Math.floor(Math.random() * zodiac.length)];
var remainingLetter = randomWord.length;
var answerArr = [];
var temp = [];
//var userGuess = [];

//for (var i = 0; i < randomWord.length; i++) {
   // answerArr.push ("_");
//}
//document.getElementById("current-word").textContent = answerArr; 


document.onkeyup = function guessWord() {
    var userGuess = event.key;
    temp.push(userGuess);
    answerArr = [];
    for (var j = 0; j < randomWord.length; j++) {
        if (temp.indexOf(randomWord[j]) > -1) {
            answerArr.push(randomWord[j]);
            remainingLetter--;
        }
        else {
            answerArr.push("_");
        }
    }
    document.getElementById("current-word").textContent = answerArr;
}



