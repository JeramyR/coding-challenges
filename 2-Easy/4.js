

//title: Number of Squares in an N * N Grid

//tags: math,recursion

//url: https://edabit.com/challenge/RGQXN4TG2CQoBAReQ

//Description:
//Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.
//Examples
//numberSquares(2) ➞ 5
//
//numberSquares(4) ➞ 30
//
//numberSquares(5) ➞ 55
//Explanation
//If n = 0 then the number of squares is 0
//If n = 1 then the number of squares is 1 + 0 = 1
//If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
//If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14
//As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.
//Notes
//Input is a positive integer.
//Square pyramidal number.

//code area
///////////////////////////////////////////////////////////////////////////
// const numberSquares = num => {
//     let x = 0
//     do {
//         x += Math.pow(num, 2)
//         num--
//     }
//     while (num > 0)

//     return x
// }


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(numberSquares(3), 14)
// Test.assertEquals(numberSquares(10), 385)
// Test.assertEquals(numberSquares(12), 650)
// Test.assertEquals(numberSquares(5), 55)
// Test.assertEquals(numberSquares(9), 285)
// Test.assertEquals(numberSquares(11), 506)
// Test.assertEquals(numberSquares(15), 1240)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum of Resistance in Series Circuits

//tags: arrays,loops,math,physics

//url: https://edabit.com/challenge/JDkyQJqNfJNhvjmRW

//Description:
//When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:
//RT = R1 + R2 + R3 ...
//Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).
//Examples
//seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"
//
//seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"
//
//seriesResistance([0.5, 0.5]) ➞ "1.0 ohm"
//Notes
//All inputs will be valid.
//Notice the singular ohm for values <= 1.
//This challenge was inspired by Joshua Señoron's Python Sum of Resistance in Parallel Circuits challenge. You can find it here.

//code area
///////////////////////////////////////////////////////////////////////////
// const seriesResistance = arr => {
//     let val = arr.reduce((acc, cur) => acc + cur, 0)

//         if ( val > 1) {
//             return `${val} ohms` 
//         }
//         else {
//             return `${val} ohm`
//         } 

// }
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(seriesResistance([1, 5, 6, 3]), "15 ohms")
// Test.assertEquals(seriesResistance([0.2, 0.3, 0.4]), "0.9 ohm")
// Test.assertEquals(seriesResistance([10,12, 1, 10]), "33 ohms")
// Test.assertEquals(seriesResistance([10,13, 3.8, 20, 10]), "56.8 ohms")
// Test.assertEquals(seriesResistance([0.5, 0.5]), "1 ohm")
// Test.assertEquals(seriesResistance([16, 30, 22.8, 4]), "72.8 ohms")
// Test.assertEquals(seriesResistance([20, 15, 32.5, 2]), "69.5 ohms")
// Test.assertEquals(seriesResistance([52, 22, 20, 30]), "124 ohms")
// Test.assertEquals(seriesResistance([10, 12, 32, 4.9, 5, 6, 71]), "140.9 ohms")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Largest Swap

//tags: logic,numbers,validation

//url: https://edabit.com/challenge/hD3euqPHM82Cbr7R8

//Description:
//Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
//To illustrate:
//largestSwap(27) ➞ false
//
//largestSwap(43) ➞ true
//If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.
//Examples
//largestSwap(14) ➞ false
//
//largestSwap(53) ➞ true
//
//largestSwap(99) ➞ true
//Notes
//Numbers with two identical digits (third example) should yield true (you can't do better).

//code area
///////////////////////////////////////////////////////////////////////////
const largestSwap = num => {
    let x = num.toString()
    let y = num.toString().split('').reverse().join('')
    
    if (num < +y) {
        console.log( `${x} < ${y}, so not largest swap`)
    }
    if (num > +y) {
        console.log( `${x} > ${y}, so largest swap.`) }
}


//////////////////////////////////////////////////////////////////////////

//tests:

// largestSwap(27)//, false, '27 < 72, so not largest swap.')
// largestSwap(43)//, true, '43 > 34, so largest swap.')
// largestSwap(14)//, false, '14 < 41, so not largest swap.')
// largestSwap(53)//, true, '53 > 35, so largest swap.')
// largestSwap(99)//, true, 'Cannot do better, so largest swap.')

