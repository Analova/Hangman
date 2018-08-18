var hangman;

function Hangman() {
this.words= ["Hello"];
this.secretWord=this.getWord();
this.letters=[];
this.guessedLetter="";
this.errorsLeft=10;



}

 Hangman.prototype.getWord = function () {
  var words=this.words;
   var indexOfWord = Math.floor(Math.random()*words.length);
   return words[indexOfWord];

 };

 Hangman.prototype.checkIfLetter = function (keyCode) {
  if((keyCode)>=65 && (keyCode)<=122)
    return true;
  return false;

 };

 Hangman.prototype.checkClickedLetters = function (key) {
  if(this.letters.indexOf(key) === -1)
 return true
 return false
 };

Hangman.prototype.addCorrectLetter = function (i) {
return this.guessedLetter += this.secretWord[i].toUpperCase() ;
 };

 Hangman.prototype.addWrongLetter = function (letter) {
this.errorsLeft --
 };

Hangman.prototype.checkGameOver = function () {
if(this.errorsLeft === 0){
  true
}else{
  false
}
}


Hangman.prototype.checkWinner = function () {
  var count = 0
  for(var i = 0; i < this.secretWord.length; i++) {
    if(this.guessedLetter.includes(this.secretWord[i])) {
      count ++
    }
  }
  if (count === this.secretWord.length) {
    return true
  } else {
    return false
  }
 };

document.getElementById('start-game-button').onclick = function () {
  hangman = new Hangman();
};


document.onkeydown = function (e) {

};
