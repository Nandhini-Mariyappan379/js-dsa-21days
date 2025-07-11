function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        } else if (min > arr[i]) {
            min = arr[i]
        }
    }
    // console.log(max,min);
    // build in method

    
    return { max: max, min: min }
}

console.log(findMaxMin([2, 9, 1, 8, 0, 5]));

function findMaxMinBuiltIn(arr){

    let max = Math.max(...arr)
    let min = Math.min(...arr)

    return {Max : max, Min : min}
}

console.log(findMaxMinBuiltIn([2, 11, 1, 8, 0, 5]));
