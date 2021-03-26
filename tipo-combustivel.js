//continue a solução

let alcohol = 0;
let gasoline = 0;
let diesel = 0;
let fim=0;

while (  fim !== 1  ) {
  let lines = gets().split(" ");
  const code = Number(lines.shift());
  switch (code) {
    case 1:
      alcohol=alcohol+1;
      break;
    case 2:
      gasoline=gasoline+1;
      break;
    case 3:
    diesel=diesel+1;
      break;
    case 4:
      fim=1;
      break;
   default:
   fim=0;
  }
}

console.log("MUITO OBRIGADO");
console.log("Alcool: " + alcohol);
console.log("Gasolina: " + gasoline);
console.log("Diesel: " + diesel);
