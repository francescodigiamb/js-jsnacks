// snack 07
// Scrivere un programma che stampi la tabellina del 2, fino al numero 1000.
// Modificate poi il programma in modo che venga chiesto all’utente il numero massimo consentito,
// e stampare tutta la tabellina del 2 fino al numero inserito.

let number2 = 0;

for ( let i=0; i<500; i++) {    
    number2 = number2 + 2
    console.log (number2)
}

let number =0;
let ciclo = prompt('inserisci il numero massimo della tabellina') //string
ciclo = parseInt(ciclo) //number
 
for ( let i=0; i<ciclo; i++) {    
    number = number + 2
    console.log (number)
}