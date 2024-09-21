

//title: Binary Sums

//tags: numbers

//url: https://edabit.com/challenge/WdmwC5qhPvwnnWdxk

//Description:
//Adding fractional binary numbers is similar to adding decimals. The places to the right of the decimal point (or binary point) are halves, quarters, eighths instead of tenths, hundredths, thousandths, etc.
//Improvise a function that takes two fractional binary numbers and produces their base-10 sum. The sum can be a whole number, a fraction, or a mixed number. The answer should be returned as a string with fractions reduced to lowest terms.
//Examples
//binarySum(["1.1", "1.1"]) ➞ "3"
//// 1.5 + 1.5
//
//binarySum(["11.1", "0.001"]) ➞ "3 5/8"
//// 3.5 + 0.125
//
//binarySum(["1101.0", "0.0100"]) ➞ "13 1/4"
//// 13 + 1/4
//
//binarySum(["0.11", "0.00001"]) ➞ "25/32"
//// 3/4 + 1/32
//
//binarySum(["0.0", "101.00"]) ➞ "5"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(binarySum(["0.0", "0.0"]), "0")
//Test.assertEquals(binarySum(["111.10", "1.1"]), "9")
//Test.assertEquals(binarySum(["0.001", "0.110010"]), "29/32")
//Test.assertEquals(binarySum(["11101.1", "10.001001"]), "31 41/64")
//Test.assertEquals(binarySum(["0.110110", "1101.101"]), "14 15/32")
//Test.assertEquals(binarySum(["111.1110", "111.0111"]), "15 5/16")
//Test.assertEquals(binarySum(["110.0001", "1.1100"]), "7 13/16")
//Test.assertEquals(binarySum(["11110.0", "1.0"]), "31")
//Test.assertEquals(binarySum(["0.001", "0.0"]), "1/8")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Extreme Indices and Values

//tags: arrays,recursion

//url: https://edabit.com/challenge/DHsH9FpFrt66ei7ku

//Description:
//Write a function that extracts the upper and lower bounds of the elements in the array, value-wise, including its corresponding index, array-wise. Although these tasks are achievable with the use of some built-in Array functions, the purpose and intent of this challenge is for your to solve it recursively.
//Output Structure
//[{index: lower_bound}, {index: upper_bound}]
//Examples
//extremes([107, 19, -18, -79, 36, 23, 97]) ➞ [{3: -79}, {0: 107}]
//
//extremes([31, 7, 2, 13, 7, 9, 10, 13]) ➞ [{2: 2}, {0: 31}]
//
//extremes([4, 4, 4, 4, 4, 4]) ➞ "No bounds!"
//Notes
//Return "No bounds!" if the lower bound happens to be equal to its supposed upper bound (because logically and numerically, lower and upper bound values cannot be equal, thus, their respective names (see above example).
//The use of Math's max() and min() functions are restricted.
//You can read more about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept before taking up this challenge.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noMinMax = f => !RegExp('Math|min|max','gm').test(f)
//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(noMinMax(extremes), false, "Math's min() and max() functions aren't allowed!")
//Test.assertNotEquals(recursive(extremes), false, "Recursion is required!")
//​
//let [numVectors, resVectors] = [[
//  [107, 19, -18, -79, 36, 23, 97],
//  [31, 7, 2, 13, 7, 9, 10, 13],
//  [4, 4, 4, 4, 4, 4],
//  [-31, -7, -13, -7, -9, -13],
//  [1, 3, 9, 5, -1, 7, 9, 49],
//  [63, 77, 13, 75, 91, 113],
//  [6, 6, 6, 6, 6, 6]], [
//  [{3: -79}, {0: 107}],
//  [{2: 2}, {0: 31}],
//  "No bounds!",
//  [{0: -31}, {1: -7}],
//  [{4: -1}, {7: 49}],
//  [{2: 13}, {5: 113}],
//  "No bounds!"
//]]
//for (let i in numVectors) typeof resVectors[i] == 'string' ?
//  Test.assertEquals(extremes(numVectors[i]), resVectors[i]):
//  Test.assertSimilar(extremes(numVectors[i]), resVectors[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Newton-Raphson method

//tags: algorithms,arrays,math

//url: https://edabit.com/challenge/D2xXuARCTbCJQnrBz

//Description:
//Create a function that finds a root of a polynomial curve. Do this using the Newton-Raphson method.
//Your input will be an array of coefficients for a 3rd order polynomial: c(0)*x^3 + c(1)*x^2 + c(2)*x + c(3)
//Round your answer to three decimal places (nearest 0.001). Choose x = 0.0 as an initial guess. Twenty iterations of the algorithm are sufficient for accuracy.
//The Newton-Raphson method uses the generic derivative df/dx. This can be calculated analytically for a polynomial, or numerically using a small step of dx (such as 0.0001). See the Resources tab for more info.
//Examples
//newtonRaphson([0.0, -0.1, -0.2, 0.3]) ➞ 1.000
//
//newtonRaphson([-0.1, 0.4, 0.1, -0.8]) ➞ 3.681
//
//newtonRaphson([0.2, -0.6, 1.5, -2.7]) ➞ 2.295
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(newtonRaphson([-1.4, -0.9, -1.0, 5.2]), 1.23)
//Test.assertEquals(newtonRaphson([2.4, 0.1, -4.6, 8.2]), -1.939)
//Test.assertEquals(newtonRaphson([0.0, 0.0, -1.0, 2.0]), 2.0)
//Test.assertEquals(newtonRaphson([-0.4, 3.8, 0.7, -5.5]), 9.532)

