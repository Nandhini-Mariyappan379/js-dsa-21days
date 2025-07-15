// Task 1: Find All Even Numbers
// Problem:
// Return a new array that contains all even numbers from the input array.

// Input:
// [4, 7, 10, 13, 16, 19]
// Output:
// [4, 10, 16]


function findEven(arr) {
    let even = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even.push(arr[i])
        }
    }
    return even
}

function findEvenBuiltIn(arr) {
    let even = arr.filter(i => i % 2 == 0)
    return even
}

console.log(findEven([4, 7, 10, 13, 16, 19]));
console.log(findEvenBuiltIn([4, 7, 10, 13, 16, 19]));
console.log(findEven([4, 7, 10, 13, 16, 0]));



// Task 2: Find Maximum and Minimum Numbers
// Problem:
// Find the largest and smallest numbers in the array using linear search.

// Input:
// [12, 5, 3, 22, 9]
// Output:
// Max: 22, Min: 3


function findMinAndMax(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        } else if (min > arr[i]) {
            min = arr[i]
        }
    }
    return { Max: max, Min: min }
}


function findMinMaxBuilt(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    return { Max: max, Min: min }
}
console.log(findMinAndMax([12, 5, 3, 22, 0, 9, 3]));
console.log(findMinMaxBuilt([12, 5, 3, 22, 0, 9, 3]));


// Task 3: Find First and Last Occurrence of a Number
// Problem:
// If a number appears more than once, find both the first and last index where it appears.

// Input:
// [1, 2, 3, 2, 5, 2], Target = 2
// Output:
// First: 1, Last: 5


function fLOccurance(arr, target) {
    let occurance = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            occurance.push(i)
        }
    }
    if(occurance.length ==0) return 'Occurance not found'

    return { First: occurance[0], Last: occurance[occurance.length - 1] }
}

console.log(fLOccurance([1, 2, 3, 2, 5, 2], 2));


// Task 4: Find the Second Largest Number
// Problem:
// Return the second highest number in the array.

// Input:
// [10, 30, 25, 40, 35]
// Output:
// 35



function secondHighNo(arr) {
    let first = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            second = first;
            first = arr[i];
        } else if (arr[i] > second && arr[i] < first) {
            second = arr[i];
        }
    }

    // ✅ Check result after loop finishes
    if (second === -Infinity) {
        return "No second largest no";
    }

    return second;
}


console.log(secondHighNo([10, 30, 25, 40, 35]));
console.log(secondHighNo([10, 10, 10, 10, 10]));



// Task 6: Check if Array Has Any Duplicates
// Problem:
// Return true if there are any duplicate values in the array, else return false.

// Input:
// [1, 2, 3, 4, 2]
// Output:
// true (because 2 is repeated)


function checkDuplicate(arr) {
    let unique =[]
    for (let i = 0; i < arr.length; i++) {
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }

    if(unique.length == arr.length){
        return false
    }
    return true
}

console.log(checkDuplicate([1,4,2,7,8,2]));

console.log(checkDuplicate([1,4,2,7]));



function countVowels(str){

    let vowels = ['a','e','i','o','u']
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }

    return count
}

console.log(countVowels("Hello World"));






//  Given an array: [2, 5, 7, 8, 6]
// Target: 9
// Find any two numbers whose sum is equal to the target.

function findSumTarget(arr, target) {
    let sumTarget = []
    for (let i of arr) {
        let j = target - i
        if (arr.includes(j)) {
            sumTarget.push(i)
        }
    }
    return sumTarget
}

console.log(findSumTarget([2, 5, 7, 8, 6], 9));





