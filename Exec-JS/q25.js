function buscarPalavrasSemelhantes (inicio, array) {
    const arrayP = []

    for(let i in array)
        if(i.includes(inicio))
            arrayP.push(i)
    
    return arrayP
}