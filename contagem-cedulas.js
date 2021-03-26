let valor = parseInt(gets());
var notas = [100, 50, 20, 10, 5,2,1];
let resto=0;
let nDivisao=0;
let nFalta =valor;
var soma=0;
for (var i = 0; i < notas.length; i++) {
  nDivisao=0;
  if (nFalta >0){
       resto=nFalta%notas[i]
         nDivisao= Math.trunc((nFalta/notas[i]));
       soma=soma+(notas[i]*nDivisao);
       nFalta=resto;

    }
    if( i==0)
    console.log(valor);
    console.log(nDivisao+" nota(s) de R$ "+notas[i]+",00");
}




  
    
