

//title: Combinations

//tags: algorithms,numbers

//url: https://edabit.com/challenge/tRx22rECqK4dTJTg8

//Description:
//Create a function that takes a variable number of arguments, each argument representing the number of items in a group. The function should return the number of permutations (combinations) of choices you would have if you selected one item from each group.
//Examples
//combinations(2, 3) ➞ 6
//
//combinations(3, 7, 4) ➞ 84
//
//combinations(2, 3, 4, 5) ➞ 120
//Notes
//Don't overthink this one.
//Input may include the number zero.

//code area
///////////////////////////////////////////////////////////////////////////
const combinations = (...arg) => {
    let arr = arg
    let count = 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            continue
        }
        else {
            count *= arr[i]
        }
    }
    return count
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(combinations(2), 2)
// Test.assertEquals(combinations(2, 3), 6)
// Test.assertEquals(combinations(3, 5), 15)
// Test.assertEquals(combinations(5, 6, 7), 210)
// Test.assertEquals(combinations(5, 5, 5, 5), 625)
// Test.assertEquals(combinations(3, 6, 9), 162)
// Test.assertEquals(combinations(2, 3, 4, 5, 6, 7, 8, 9, 10), 3628800)
// Test.assertEquals(combinations(4, 5, 6), 120)
// Test.assertEquals(combinations(5, 6, 7, 8), 1680)
// Test.assertEquals(combinations(6, 7, 0), 42)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check If the Brick Fits through the Hole

//tags: conditions,geometry,math,validation

//url: https://edabit.com/challenge/ixdXLyopP7c4aPXqx

//Description:
//Write the function that takes three dimensions of a brick: height(a), width(b) and depth(c) and returns true if this brick can fit into a hole with the width(w) and height(h).
//Examples
//doesBrickFit(1, 1, 1, 1, 1) ➞ true
//
//doesBrickFit(1, 2, 1, 1, 1) ➞ true
//
//doesBrickFit(1, 2, 2, 1, 1) ➞ false
//Notes
//You can turn the brick with any side towards the hole.
//We assume that the brick fits if its sizes equal the ones of the hole (i.e. brick size should be less than or equal to the size of the hole, not strictly less).
//You can't put a brick in at a non-orthogonal angle.

//code area
///////////////////////////////////////////////////////////////////////////
// not working
const doesBrickFit = (a, b, c, w, h) => {
    let arr1 = [a, b, c].sort((a, b) => a - b)
    let arr2 = [w, h].sort((a, b) => a - b)
    let count = 0
    let i = 0
    let j = 0
    let x
    let y

    while (arr2.length > 0) {
        if (arr1.length > 0) {
            x = arr1[i]
            y = arr2[j]
            if (x <= y) {
                arr1.shift()
                arr2.shift()
                count++
            }
            else {
                arr1.shift()
            }
        }
        else {
            return count > 1 ? true : false
        }
    }
    return count > 1 ? true : false
}

//DAKOTA
// const doesBrickFit = (a, b, c, w, h) => {
//     let brick = [a, b, c]
//     let hole = [w, h]

//     let allPossibleAngles = []

//     for (let i = 0; i < brick.length - 1; i++) {
//         for (let j = i + 1; j < brick.length; j++) {
//             allPossibleAngles.push([brick[i], brick[j]])
//         }
//     }
//     console.log(allPossibleAngles)
//     // console.log(allPossibleAngles.find(e =>(e[0] >= hole[0] &&e[1] >= hole[1])||(e[1] >= hole[0] &&e[0] >= hole[1])))
//     return allPossibleAngles
//         .find(e =>
//             (
//                 e[0] <= hole[0] &&
//                 e[1] <= hole[1]
//             ) ||
//             (
//                 e[1] <= hole[0] &&
//                 e[0] <= hole[1]
//             )
//         ) ? true : false
// }
////////////////////////////////////////////////////////////////////////
//tests:



// Test.assertEquals(doesBrickFit(1, 2, 3, 4, 5), false)
// Test.assertEquals(doesBrickFit(1, 1, 1, 1, 1), true)
// Test.assertEquals(doesBrickFit(1, 2, 1, 1, 1), true)
// Test.assertEquals(doesBrickFit(1, 2, 2, 1, 1), false)
// Test.assertEquals(doesBrickFit(1, 2, 2, 1, 2), true)
// Test.assertEquals(doesBrickFit(1, 2, 2, 2, 1), true)
// Test.assertEquals(doesBrickFit(2, 2, 2, 1, 2), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Positive Dominant

//tags: arrays,validation

//url: https://edabit.com/challenge/7pkKPYtTJzpxRMckZ

//Description:
//An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.
//Examples
//isPositiveDominant([1, 1, 1, 1, -3, -4]) ➞ false
//// There is only 1 unique positive value (1).
//// There are 2 unique negative values (-3, -4).
//
//isPositiveDominant([5, 99, 832, -3, -4]) ➞ true
//
//isPositiveDominant([5, 0]) ➞ true
//
//isPositiveDominant([0, -4, -1]) ➞ false
//Notes
//0 counts as neither a positive nor a negative value.

//code area
///////////////////////////////////////////////////////////////////////////
const isPositiveDominant = arr => {
    const set = new Set(arr)
    let arr1 = Array.from(set)
    let count = 0

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === 0) {
            continue
        }
        arr1[i] > 0 ? count++ : count--
    }

    return count > 0 ? true : false
}


//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(isPositiveDominant([1, 1, 1, 1, -3, -4]), false)
// Test.assertEquals(isPositiveDominant([5, 99, 832, -3, -4]), true)
// Test.assertEquals(isPositiveDominant([5, 0]), true)
// Test.assertEquals(isPositiveDominant([0, -4, -1]), false)
// Test.assertEquals(isPositiveDominant([1, 2, 3, -1]), true)
// Test.assertEquals(isPositiveDominant([1, 0, 0, -1]), false)
// Test.assertEquals(isPositiveDominant([5, 4, 3, 0, 0, -1, -1, -2, -2]), true)
// Test.assertEquals(isPositiveDominant([52, 52, 52, -3, 2, 2, 2, -4]), false)
// Test.assertEquals(isPositiveDominant([3, 3, 3, 3, -1, -1, -1]), false)

