function frequencyCount(arr) {
    return arr.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;
        return count;
    }, {});
}
console.log(frequencyCount([1, 2, 2, 3])); 
