

//title: Left Shift by Powers of Two

//tags: bit_operations,math,numbers

//url: https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br

//Description:
//The left shift operation is similar to multiplication by powers of two.
//Sample calculation using the left shift operator (<<):
//10 << 3 = 10 * 2^3 = 10 * 8 = 80
//-32 << 2 = -32 * 2^2 = -32 * 4 = -128
//5 << 2 = 5 * 2^2 = 5 * 4 = 20
//Write a function that mimics (without the use of <<) the left shift operator and returns the result from the two given integers.
//Examples

//Notes
//There will be no negative values for the second parameter y.
//This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.
//Alternatively, you can solve this challenge via recursion.
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////
// const shiftToLeft = (n1, n2) => {
//     let result = n1 * Math.pow(2, n2)

//     console.log(result)
// }
//////////////////////////////////////////////////////////////////////////
// shiftToLeft(5, 2) //➞ 20
// //
// shiftToLeft(10, 3)// ➞ 80
// //
// shiftToLeft(-32, 2)// ➞ -128
// //
// shiftToLeft(-6, 5)// ➞ -192
// //
// shiftToLeft(12, 4)// ➞ 192
// //
// shiftToLeft(46, 6) //➞ 2944
// //tests:

//const opCheck = f => !`${f}`.match(RegExp('<<', 'gm'))
//Test.assertNotEquals(opCheck(shiftToLeft), false,
//    "The use of left shift operator (<<) is prohibited!")
//​
//let [numVector, resVector] = [
//  [[5, 2], [10, 3], [-32, 2], [-6, 5], [12, 4], [46, 6], [57, 0], [79, 1]],
//  [20, 80, -128, -192, 192, 2944, 57, 158]
//]
//for (let i in numVector) Test.assertEquals(shiftToLeft(...numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Smallest and Biggest Numbers

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/Q3n42rEWanZSTmsJm

//Description:
//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
//Examples
//minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
//
//minMax([2334454, 5]) ➞ [5, 2334454]
//
//minMax([1]) ➞ [1, 1]
//Notes
//All test arrays will have at least one element and are valid.

//code area
///////////////////////////////////////////////////////////////////////////
// const minMax = arr => {
//     let arrange = arr.sort((a, b) => a - b)
//     let first = arrange.slice(0, 1)
//     let last = arrange.pop()
//     let newArr = [first[0], last]

//     console.log(newArr)
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// minMax([14, 35, 6, 1, 34, 54])//, [1, 54])
// minMax([1.346, 1.6532, 1.8734, 1.8723])//, [1.346, 1.8734])
// minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345])//, [0.2345, 0.984])
// minMax([13, 72, 98, 43, 24, 65, 31])//, [13, 98])
// minMax([-54, -23, -54, -21])//, [-54, -21])
// minMax([-0.473, -0.6834, -0.1287, 0.5632])//, [-0.6834, 0.5632])
// minMax([0, 0, 0, 0])//, [0, 0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is it Time for Milk and Cookies?

//tags: dates,validation

//url: https://edabit.com/challenge/hPWnaSckJke5FXNEH

//Description:
//Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.
//Examples
//timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true
//
//timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false
//
//timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true
//Notes
//Dates are zero based (see resources).
//All test cases contain valid dates.

//code area
///////////////////////////////////////////////////////////////////////////
const timeForMilkAndCookies = date => {
    let str = date.toString()
    let reg = /Dec 24/ig
    let x = reg.test(str)

    console.log(x)
}
//////////////////////////////////////////////////////////////////////////

//tests:
// timeForMilkAndCookies(new Date(2013, 11, 24))// true)
// timeForMilkAndCookies(new Date(3000, 11, 24))// true)
// timeForMilkAndCookies(new Date(2154, 11, 11))// false)
// timeForMilkAndCookies(new Date(2010, 11, 2))//false)
// timeForMilkAndCookies(new Date(1980, 9, 24))//false)