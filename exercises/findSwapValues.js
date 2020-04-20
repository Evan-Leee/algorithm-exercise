var findSwapValues = function(array1, array2) {
    const s1 = sum(array1);
    const s2 = sum(array2);
    
    if ((s1 + s2) % 2 === 1) return [];

    const diffValues = (s1 - s2) / 2;
    const set1 = new Set(array1);
    for(let i = 0; i < array2.length; i++){
        const value2 = array2[i];
        const value1 = diffValues + value2;
        if (set1.has(value1)) {
            return [value1, value2];
        }
    }
    return [];
};