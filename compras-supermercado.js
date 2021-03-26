// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
let totalItems =parseInt(gets());
let sLinha="";
for (var i = 0; i < totalItems; i++) {
  let itens = gets();
  let itensOrdenados = itens.split(" ").sort();
  const itensUnicos = [];
  //let itensUnicos = itensOrdenados;
  // Implemente aqui a lógica para ter os itens unicos
  //const arrUnique = [...new Set(arr)];
   let  aux = {};
    for (var x = 0; x < itensOrdenados.length; x++) {
      aux[itensOrdenados[x]] = itensOrdenados[x];
      }
    for (var key in aux) {
      itensUnicos.push(key);
  }


  console.log(itensUnicos.join(" ")+'\n');


}

