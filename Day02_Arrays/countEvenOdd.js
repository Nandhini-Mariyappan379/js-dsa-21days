function countEvenOdd(arr) {

    //Old Method
    let even = 0
    let odd = 0
    for (let i of arr) {
        if (i % 2 == 0) {
            even++
        } else {
            odd++
        }
    }
    return {
        old: {
            even: even,
            odd: odd
        }
    }
}


console.log(countEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8]));


function countEvenOddBuiltIn(arr){
    let even = arr.filter((i) => i % 2 == 0).length
    let odd = arr.filter((i) => i % 2 != 0).length

    return {
        Even: even,
        Odd: odd
    }
}


console.log(countEvenOddBuiltIn([1, 2, 3, 4, 5, 6, 7, 7, 7, 10, 8]));
