function removerPropriedade (obj, propriedade) {
    const copia = Object.assign({}, obj)
    delete copia[propriedade]

    return copia
}

console.log(removerPropriedade({a: 1, b: 2}, "a"))