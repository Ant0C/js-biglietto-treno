//  Nome viaggiatore
let nome = prompt('Il tuo nome')
document.getElementById("nomeviaggiatore").innerHTML = "Nome Viaggiatore:" + " " + nome;
console.log(nome)

//  Cognome viaggiatore
let cognome = prompt('Il tuo cognome')
document.getElementById("cognomeviaggiatore").innerHTML = "Cognome Viaggiatore:" + " " + cognome;
console.log(cognome)

//  Km da percorrere

let distanza = parseInt(prompt('Km che devi percorrere'))
document.getElementById("kmpercorsi").innerHTML = "Km percorsi:" + " " + distanza + "Km";
console.log(distanza)

//  Età viaggiatore ?

let età = parseInt(prompt('La tua età'))
console.log(età)

//  Prezzo biglietto escluso sconto

const prezzokm = parseFloat(0.21) 

let prezzoBiglietto = distanza*prezzokm;
document.getElementById("prezzonormale").innerHTML = "Prezzo base:" + " " + prezzoBiglietto + "€";
console.log(prezzoBiglietto)

//  Calcolo prezzo biglietto con eventualità dello sconto
//  Con visione a schermo del prezzo

const scontoMinori = parseFloat(0.80)
const scontoPensionati = parseFloat(0.60)

if (età <= 18) {
    let prezzoFinale = prezzoBiglietto*scontoMinori
    const sconto20 = scontoMinori*100
    document.getElementById("sconto").innerHTML = "Sconto Biglietto:" + " " + sconto20 + "%";
    let prezzoDefinitivo = prezzoFinale.toFixed(2)
    document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo + "€";
    console.log(prezzoFinale)
}else if (età >= 65){
    let prezzoFinale = prezzoBiglietto*scontoPensionati
    const sconto40 = scontoPensionati*100
    document.getElementById("sconto").innerHTML = "Sconto Biglietto:" + " " + sconto40 + "%";
    let prezzoDefinitivo = prezzoFinale.toFixed(2)
    document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo + "€";
    console.log(prezzoFinale)
}
else {
    let prezzoDefinitivo = prezzoBiglietto.toFixed(2)
    document.getElementById("sconto").innerHTML = "Sconto Biglietto:" + " " + "Nessuno sconto per te";
    document.getElementById("prezzo").innerHTML = "Prezzo Biglietto:" + " " + prezzoDefinitivo + "€";
    console.log(prezzoDefinitivo)
}    
