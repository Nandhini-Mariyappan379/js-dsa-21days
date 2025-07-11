
// Problem: Write a function reverseString(str) that returns the reversed string.

function reverseString(str) {
    //Old Method
    let result = []
    let x = str.split('')
    for (let i = x.length - 1; i >= 0; i--) {
        result.push(x[i])
    }
    //Built-in Method
    let reverseBuiltMethod = str.split('').reverse().join('')
    return {
        old: result.join(''),
        new: reverseBuiltMethod
    }
}


console.log(reverseString('NANDHINI'));
console.log(reverseString('Hello worlds'));


