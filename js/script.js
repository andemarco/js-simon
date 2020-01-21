// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

// ARRAY in cui inserire i numeri random generati
var randomNumbers = [];
// GENERO ED INSERISCO NUMERI IN ARRAY
for (var i = 0; i < 5; i++) {
  randomNumbers.push(getRandomNumber(1, 100))
}
console.log(randomNumbers);

// IMPOSTO TIMEOUT DI 30 secondi



// CREO FUNZIONE PROMPT INSERIMENTO numeri
var userNumbers = [];
for (var i = 0; i < 5; i++) {
  userNumbers.push(parseInt(prompt('inserisci i numeri')))
}
console.log(userNumbers);
// FUNZIONE PER NUMERI RANDOM
function getRandomNumber (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
