// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

let totalItems = parseInt(gets());
let itensPares = [];
let itensImpares = [];


for (let i = 0; i < totalItems; i++) {
  let iNumero  =parseInt(gets());
    if (iNumero % 2 === 0){
        itensPares.push(iNumero); 
        // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

     } else{
          itensImpares.push(iNumero);
          // O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

      
       
     }
    
}

function ordemCrescente(a, b) {
  return (a - b);
}


function ordemDecrescente(a, b) {
  return (b - a);
}
itensPares.sort(ordemCrescente);
itensImpares.sort(ordemDecrescente);


console.log(itensPares.join('\n'));
console.log(itensImpares.join('\n'));






