var animalArr = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
var randomWord = animalArr[Math.floor(Math.random() * animalArr.length)];
var s;
var count = 0;
var answerArr = [];

function guess() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArr[i] = "_" ;
    }

s = answerArr.join("");
document.getElementById("answer").innerHTML = s;
}