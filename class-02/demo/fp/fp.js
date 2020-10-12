'use strict';

//pure functions
//Always returns the same output, given the same input
// Causes no side effects


function pureMultiply(a, b) {
    return a * b;
}

// Impure (console.log is a side-effect)
function impureMultiply(a, b) {
    console.log(a, b);
    return a * b;
}

///////////////////////////////////////

let ageRequired = 18;

function old(age) {
    return age >= ageRequired;
}

function pureOld(age) {
    return age >= 18;
}

// Arrays are pass by reference so the original array is muted and that is a side effect
function impureSquares(nums) {
    for(let i=0; i<nums.length;i++){
        nums[i] = nums[i] * nums[i];
    }
    return nums;
}

function squares([...nums]) {
    for(let i=0; i<nums.length;i++){
        nums[i] = nums[i] * nums[i];
    }
    return nums;
}
squares([1,2,3,4,5]);

// High Order Function

function sayHi(name) {
    
    return function() {
        console.log("hello",name);
    }
}