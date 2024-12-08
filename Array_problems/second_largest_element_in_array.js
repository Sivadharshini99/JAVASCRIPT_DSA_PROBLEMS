function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1] || null; 
}
console.log(findSecondLargest([1, 2, 3, 4])); 
