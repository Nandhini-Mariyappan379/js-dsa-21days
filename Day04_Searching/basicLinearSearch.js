// Problem:
// You are given a list of numbers. Check if a specific number exists in the list or not.

// Input Example:
// List: [4, 8, 15, 23, 42]
// Target: 15

// Expected Output:
// Element found or Element not found


function numberExists(arr,target){

    for(let i =0; i< arr.length ; i++){
        if(arr[i] == target){
            return `Element found ${i}`
        }
    }

    return "Element not found"
}

console.log(numberExists([4, 8, 15, 23, 42],15));
console.log(numberExists([4, 8, 16, 23, 42],15));



// 🔹 Task 2: Find the Index of a Value
// Problem:
// Return the position (index) of a given element in the list. If not found, return -1.

// Input Example:
// List: [3, 6, 9, 12]
// Target: 9

// Expected Output:
// 2 (because 9 is at index 2)


function findIndex(arr,target){

    for(let i =0; i< arr.length ; i++){
        if(arr[i] == target){
            return i
        }
    }
    return "Not found an element"
}


console.log(findIndex([3, 6, 9, 12],9),'find Index');
console.log(findIndex([3, 6, 8, 12],9),'find Index');



//  Task 3: Count How Many Times a Value Occurs
// Problem:
// Count how many times a specific number appears in the array.

// Input Example:
// List: [1, 3, 1, 4, 1, 5]
// Target: 1

// Expected Output:
// 3 (since 1 appears 3 times)


function countNumber(arr,target){
    let count =0
    for(let i =0; i < arr.length; i++){
        if(arr[i] == target){
            count ++
        }
    }
    return count
}

console.log(countNumber([1, 3, 1, 4, 1, 5],1));








//  Task 4: Check if a String Exists in a List
// Problem:
// Check if a given word exists in a list of strings.

// Input Example:
// List: ["apple", "banana", "mango", "grape"]
// Target: "mango"

// Expected Output:
// Found or Not found




function stringExits(arr,target){
    //Built in method
    console.log(arr.includes('mango'));

    for(let i =0; i < arr.length; i++){
        if(arr[i] == target){
            return 'Found'
        }
    }

    //Built in method

    
    return 'Not found'
}

console.log(stringExits(["apple", "banana", "mango", "grape"],'mango'));


// 🔹 Task 5: Find the First Even Number
// Problem:
// Find and return the first even number in the list.

// Input Example:
// List: [1, 3, 7, 10, 13]

// Expected Output:
// 10


function firstEven(arr){
    //Built - in method

    let firstEven = arr.find((i)=> i % 2 ==0)
    console.log(firstEven);
    
    for(let i =0; i< arr.length ; i++){
        if(arr[i] %2 == 0){
            return arr[i]
        }
    }
    
}


console.log(firstEven([1, 3, 7, 10, 13,8]));


