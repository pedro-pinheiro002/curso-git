function filtrarNumeros (array) {
    let Narray = []

    for(let i in array)
        if(typeof array[i] == "number")
            Narray.push(array[i])
    
    return Narray
}

console.log(filtrarNumeros(["Javascript", 1, "3", "web", 20]))
console.log(filtrarNumeros(["a", "b"]))