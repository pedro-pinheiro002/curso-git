function removerVogais (str) {
    const vogais = ["a", "e", "i", "o", "u", "A", "E", "i", "O", "U"]
    
    vogais.forEach(vogal => str = str.replace(vogal,''))

    return str
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))