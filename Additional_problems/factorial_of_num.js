function factorial(num) {
    if (num < 0) return null; 
    return num === 0 ? 1 : num * factorial(num - 1);
}
console.log(factorial(5)); 