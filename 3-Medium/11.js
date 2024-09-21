

//title: Travelling Salesman Problem

//tags: algorithms,logic,math,recursion

//url: https://edabit.com/challenge/r453y7c3vBQz4Rrbn

//Description:
//A salesman has a number of cities to visit. He wants to calculate the total number of possible paths he could take, visiting each city once before returning home. Return the total number of possible paths a salesman can travel, given n cities.
//If we have cities A, B and C, possible paths would be:
//A -> B -> C
//A -> C -> B
//B -> A -> C
//B -> C -> A
//C -> B -> A
//C -> A -> B
//... which gives us 6 as the possible number of paths.
//Examples
//paths(4) ➞ 24
//
//paths(1) ➞ 1
//
//paths(9) ➞ 362880
//Notes
//Inspired by a video from Dr. Peter Uelkes.
//This challenge is describing a factorial.

//code area
///////////////////////////////////////////////////////////////////////////

// n!/(n-r)!
// n! = n
// (n - r)! = (num - r)! = nr
// n / nr
// const paths = (num, r) => {
//     let total = num
//     let n = 1
//     let nMinusR = num - r
//     let nr = 1

//     while (total > 1) {
//         n *= total
//         total--
//     }

//     while (nMinusR > 1) {
//         nr *= nMinusR
//         nMinusR--
//     }
//     return n / nr
// }
//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(paths(1), 1)
// Test.assertEquals(paths(2), 2)
// Test.assertEquals(paths(3), 6)
// Test.assertEquals(paths(4), 24)
// Test.assertEquals(paths(5), 120)
// Test.assertEquals(paths(6), 720)
// Test.assertEquals(paths(7), 5040)
// Test.assertEquals(paths(8), 40320)
// Test.assertEquals(paths(5, 2), 20)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Folding a Piece of Paper

//tags: algebra,formatting,math,numbers

//url: https://edabit.com/challenge/WCMC8X9z7758hq4gP

//Description:
//Create a function that returns the thickness (in meters) of a piece of paper after folding it n number of times. The paper starts off with a thickness of 0.5mm.
//Examples
//numLayers(1) ➞ "0.001m"
//// Paper folded once is 1mm (equal to 0.001m)
//
//numLayers(4) ➞ "0.008m"
//// Paper folded 4 times is 8mm (equal to 0.008m)
//
//numLayers(21) ➞ "1048.576m"
//// Paper folded 21 times is 1048576mm (equal to 1048.576m)
//Notes
//There are 1000mm in a single meter.
//Don't round answers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numLayers(0), "0.0005m")
//Test.assertEquals(numLayers(1), "0.001m")
//Test.assertEquals(numLayers(2), "0.002m")
//Test.assertEquals(numLayers(3), "0.004m")
//Test.assertEquals(numLayers(4), "0.008m")
//Test.assertEquals(numLayers(5), "0.016m")
//Test.assertEquals(numLayers(6), "0.032m")
//Test.assertEquals(numLayers(7), "0.064m")
//Test.assertEquals(numLayers(8), "0.128m")
//Test.assertEquals(numLayers(9), "0.256m")
//Test.assertEquals(numLayers(10), "0.512m")
//Test.assertEquals(numLayers(11), "1.024m")
//Test.assertEquals(numLayers(12), "2.048m")
//Test.assertEquals(numLayers(13), "4.096m")
//Test.assertEquals(numLayers(14), "8.192m")
//Test.assertEquals(numLayers(15), "16.384m")
//Test.assertEquals(numLayers(16), "32.768m")
//Test.assertEquals(numLayers(17), "65.536m")
//Test.assertEquals(numLayers(18), "131.072m")
//Test.assertEquals(numLayers(19), "262.144m")
//Test.assertEquals(numLayers(20), "524.288m")
//Test.assertEquals(numLayers(21), "1048.576m")
//Test.assertEquals(numLayers(22), "2097.152m")
//Test.assertEquals(numLayers(23), "4194.304m")
//Test.assertEquals(numLayers(24), "8388.608m")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Second Largest Number

//tags: arrays,language_fundamentals,numbers

//url: https://edabit.com/challenge/3zAT89ZAxg4CAQqsZ

//Description:
//Create a function that takes an array of numbers and returns the second largest number.
//Examples
//secondLargest([10, 40, 30, 20, 50]) ➞ 40
//
//secondLargest([25, 143, 89, 13, 105]) ➞ 105
//
//secondLargest([54, 23, 11, 17, 10]) ➞ 23
//Notes
//There will be at least two numbers in the array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(secondLargest([10, 40, 30, 20, 50]), 40)
//Test.assertEquals(secondLargest([25, 143, 89, 13, 105]), 105)
//Test.assertEquals(secondLargest([54, 23, 11, 17, 10]), 23)
//Test.assertEquals(secondLargest([513, 211, 131, 417, 11]), 417)
//Test.assertEquals(secondLargest([63, 44, 11, 22, 33, 66, 65]), 65)

