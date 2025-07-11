/* Problem: Write a function sumN(n) that returns the sum of first n natural numbers. */

function sumOfNaturalNumber(n) {
    if (n == 0) {
        return "It not a natural number"
    }
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    // console.log(sum);
    //Built-in Method
    let BuiltNatural = (n * (n + 1)) / 2;
    return {
        old: sum,
        new: BuiltNatural
    }

}

console.log(sumOfNaturalNumber(5));
console.log(sumOfNaturalNumber(0));
