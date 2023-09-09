const multi = multiplicador =>  numero => numero * multiplicador;

const dobro = multi(2);
const triplo = multi(3);

console.log(dobro(4));
console.log(triplo(4));