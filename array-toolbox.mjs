export function sum(numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

export function average(numbers) {
    if (numbers.length === 0) return 0;
    return sum(numbers) / numbers.length;
}

export function unique(array) {
    return [...new Set(array)];
}

export function chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

export function intersection(firstArray, secondArray) {
    const setB = new Set(secondArray);
    const common = firstArray.filter(item => setB.has(item));
    return unique(common);
}