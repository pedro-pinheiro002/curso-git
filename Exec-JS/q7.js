function estaEntre (numero, maximo, minimo, inclusivo = false) {
    if(inclusivo)
        return numero <= maximo && numero >= minimo
    else
        return numero < maximo && numero > minimo
}

console.log(estaEntre(10, 100, 50))