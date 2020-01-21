// ARRAY NECESSARI
var randomNumbers = []; //array numeri random generati
var userNumbers = []; //array numeri inseriti dall'utente
var foundNumbers = [] //arry numeri TROVATI
var found = 0; //numero di numeri trovati

// GENERO ED INSERISCO NUMERI IN ARRAY
for (var i = 0; i < 5; i++) {
  randomNumbers.push(getRandomNumber(1, 100))
}
alert('Questi sono i numeri da ricordare' + '' + randomNumbers)

// IMPOSTO TIMEOUT DI 30 secondi

setTimeout(playTheGame, 30000);

// CREO FUNZIONE GIOCO MEMORY
function playTheGame() {
  while (userNumbers.length < 5) {
    var userNumber = parseInt(prompt('inserisci qui, uno alla volta, i numeri memorizzati'))
    if (userNumbers.includes(userNumber)) {
      alert('hai già inserito questo numero')
    } else {
      userNumbers.push(userNumber)
    }
  }
  for (var i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers.includes(userNumbers[i])) {
      found++;
      foundNumbers.push(userNumbers[i])
    }
  }
  alert('hai indovinato' + ' ' + found + ' ' + 'numeri!Quelli vincenti sono' + ' ' + foundNumbers)
}


// FUNZIONE PER NUMERI RANDOM

function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
