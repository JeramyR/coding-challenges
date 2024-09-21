

//title: Solve a Linear Equation

//tags: algebra,math

//url: https://edabit.com/challenge/zrgLnPbhsNo6J6cBR

//Description:
//Create a function that returns the value of x (the "unknown" in the equation). Each equation will be formatted like this:
//x + 6 = 12
//Examples
//solve("x + 43 = 50") ➞ 7
//
//solve("x - 9 = 10") ➞ 19
//
//solve("x + 300 = 100") ➞ -200
//Notes
//"x" will always be in the same place (you will not find an equation like 6 + x = 12).
//Every equation will include either subtraction (-) or addition (+).
//"x" may be negative.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(solve("x + 43 = 50"), 7)
//Test.assertEquals(solve("x - 9 = 10"), 19)
//Test.assertEquals(solve("x + 300 = 100"), -200)
//Test.assertEquals(solve("x - 0 = 0"), 0)
//Test.assertEquals(solve("x + 188 = 866"), 678)
//Test.assertEquals(solve("x + -500 = -200"), 300)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return an Array of Subarrays

//tags: arrays,data_structures,language_fundamentals,loops

//url: https://edabit.com/challenge/zeBNPCpiXYNpKG6pt

//Description:
//Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.
//x Number of subarrays contained within the main array.
//y Number of items contained within each subarray.
//z Item contained within each subarray.
//Examples
//matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]
//
//matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]
//
//matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]
//Notes
//The first two arguments will always be integers.
//The third argument is either a string or an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(matrix(3, 4, 0), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
//Test.assertSimilar(matrix(2, 3, "#"), [["#", "#", "#"], ["#", "#", "#"]])
//Test.assertSimilar(matrix(2, 3, -4), [[-4, -4, -4], [-4, -4, -4]])
//Test.assertSimilar(matrix(1, 2, 0), [[0, 0]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Cricket Balls to Overs!

//tags: math,numbers

//url: https://edabit.com/challenge/Q9Gi9cWW3fDMGfACv

//Description:
//In cricket, an over consists of six deliveries a bowler bowls from one end. Create a function that takes the number of nBalls bowled by a bowler and calculates the number of overs bowled by him/her.
//Examples
//totalOvers(2400) ➞ [400]
//
//totalOvers(164) ➞ [27.2]
//// 27 overs and 2 balls were bowled by the bowler.
//
//totalOvers(945) ➞ [157.3]
//// 157 overs and 3 balls were bowled by the bowler.
//
//totalOvers(5) ➞ [0.5]
//Notes
//The number following the decimal point represents the balls remaining after the last over. Therefore, it will only ever have a value of 1-5.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(totalOvers(2400), 400)
//Test.assertEquals(totalOvers(164), 27.2)
//Test.assertEquals(totalOvers(945), 157.3)
//Test.assertEquals(totalOvers(5), 0.5)
//Test.assertEquals(totalOvers(7), 1.1)
//Test.assertEquals(totalOvers(15), 2.3)
//Test.assertEquals(totalOvers(0), 0)

