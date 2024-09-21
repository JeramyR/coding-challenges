

//title: Prime Gaps

//tags: algorithms,functional_programming,numbers

//url: https://edabit.com/challenge/Miq47WDSYXnPDGdDP

//Description:
//A prime gap of length n is a run of n-1 consecutive composite numbers between two successive primes. See this Resource for more information.
//The prime numbers are not regularly spaced. For example gap between:
//2 and 3 is 1
//3 and 5 is 2
//7 and 11 is 4
//Create a function with following parameters:
//g (integer >= 2)
//// Gap between the consecutive primes
//
//a (integer > 2)
//// Start of the search (a inclusive)
//
//b (integer >= a)
//// End of the search (b inclusive)
//... and returns the first pair of two prime numbers spaced with a gap of g between the limits a and b.
//primeGaps(2, 3, 50) ➞ [3, 5]
//
//// Between 2 and 50 we have the following pairs of 2-gaps primes:
//// 3-5, 5-7, 11-13, 17-19, 29-31, 41-43.
//
//[3, 5] is the first pair between 3 and 50 with a 2-gap.
//Examples
//primeGaps(2, 5, 7) ➞ [5, 7]
//
//primeGaps(2, 5, 5) ➞ null
//
//primeGaps(4, 130, 200) ➞ [163, 167]
//Notes
//Return null if consecutive prime numbers are not found with the required gap.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(primeGaps(2, 3, 50), [3, 5])
//Test.assertSimilar(primeGaps(2, 5, 7), [5, 7])
//Test.assertSimilar(primeGaps(2, 5, 5), null)
//Test.assertSimilar(primeGaps(4, 130, 200), [163, 167])
//Test.assertSimilar(primeGaps(2, 100, 110), [101, 103])
//Test.assertSimilar(primeGaps(4, 100, 110), [103, 107])
//Test.assertSimilar(primeGaps(6, 100, 110), null)
//Test.assertSimilar(primeGaps(8, 300, 400), [359, 367])
//Test.assertSimilar(primeGaps(10, 300, 400), [337, 347])
//Test.assertSimilar(primeGaps(11, 30000, 100000), null)
//​
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Product Pair

//tags: algorithms,arrays,logic,loops

//url: https://edabit.com/challenge/S69CGXXeNp7J89ZLy

//Description:
//Mubashir needs your help in the simple task of multiplication of elements in a given array.
//Create a function that takes an array of integers arr and a positive integer k and returns the minimum and maximum possible product of k elements taken from the array. If enough elements are not available in the array, return null.
//Examples
//productPair([1, -2, -3, 4, 6, 7], 1) ➞ [-3, 7]
//
//productPair([1, -2, -3, 4, 6, 7], 2) ➞ [-21, 42]
//// -3*7, 6*7
//
//productPair([1, -2, -3, 4, 6, 7], 3) ➞ [-126, 168]
//// -3*6*7, 4*6*7
//
//productPair([1, -2, -3, 4, 6, 7], 7) ➞ null
//// There are only 6 elements in the array
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
// const productPair = (arr, n) => {
//     let sorted = arr.sort((a, b) => a - b)
//     let minArr = []
//     let maxArr = []

//     maxArr.push(sorted.slice(arr.length - n, Infinity))

//     minArr.push(sorted.slice(0, 1)[0], maxArr.flat().slice(maxArr.length - n))
//     if (n < 2) {
//         return minArr.flat(Infinity)
//     }
//     else if (n > sorted.length || !arr.length) {
//         return null
//     }
//     else {
//         let min = minArr.flat(Infinity).reduce((a, c) => a * c)
//         let max = maxArr.flat(Infinity).reduce((a, c) => a * c)
//         return [min, max]
//     }
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// var arr = [1, -2, -3, 4, 6, 7]
// Test.assertSimilar(productPair(arr, 1), [-3, 7])
// Test.assertSimilar(productPair(arr, 7), null)
// Test.assertSimilar(productPair([], 2), null)
// Test.assertSimilar(productPair(arr, 2), [-21, 42])
// Test.assertSimilar(productPair(arr, 3), [-126, 168])
// Test.assertSimilar(productPair(arr, 6), [1008, 1008])
// Test.assertSimilar(productPair([0,1,2,3,4], 2), [0, 12])
// Test.assertSimilar(productPair([0, 6, 3, 5, 4], 4), [0, 360])

// Test.assertSimilar(productPair([0,-1,-2,-3,-4], 2), [0, 12])
// Test.assertSimilar(productPair([0,-1,-2,-3,-4], 3), [-24, 0])
// Test.assertSimilar(productPair([-1,-2,-3,-4], 2), [2, 12])
// Test.assertSimilar(productPair([-1,-2,-3,-4], 3), [-24, -6])
// Test.assertSimilar(productPair([5, 4, 3, 3, 6], 2), [9, 30])
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fives and Threes Only

//tags: algebra,algorithms,recursion,validation

//url: https://edabit.com/challenge/2aRggQCd8XFHtdtBD

//Description:
//Starting with either 3 or 5 and given these operations:
//add 5
//multiply by 3
//You should say if it is possible to reach the target number n.
//Examples
//only5and3(14) ➞ true
//// 14 = 3*3 + 5
//
//only5and3(25) ➞ true
//// 25 = 5+5+5+5+5
//
//only5and3(7) ➞ false
//// There exists no path to the target number 7
//Notes
//You can solve this problem by recursion or algebra.

//code area
///////////////////////////////////////////////////////////////////////////
// const only5and3 = num => {
//     if (num % 5 == 0 || num % 3 == 0) {
//         return true
//     }
//     else if ( num - 5 < 0) {
//         return false
//     }
//     return only5and3(num - 5)
// }
const only5and3 = num => {
    if (num < 0) {
        return false
    }
    else if (num % 5 === 0) {
        return true
    }
    else {
        num -= 5
        if (num < 0) {
            return false
        }
        else if (num % 3 === 0) {
            let n = 1
            let cubeArr = []
            while (n < 7) {
                cubeArr.push(Math.pow(3, n))
                n++
            }
            let check = cubeArr.includes(num)
            return check ? true : only5and3(num)
        }
        else {
            return only5and3(num)
        }
    }
}
//////////////////////////////////////////////////////////////////////////

//tests:
// Test.assertEquals(only5and3(25), true)
// Test.assertEquals(only5and3(2), false)
// Test.assertEquals(only5and3(7), false)
// Test.assertEquals(only5and3(33), true)
// Test.assertEquals(only5and3(14), true)
// Test.assertEquals(only5and3(43), true)
// Test.assertEquals(only5and3(91), true)
// Test.assertEquals(only5and3(378), true)
// Test.assertEquals(only5and3(627), true)
// Test.assertEquals(only5and3(51), false)

