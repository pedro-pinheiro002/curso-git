function multiplicar (num1, num2) {
    if(num1 == 0 || num2 == 0) 
        return 0
    
    if(num2 == 1)
        return num1
    
    return num1 + multiplicar(num1, num2-1)
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))