var numeros = [4, 10, 2, 5, 7, 1]
var maior = numeros[0]
for (var i = 1; i < numeros.length; i++) { 
    if (numeros[i] > maior) {
        maior = numeros[i]
    }
}
console.log("O maior número é: " + maior)
