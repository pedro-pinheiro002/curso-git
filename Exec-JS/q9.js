function repetir (elemnto, numRep) {
    let array = []

    for(let i = 0; i < numRep; ++i)
        array.push(elemnto)
    
    return array
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))
