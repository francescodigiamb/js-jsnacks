// snack 06
// Fate generare un numero random da 0 a 10 al computer,
//  e chiedete all’utente di inserire un suo numero.
//   Se il numero scelto dall’utente è uguale al numero del computer informate l’utente che ha vinto, altrimenti ha perso

// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
// }
const minNum = Math.ceil (0);
const maxNum = Math.floor (10);

let randomNum = Math.floor(Math.random() * (maxNum - minNum +1) + minNum);
console.log (randomNum)

let number = prompt ('inserisci un numero') //string
number = parseInt (number) //number

if (randomNum === number) {
    console.log ('you win')
} else {
    console.log ('you lose')
}