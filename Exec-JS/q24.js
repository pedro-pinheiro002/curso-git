function contarCaractere(c, str){
    let count = 0

    for(let i in str){
        if(str.charAt(i) === c)
            count++
    }

    return count
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))