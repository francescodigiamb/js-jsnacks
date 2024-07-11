// Snack 04
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo un array con i nomi degli invitati
const invitati = ["Giovanni", "Luca", "Cristian", "Francesco", "Leonardo"];

// inserisco un prompt che chiede all'utente il suo nome
let nome =  prompt ('Inserisci il tuo nome')
// con la proprietà .includes controllo se il nome è presente
if (invitati.includes(nome)===true) {
    // SE presente stampo you're welcome
    console.log('You are welcome')
} else {
    // Altrimenti stampo go out
    console.log('Go out')
}

// creo un ciclo for per scorrere nell'array e cercare il nome
// for (let i=0; i < invitati.length; i++) {
//     // all'interno del ciclo for creo la condizione per vedere se il nome inserito è presente
//     if (nome === invitati[i]) {
//     // stampo in console se può o meno partecipare
//         console.log ('you are welcome')
    
//     } else {
//         console.log ('you are not welcome, go out')
//     }
// }