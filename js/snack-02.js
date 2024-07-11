// Snack 02

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga

// inserisco un prompt che mi chiede una parola
let parola1 = prompt ('inserisci una parola') // string
const parola1Length =parola1.length
// console.log (parola1)
// inserisco un secondo prompt che mi chiede un'altra parola
let parola2 = prompt ('inserisci una seconda parola') //string
const parola2Length =parola2.length
// eseguo un IF che mi stampa prima la parola corta e poi quella più lunga
if (parola1Length > parola2Length) {
    console.log (parola2)
    console.log (parola1)
} else {
    console.log (parola1)
    console.log (parola2)
}