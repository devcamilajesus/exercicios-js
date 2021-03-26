//const input = require('fs').readFileSync('/dev/stdin', 'utf8');
//const lines = input.split('\n');
const inputLinhas = gets();
const lines = inputLinhas.split('\n');
const  iEntrada  = Number(lines.shift()); 
const inputVotosRafael = gets();
const lines2= inputVotosRafael.split('\n');
const  iVotosRafael =Number(lines2.shift());
let    sVencedor ="S";
var   iQtdEntradas = iEntrada-2;
 
for (var i = 1; i <= iQtdEntradas; i++) {
   let iVotos = Number(gets());
         if (iVotosRafael<iVotos) {
           sVencedor="N";
          break;   

        } 
        
    
  }
 

console.log(sVencedor);

