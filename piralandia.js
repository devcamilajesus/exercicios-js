
const lines = gets();
var arrEntrada = lines.split(''); 
var  sSaida="";
var iTamanho= (arrEntrada.length)-1;
var i=0;

  for (i = iTamanho; i >= 0; i--) {
    sSaida+=arrEntrada[i];

  }

console.log( sSaida);
