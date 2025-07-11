function sumPositiveNumbers(arr) {
    let sum = 0
    for (let i of arr) {
        if (i > 0) {
            sum += i
        }
    }
    // console.log(sum);

    return sum
}

console.log(sumPositiveNumbers([-5, 3, -2, 9, -8, 7]));


function sumPositiveNumbersBuilt(arr) {

    let sum = arr.filter((i) => i > 0).reduce((acc, curr) => acc + curr, 0)

    // console.log(sum);
    return sum
}


console.log(sumPositiveNumbersBuilt([-5, 3, -2, 9, -8, 7, 0, 7]));
