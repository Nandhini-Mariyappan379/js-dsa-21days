function squareNumbers(arr) {
    let sequare = []
    for (let i of arr) {
        sequare.push(i * i)
    }
    // console.log(sequare);
    return sequare
}

console.log(squareNumbers([1, 2, 3, 4, 5]));


function squareNumbersBuilt(arr) {

    let sequare = arr.map((i) => i * i)
    // console.log(sequare,'se');
    return sequare
}


console.log(squareNumbersBuilt([1, 2, 3, 4, 5]));
