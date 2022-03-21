function somarNumeros (array) {
    let soma = 0
    
    for(let i in array)
        soma += array[i]
    
    return soma
}

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))