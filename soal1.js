function akarKuadrat(x) {
    return (Math.sqrt(x));
  }

const prompt = require('prompt-sync')({sigint: true});

const Soal = prompt('akar kuadrat dari angka: ');

let bilanganGenap = (Soal % 2)
if ( Soal < 0 ) {
    console.log('error: Tidak bisa input bilangan negatif');
    } 
    else if ( bilanganGenap == 0 ) {
        console.log("adalah: " + akarKuadrat(Soal));
    }
    else {
        console.log('error: Tidak bisa input bilangan ganjil')
     }
    