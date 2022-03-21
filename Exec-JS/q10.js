function simboloMais (numero) {
    let str = ''
    for(let i = 0; i < numero; ++i)
        str += '+'
    
    return str
}

console.log(simboloMais(2))