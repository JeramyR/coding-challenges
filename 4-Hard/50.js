

//title: The Missing Link of an Arithmetic Progression

//tags: algorithms,numbers

//url: https://edabit.com/challenge/M6hcm6ezCoRBbANQr

//Description:
//Your function will get an array with a number sequence. However, one item will be missing. It's your job to find out which one is not in the array.
//To illustrate, given the array [1, 3, 4, 5], 2 is missing so the output must be 2.
//Examples
//missing([1, 3, 4, 5]) ➞ 2
//
//missing([2, 4, 6, 8, 10, 14, 16]) ➞ 12
//
//missing([1.5, 2, 3]) ➞ 2.5
//Notes
//The missing item will never be the smallest or largest number in the array.
//In every array, exactly one item is missing.

//code area
///////////////////////////////////////////////////////////////////////////
const missing = arr => {
    let diffArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        diffArr.push(arr[i + 1] - arr[i])
    }

    let max = Math.max(...diffArr)
    let min = Math.min(...diffArr)
    let index = diffArr.indexOf(max)

    return arr[index] + min
}
//////////////////////////////////////////////////////////////////////////

//tests:

// [
//      [[1, 3, 4, 5], 2],
//      [[2, 4, 6, 8, 10, 14, 16], 12],
//      [[12, 15, 18, 21, 24, 30, 33], 27],
//      [[0, 60, 180], 120],
//      [[-1.25, 1.25, 2.5], 0],
//      [[1, 19, 28], 10],
//      [[100, 500, 900, 1300, 2100, 2500, 2900], 1700],
//     [[1.5, 2, 3], 2.5]
// ].forEach(x => Test.assertSimilar(missing(x[0]), x[1]))

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Learn Lodash (1): Intersection of Arrays

//tags: arrays

//url: https://edabit.com/challenge/96PKn2siDra5D7oPD

//Description:
//Write a function that creates an array of values found within all given arrays. The first array will serve as the base from which the remaining arrays will be checked to see if they have the matching values. If they do they will be added to the new array which will return only unique values showing the "intersecting" values of all arrays.
//The actual intersection lodash function uses "Same Value Zero" comparison which means that it only works on strings and numbers. To make this challenge more difficult I've included objects to help you determine how to compare them.
//Examples
//intersection([1, 2, 3], [3, 4, 5], [2, 9, 9]) ➞ [2, 3]
//// Both 2 and 3 are in the first array and can also be found in the others.
//Notes
//Do not attempt to import lodash; you are simply writing your own version.
//This entire series of challenges can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(intersection([1,2,3], [3,4,5],[3,6,7]), [3])
//Test.assertSimilar(intersection(["cat","dog","mouse"], ["cat","dog","bat"],["cat","dog","fly"]), ["cat","dog"])
//Test.assertSimilar(
//  intersection(
//    [
//      {
//        color: "red",
//        make: "toyota",
//      },
//      {
//        color: "blue",
//        make: "mazda",
//      },
//    ],
//    [
//      {
//        color: "green",
//        make: "tesla",
//      },
//      {
//        color: "blue",
//        make: "mazda",
//      },
//    ],
//    [

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Prime Numbers

//tags: algebra,arrays,numbers

//url: https://edabit.com/challenge/6s8wwiJrbjWfSGeph

//Description:
//Create a function that takes an array of numbers and returns the sum of all prime numbers in the array.
//Examples
//sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 17
//
//sumPrimes([2, 3, 4, 11, 20, 50, 71]) ➞ 87
//
//sumPrimes([]) ➞ 0
//Notes
//Given numbers won't exceed 101.
//A prime number is a number which has exactly two divisors (1 and itself).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumPrimes([1,2,3,4,5,6,7,8,9,10]), 17)
//Test.assertEquals(sumPrimes([2,3,4,11,20,50,71]), 87)
//Test.assertEquals(sumPrimes([19,21,24,27,30,37]), 56)
//Test.assertEquals(sumPrimes([69,79,87,97,101]), 277)
//Test.assertEquals(sumPrimes([53,59,28,50,45,33,61]), 173)
//Test.assertEquals(sumPrimes([]), 0)
//Test.assertEquals(sumPrimes([11,11,11,11,11,22,22,22]), 55)
//Test.assertEquals(sumPrimes([67,24,58,28,71,73,99]), 211)

