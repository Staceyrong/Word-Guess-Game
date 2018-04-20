//Make variables
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
    //make an array into a string, guess right, reset the game
    if (answerArr.join("") == randomWord) {
        if (randomWord == "rat") {
            document.getElementById("image").src="https://i.pinimg.com/originals/0a/c5/bd/0ac5bd36c10d334d2b985893285caf14.jpg";
            document.getElementById("name").textContent = "Rat";
        }
        if (randomWord == "ox") {
            document.getElementById("image").src="https://images.clipartof.com/small/1200268-Black-And-White-Cute-Loving-Ox-Calf-Poster-Art-Print.jpg";
            document.getElementById("name").textContent = "Ox";
        }
        if (randomWord == "tiger") {
            document.getElementById("image").src="http://cdn.emgn.com/wp-content/uploads/2014/06/White-Tiger-Cubs-2.jpg";
            document.getElementById("name").textContent = "Tiger";
        }
        if (randomWord == "rabbit") {
            document.getElementById("image").src="https://www.suggestedpost.eu/wp-content/uploads/2017/10/cute-bunny-photos12.jpg";
            document.getElementById("name").textContent = "Rabbit";
        }
        if (randomWord == "dragon") {
            document.getElementById("image").src="https://cdn.vectorstock.com/i/1000x1000/17/70/cute-dragon-vector-2991770.jpg";
            document.getElementById("name").textContent = "Dragon";
        }
        if (randomWord == "snake") {
            document.getElementById("image").src="https://cdn.vectorstock.com/i/1000x1000/67/80/cute-snake-cartoon-vector-986780.jpg";
            document.getElementById("name").textContent = "Snake";
        }
        if (randomWord == "horse") {
            document.getElementById("image").src="https://i.pinimg.com/736x/8c/87/f1/8c87f181412dd85b618ffa21da105ed3.jpg";
            document.getElementById("name").textContent = "Horse";
        }
        if (randomWord == "goat") {
            document.getElementById("image").src="https://sharesloth.com/wp-content/uploads/2014/07/smiling-baby-goat.jpg";
            document.getElementById("name").textContent = "Goat";
        }
        if (randomWord == "monkey") {
            document.getElementById("image").src="https://s-media-cache-ak0.pinimg.com/originals/8b/28/19/8b281949da552e77305c4dd3c919294c.jpg";
            document.getElementById("name").textContent = "Monkey";
        }
        if (randomWord == "rooster") {
            document.getElementById("image").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbQ3LP--FiZEkvPNA0K1SiBdyyJBFgQz_FyXF8DDaBErKwwUit";
            document.getElementById("name").textContent = "Rooster";
        }
        if (randomWord == "dog") {
            document.getElementById("image").src="http://cdn2-www.dogtime.com/assets/uploads/2011/03/cute-dog-names.jpg";
            document.getElementById("name").textContent = "Dog";
        }
        if (randomWord == "pig") {
            document.getElementById("image").src="https://i.pinimg.com/originals/5d/cf/ba/5dcfbad7f40cb5841dfbc7c07334e15d.jpg";
            document.getElementById("name").textContent = "Pig";
        }
        wins ++;
        randomWord  = zodiac[Math.floor(Math.random() * zodiac.length)];
        maxChance = 10;
        temp = [];
    }

    output();
    //guess wrong, reset the game
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

