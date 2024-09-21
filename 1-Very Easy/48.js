

//title: Shapes With N Sides

//tags: arrays,geometry,math,objects

//url: https://edabit.com/challenge/wpHyrxbSaYxLeXT6L

//Description:
//Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
//Inputs	Outputs
//1	"circle"
//2	"semi-circle"
//3	"triangle"
//4	"square"
//5	"pentagon"
//6	"hexagon"
//7	"heptagon"
//8	"octagon"
//9	"nonagon"
//10	"decagon"
//Examples
//nSidedShape(3) ➞ "triangle"
//
//nSidedShape(1) ➞ "circle"
//
//nSidedShape(9) ➞ "nonagon"
//Notes
//There won't be any tests with a number below 1 or greater than 10.
//Return the output in lowercase.
//The challenge is intended to be completed without conditionals (it would take too long)!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nSidedShape(1), "circle")
//Test.assertEquals(nSidedShape(2), "semi-circle")
//Test.assertEquals(nSidedShape(3), "triangle")
//Test.assertEquals(nSidedShape(4), "square")
//Test.assertEquals(nSidedShape(5), "pentagon")
//Test.assertEquals(nSidedShape(6), "hexagon")
//Test.assertEquals(nSidedShape(7), "heptagon")
//Test.assertEquals(nSidedShape(8), "octagon")
//Test.assertEquals(nSidedShape(9), "nonagon")
//Test.assertEquals(nSidedShape(10), "decagon")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Multiply Every Array Item by Two

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/pzmTaGsP6FWRNBF9y

//Description:
//Create a function that takes an array with numbers and return an array with the elements multiplied by two.
//Examples
//getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
//
//getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
//
//getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getMultipliedArr([2, 5, 3]), [4, 10, 6])
//Test.assertSimilar(getMultipliedArr([1, 86, -5]), [2, 172, -10])
//Test.assertSimilar(getMultipliedArr([5, 382, 0]), [10, 764, 0])
//​
//// Made by @felixjoykind

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Array of Word Lengths

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/B9yPEStmax7Jxb9Dj

//Description:
//Create a function that takes an array of words and transforms it into an array of each word's length.
//Examples
//wordLengths(["hello", "world"]) ➞ [5, 5]
//
//wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
//
//wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
//Notes
//No test case will contain punctuation.
//Arrays can be of various lengths.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(wordLengths(["hello", "world"]), [5, 5], "Example #1")
//Test.assertSimilar(wordLengths(["Halloween", "Thanksgiving", "Christmas"]), [9, 12, 9], "Example #2")
//Test.assertSimilar(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]), [3, 5, 9, 4, 2, 3, 8], "Example #3")
//Test.assertSimilar(wordLengths(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"]), [7, 5, 3, 3, 6, 2, 4])
//Test.assertSimilar(wordLengths(["Programming", "is", "fun"]), [11, 2, 3])

