

//title: Seven Boom!

//tags: arrays,loops,numbers,regex

//url: https://edabit.com/challenge/6R6gReGTGwzpwuffD

//Description:
//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
//Examples
//sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
//// 7 contains the number seven.
//
//sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
//// None of the items contain 7 within them.
//
//sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
//// 97 contains the number seven.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
const sevenBoom = arr => {
    let joined = arr.join('')
    let boom = false

    for (let i = 0; i < joined.length; i++) {
        if (joined.charCodeAt(i) === 55) {
            boom = true
        }
    }

    return boom ? "Boom!" : "there is no 7 in the array"
}
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(sevenBoom([2, 6, 7, 9, 3]), "Boom!")
// Test.assertEquals(sevenBoom([33, 68, 400, 5]), "there is no 7 in the array")
// Test.assertEquals(sevenBoom([86, 48, 100, 66]), "there is no 7 in the array")
// Test.assertEquals(sevenBoom([76, 55, 44, 32]), "Boom!")
// Test.assertEquals(sevenBoom([35, 4, 9, 37]), "Boom!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Tower of Hanoi

//tags: algorithms,games,interview,math,numbers

//url: https://edabit.com/challenge/3ZtykTsx3GSoPHyBb

//Description:
//There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. To play the game or learn more about the Tower of Hanoi, check the Resources tab.
//
//Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.
//Examples
//towerHanoi(3) ➞ 7
//
//towerHanoi(5) ➞ 31
//
//towerHanoi(0) ➞ 0
//Notes
//The amount of discs is always a positive integer.
//1 disc can be changed per move.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(towerHanoi(3), 7)
//Test.assertEquals(towerHanoi(5), 31)
//Test.assertEquals(towerHanoi(8), 255)
//Test.assertEquals(towerHanoi(19), 524287)
//Test.assertEquals(towerHanoi(9), 511)
//Test.assertEquals(towerHanoi(13), 8191)
//Test.assertEquals(towerHanoi(0), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pronic Number

//tags: loops,math,numbers,validation

//url: https://edabit.com/challenge/c8cLz2vX6NiBKRYmm

//Description:
//A pronic number (or otherwise called as heteromecic) is a number which is a product of two consecutive integers, that is, a number of the form n(n + 1). Create a function that determines whether a number is pronic or not.
//Examples
//isHeteromecic(0) ➞ true
//// 0 * (0 + 1) = 0 * 1 = 0
//
//isHeteromecic(2) ➞ true
//// 1 * (1 + 1) = 1 * 2 = 2
//
//isHeteromecic(7) ➞ false
//
//isHeteromecic(110) ➞ true
//// 10 * (10 + 1) = 10 * 11 = 110
//
//isHeteromecic(136) ➞ false
//
//isHeteromecic(156) ➞ true
//Notes
//A recursive version of this challenge can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////
const isHeteromecic = par1 => {
    let x = Math.floor(Math.sqrt(par1))
    let num = x * (x + 1)

    return num === par1 ? true : false
}
//////////////////////////////////////////////////////////////////////////

//tests:

// let [numVector, resVector] = [
//  [0, 2, 7, 110, 136, 156, 182, 218, 250, 272, 306, 362, 380, 422, 462, 600],
//  [true, true, false, true, false, true, true, false, false, true, true, false, true, false, true, true]
// ]
// for (let i in numVector) Test.assertEquals(isHeteromecic(numVector[i]), resVector[i])


//title: makin some big ol' nums
//tags: algebra,logic,math
//url: https://www.dakotaMadeThisChallenge.bruh/
//Description:
// This challenge takes in strings of numbers that are in exponential form and returns a string representing the full number
//Examples
//expandedNumber('1e+0') ➞ '1'
//
//expandedNumber('1e+10') ➞ '10000000000'
//
//expandedNumber('2.39624e+30') ➞ '2396240000000000000000000000000'
//Notes
//its all about moving the decimal point
//code area
///////////////////////////////////////////////////////////////////////////
// delete infoObj.groups
// delete infoObj.deciInfo.groups
// delete infoObj.deciInfo.input
// delete infoObj[0]
// const expandedNumber = str => {
//     let deci = /\./.exec(str), posNeg = /\+|\-/.exec(str)
//     let infoObj = Object.create(null)

//     for (let key in posNeg) {
//         infoObj = Object.assign({}, posNeg)
//         let sign = infoObj[0], copy = infoObj.groups
//         infoObj.sign = sign
//         infoObj.deciInfo = copy
//         delete infoObj.groups
//         delete infoObj[0]

//         deci ?
//             infoObj.deciInfo = Object.assign({}, deci) : delete infoObj.deciInfo
//         infoObj.deciInfo ?
//             delete infoObj.deciInfo.groups : null
//     }
//     let newStr = ''

//     for (let key in infoObj) {
//         if (key === 'deciInfo') {
//             if (infoObj.sign === '+') {
//                 let num = infoObj.deciInfo.input.match(/\w/g).join('')
                
//                 console.log(num)
//             }
//             else {

//             }
//         }
//         else if (key !== 'deciInfo') {

//             if (infoObj.sign === '+') {
//                 let ind = infoObj.index, inp = infoObj.input
//                 newStr = inp.slice(0, ind - 1) + '0'.repeat(inp.slice(ind + 1))
//             }
//         }
//     }
    // console.log(infoObj)
    // console.log(newStr)
    // return newStr
// }
//////////////////////////////////////////////////////////////////////////
//tests:
// Test.assertEquals(expandedNumber('1e+0'), '1')
// Test.assertEquals(expandedNumber('1e+10'), '10000000000')
// Test.assertEquals(expandedNumber('5e+10'), '50000000000')
// Test.assertEquals(expandedNumber('3.45837e+2'), '345.837')
// Test.assertEquals(expandedNumber('3.45837e+5'), '345837')
// Test.assertEquals(expandedNumber('3.45837e-5'), '0.0000345837')
// Test.assertEquals(expandedNumber('2.39624e+30'), '2396240000000000000000000000000')
// Test.assertEquals(expandedNumber('2.39624e-20'), '0.0000000000000000000239624')
// Test.assertEquals(expandedNumber('7.0442342554699802296833026461637e+35'),`704423425546998022968330264616370000`)