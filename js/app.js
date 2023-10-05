// # Biglietto del treno


// - chiedere all'utente il suo nome?
const nameDOMElement = document.getElementById('name')
console.log(nameDOMElement)

// - chiedere all'utente quanti chilometri vuole percorrere?
const chilometerDOMElement = document.getElementById('chilometer');
console.log(chilometerDOMElement);

// - chiedere all'utente quanti anni ha?
const discountDOMElement = document.getElementById('discount');
console.log(discountDOMElement);

// conferma con il bottone
const btnDOMElenment = document.getElementById('btn');
console.log(btnDOMElenment);

const priceDomElement = document.querySelector('.price');
console.log(priceDomElement);


btnDOMElenment.addEventListener('click', function () {

    const km = parseFloat(chilometerDOMElement.value);
    console.log('chilometri ' + km);

// - definire il prezzo del biglietto in base ai chilometri

    const price = km * 0.21
    console.log('prezzo base ' + price);

    let finalPrice

//   - SE l'utente è minorenne applicare sconto di 20%
    if (discountDOMElement.value == '0') {
        const miner = (price * (20 / 100));
        console.log('minorenne ' + miner)
        finalPrice = price - miner;
        console.log(finalPrice)

//   - ALTRIMENTI SE utente è over 65 anni applicare sconto di 40%
    } else if (discountDOMElement.value == '2') {
        const overAge = (price * (40 / 100));
        console.log('over65 ' + overAge)
        finalPrice = price - overAge;
        console.log(finalPrice)

//   - ALTRIMENTI indicare il prezzo totale
    } else {  
        (discountDOMElement.value == '1')
        finalPrice = price
    }



//   - modificare l'innerHTML con il prezzo del biglietto
    priceDomElement.innerHTML = finalPrice.toFixed(2) + '&euro;'

document.querySelector('.tagname').innerHTML = nameDOMElement.value 


})


