function menorNumero(array) {
    let menor = array[0]

    for(let i in array)
        if(array[i] < menor)
            menor = array[i]
    
    return menor
}