// Snack 01

// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// Dichiaro il primo prompt
let numero1 = prompt ('inserisci un numero'); //string
numero1 = parseInt(numero1) //number
// Dichiaro il secondo prompt
let numero2 = prompt ('inserisci un secondo numero'); //string
numero2 = parseInt(numero2) //number
// Eseguo un ciclo for che mi stampa il numero più grande.
if (numero1 > numero2) {
    console.log(numero1) //number
} else {
    console.log(numero2) //number
}