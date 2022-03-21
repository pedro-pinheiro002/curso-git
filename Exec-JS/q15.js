function receberSomenteOsParesDeIndicesPares (array) {
    let arrayPares = []

    for(let i in array)
        if(array[i] % 2 == 0 && i % 2 == 0)
            arrayPares.push(array[i])
    
    return arrayPares
}

console.log(receberSomenteOsParesDeIndicesPares([1,2,3,4]))
console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]))