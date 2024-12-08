function sortByLength(arr) {
    return arr.slice().sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["apple", "kiwi", "banana", "grape"])); 
