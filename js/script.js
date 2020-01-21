
var randomNumbers = []; //array numeri random generati
var userNumbers = []; //array numeri inseriti dall'utente

// GENERO ED INSERISCO NUMERI IN ARRAY
for (var i = 0; i < 5; i++) {
  randomNumbers.push(getRandomNumber(1, 100))
}
console.log(randomNumbers);

// IMPOSTO TIMEOUT DI 30 secondi

setTimeout(askNumber, 1000);

// SE RANDOMNUMBERS INCLUDE UN ELEMENTO DI USERNUMBERS INSERISCO UN +1 TROVATO e LO PUSHO AD ARRAY DEI TROVATI

var foundNumbers = [] //arry numeri TROVATI
var found = 0; //numero di numeri trovati


// CREO FUNZIONE PROMPT INSERIMENTO numeri
function askNumber() {
  while (userNumbers.length < 5) {
    userNumbers.push(parseInt(prompt('inserisci i numeri')))
  }
  var found = 0; //numero di numeri trovati
  for (var i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers.includes(userNumbers[i])) {
      found++;
      foundNumbers.push(userNumbers[i])
    }
  }
}
console.log(randomNumbers, 'i numeri random');
console.log(userNumbers, 'numeri utente');
console.log(foundNumbers, 'numeri trovati');
console.log(found, 'quanti numeri hai trovato');
// FUNZIONE PER NUMERI RANDOM

function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
