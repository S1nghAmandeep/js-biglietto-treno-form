// # Biglietto del treno

// - chiedere all'utente quanti chilometri vuole percorrere?
const chilometerDOMElement = document.getElementById('chilometer')
console.log(chilometerDOMElement)

// - chiedere all'utente quanti anni ha?
const discountDOMElement = document.getElementById('discount')
console.log(discountDOMElement)


const btnDOMElenment = document.getElementById('btn')
console.log(btnDOMElenment)

btnDOMElenment.addEventListener('click', function () {

    const km = parseFloat(chilometerDOMElement.value)
    console.log('chilometri ' + km)

// - definire il prezzo del biglietto in base ai chilometri

    const price = km * 0.21
    console.log('prezzo base ' + price)
})

//   - SE l'utente è minorenne applicare sconto di 20%
//     - dichiare una variabile ed applicare l'sconto in base all'utente
//     - dichiare una variabile e sottrare dal prezzo base la somma dello sconto
//   - ALTRIMENTI SE utente è over 65 anni applicare sconto di 40%
//     - dichiare una variabile ed applicare l'sconto in base all'utente
//     - dichiare una variabile e sottrare dal prezzo base la somma dello sconto
//   - ALTRIMENTI indicare il prezzo totale
// - recuperare dal DOM un elemento in base all'id
//   - stampare il prezzo del biglietto nella pagina
//   - modificare l'innerHTML con il prezzo del biglietto