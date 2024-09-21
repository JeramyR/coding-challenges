

//title: Sum of Decimals

//tags: bugs,math,numbers

//url: https://edabit.com/challenge/cwZQWhHHDTHP4ASbu

//Description:
//Captain Obvious is asked to implement a simple function that given two decimal numbers A and B returns their sum.
//"Easy one!" he thinks, but soon he discovers that his function fails over fifty percent of given test cases! He suspects the test cases are wrong, but his calculator is saying they're correct! What's happening?
//Can you help Captain Obvious to debug his function and solve the exercise?
//Examples
//floatSum(0.3, 0.7) ➞ 1
//
//floatSum(0.35, 0.75) ➞ 1.1
//
//floatSum(1.234, 5.6789) ➞ 6.9129
//Notes
//Given numbers can be either integer or float with 1 up to 6 decimals.
//Don't round results!
//Bonus: Can you resolve it using a simple math expression instead of a built-in method?

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(floatSum(0.1, 0.2), 0.3)
//Test.assertEquals(floatSum(0.2, 0.3), 0.5)
//Test.assertEquals(floatSum(8.4, 8.8), 17.2)
//Test.assertEquals(floatSum(5.7, 4.3), 10)
//Test.assertEquals(floatSum(5, 0.81), 5.81)
//Test.assertEquals(floatSum(0.81, 99), 99.81)
//Test.assertEquals(floatSum(99.1, 0.109), 99.209)
//Test.assertEquals(floatSum(50.1234, 11.5678), 61.6912)
//Test.assertEquals(floatSum(3.4444, 3.5555), 6.9999)
//Test.assertEquals(floatSum(2.12022, 1.110001), 3.230221)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Alphanumeric Restriction

//tags: language_fundamentals,regex,strings,validation

//url: https://edabit.com/challenge/DEXocQFvKavLFqCLC

//Description:
//Create a function that returns true if the given string has any of the following:
//Only letters and no numbers.
//Only numbers and no letters.
//If a string has both numbers and letters, or contains characters which don't fit into any category, return false
//Examples
//alphanumericRestriction("Bold") ➞ true
//
//alphanumericRestriction("123454321") ➞ true
//
//alphanumericRestriction("H3LL0") ➞ false
//
//alphanumericRestriction("ed@bit") ➞ false
//Notes
//Any string that contains spaces or is empty should return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(alphanumericRestriction("Bold"), true)
//Test.assertEquals(alphanumericRestriction("123454321"), true)
//Test.assertEquals(alphanumericRestriction("H3LL0"), false)
//Test.assertEquals(alphanumericRestriction("hhefuhiwfgn"), true)
//Test.assertEquals(alphanumericRestriction("0"), true)
//Test.assertEquals(alphanumericRestriction("hhefuhiwfgn"), true)
//Test.assertEquals(alphanumericRestriction("ed@bit"), false)
//Test.assertEquals(alphanumericRestriction("only letters right"), false)
//Test.assertEquals(alphanumericRestriction("132 143 234"), false)
//Test.assertEquals(alphanumericRestriction("()"), false)
//Test.assertEquals(alphanumericRestriction("Hello"), true)
//Test.assertEquals(alphanumericRestriction("10,000"), false)
//Test.assertEquals(alphanumericRestriction("1a2b3c"), false)
//Test.assertEquals(alphanumericRestriction(""), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Matrix Subtraction

//tags: algebra,arrays,interview,math

//url: https://edabit.com/challenge/hAvzSvKxg2WeJ4GEw

//Description:
//Two matrices must have an equal number of rows and columns to be subtracted. In which case, the subtracted of two matrices A and B will be a matrix which has the same number of rows and columns as A and B.
//The result of the subtraction of A and B, denoted A - B is computed by subtracting corresponding elements of A and B.
//Create a function that takes 2 x 2D array (matrix A, matrixB) as an argument and returns a 2D array (matrix C). C = A-B.
//Examples
//sub([
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//], [
//  [1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]
//]) ➞ [
//  [0, 0, 0],
//  [0, 0, 0],
//  [0, 0, 0]
//]
//Notes
//Treat strings of numbers as integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sub([[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]]), [[0,0,0],[0,0,0],[0,0,0]])
//Test.assertSimilar(sub([[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,10]]), [[0,0,0],[0,0,0],[0,0,-1]])
//Test.assertSimilar(sub([[1,2],[4,5]],[[1,2],[4,5]]), [[0,0],[0,0]])
//Test.assertSimilar(sub([[1,2],[4,-5]],[[2,2],[4,-5]]), [[-1,0],[0,0]])
//Test.assertSimilar(sub([[21]],[[63]]), [[-42]])
//Test.assertSimilar(sub([[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]), [[0,0,0],[0,0,0],[0,0,0]])
//Test.assertSimilar(sub([[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0.678]]), [[0,0,0],[0,0,0],[0,0,-0.678]])
//Test.assertSimilar(sub([["2",0,0],[0,0,0],[0,0,0]],[["3",0,0],[0,0,0],[0,0,0.678]]), [[-1,0,0],[0,0,0],[0,0,-0.678]])

