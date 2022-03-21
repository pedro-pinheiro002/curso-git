function inverso(valor) {
    if(typeof valor == "boolean")
        return !valor
    
    if(typeof valor == "number")
        return -valor
    
    return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
}

console.log(inverso(true))
console.log(inverso("6"))
console.log(inverso(-2000))
console.log(inverso("programação"))

