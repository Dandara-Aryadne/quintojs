// Crie um array que receba 5 itens e exiba no console.
  let filmes =["12 Homens e uma Sentença", "A casa dos Espiritos", "Gilda", "Star Wars", "Senhor dos Anéis"]
  console.log (filmes)

// Utilize um método para adicionar um nome ao inicio do array.

filmes.unshift("As Bruxas de Eastwick")
console.log(filmes)

// Utilize um método para remover o último nome do array.

filmes.pop()
console.log(filmes)

// Utilize um método para adicionar dois nomes ao fim do array.

filmes.splice(5,0,"Simplesmente Amor","Dance Comigo")
console.log(filmes)

// Utilize um método para remover o primeiro nome do array.

filmes.splice(0,1)
console.log(filmes)

// Utilize um método para organizar em ordem crescente o seguinte array:

const numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort(function(a,b){
    return a-b
})console.log(numbers)