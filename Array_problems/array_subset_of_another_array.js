function isSubset(superset, subset) {
    return subset.every((elem) => superset.includes(elem));
}
console.log(isSubset([1, 2, 3, 4], [2, 3])); 
