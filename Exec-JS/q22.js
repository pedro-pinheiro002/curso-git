function funcaoDaSorte (numero) {
    let sorteio = Math.floor((Math.random() * 10) + 1)
    if(sorteio == numero)
        return `Parabéns! O número sorteado foi ${numero}`
    else
        return `Que pena! O número sorteado foi ${sorteio}` 
}

console.log(funcaoDaSorte(10))