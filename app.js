//  Km da percorrere

let distanza = parseInt(prompt('Km che devi percorrere ?'))
console.log(distanza)

//  Età viaggiatore ?

let età = parseInt(prompt('La tua età ?'))
console.log(età)

//  Prezzo biglietto escluso sconto

const prezzokm = parseFloat(0.21) 

let prezzoBiglietto = distanza*prezzokm;
console.log(prezzoBiglietto)

//  Calcolo prezzo biglietto con eventualità dello sconto
//  Con visione a schermo del prezzo

const sconto20 = parseFloat(0.80)
const sconto40 = parseFloat(0.60)

if (età <= 18) {
    let prezzoFinale = prezzoBiglietto*sconto20
    console.log(prezzoFinale)
    let prezzoDefinitivo = prezzoFinale.toFixed(2)
    document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo;
}else if (età >= 65){
    let prezzoFinale = prezzoBiglietto*sconto40
    console.log(prezzoFinale)
    let prezzoDefinitivo = prezzoFinale.toFixed(2)
    document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo;
}
else {
    let prezzoDefinitivo = prezzoBiglietto.toFixed(2)
    document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo;
    console.log(prezzoDefinitivo)
}    
