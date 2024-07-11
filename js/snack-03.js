// Snack-03

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let somma = 0 //string
somma =parseFloat(somma) //number

// eseguo un ciclo for che chiede all'utente un numero per 10 volte
for (let i = 0; i < 10; i++) {
    let number = prompt ('inserisci un numero') //string
    number = parseFloat(number) //number
    // faccio la somma dei numeri inseriti 
    somma = somma + number //number
    
}
// stampo la somma
console.log (somma)