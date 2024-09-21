

//title: Just Another Sum Problem But... 😰😱

//tags: algebra,algorithms,language_fundamentals

//url: https://edabit.com/challenge/xdMPX6Ye3TDdznbGn

//Description:
//Ok, the challenge is kind of easy, right?
//The problem is not adding. The problem is that the numbers are not in order. Create a function that organizes the numbers and adds the numbers in the range between X and Y.
//Here is an example:
//X = -10 | Y=1
//So this will be the range of numbers:
//-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1
//This will be your result:
//-54
//Remember, X and Y are disorganized, so to get to the result you know what you have to do.
//Examples
//justAnotherSumProblem(-10, 1) ➞ -54
//
//justAnotherSumProblem(-20, 5) ➞ -195
//
//justAnotherSumProblem(90, 45) ➞ 3105
//Notes
//Check out the Resources tab if you need some help :)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Negative
//Test.assertEquals(justAnotherSumProblem(1,-10), -54)
//Test.assertEquals(justAnotherSumProblem(-20,5), -195)
//Test.assertEquals(justAnotherSumProblem(-40,20), -610)
//Test.assertEquals(justAnotherSumProblem(20,-100), -4840)
//Test.assertEquals(justAnotherSumProblem(-15,3), -114)
//Test.assertEquals(justAnotherSumProblem(-8,4), -26)
//​
//// Positive
//Test.assertEquals(justAnotherSumProblem(90,45), 3105)
//Test.assertEquals(justAnotherSumProblem(100,58), 3397)
//Test.assertEquals(justAnotherSumProblem(65,48), 1017)
//Test.assertEquals(justAnotherSumProblem(2,3), 5)
//Test.assertEquals(justAnotherSumProblem(89,256), 28980)
//Test.assertEquals(justAnotherSumProblem(302,56), 44213)
//​
//// Author: Juan esteban

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Keyboard Mistakes

//tags: functional_programming,logic,strings

//url: https://edabit.com/challenge/wWYkyDdipiYxQoESb

//Description:
//Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.
//Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:
//A is misinterpreted as 4
//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1
//The test cases contain numbers only by mistake.
//Examples
//keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"
//
//keyboardMistakes("DUBL1N") ➞ "DUBLIN"
//
//keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(keyboardMistakes("MUB45H1R"), "MUBASHIR")
//Test.assertEquals(keyboardMistakes("DUBL1N"), "DUBLIN")
//Test.assertEquals(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
//Test.assertEquals(keyboardMistakes("P4K15T4N"), "PAKISTAN")
//Test.assertEquals(keyboardMistakes("P4R15"), "PARIS")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Less Than 100 Array Remix

//tags: arrays,language_fundamentals,math,validation

//url: https://edabit.com/challenge/yks7uNNSRJFWDuj3m

//Description:
//Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.
//Examples
//arrayLessThan100([5, 57]) ➞ true
//
//arrayLessThan100([77, 30]) ➞ false
//
//arrayLessThan100([0]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(arrayLessThan100([5, 57]), true)
//Test.assertEquals(arrayLessThan100([77, 30]), false)
//Test.assertEquals(arrayLessThan100([0, 59,15]), true)
//Test.assertEquals(arrayLessThan100([0]), true)
//Test.assertEquals(arrayLessThan100([35, 59,15]), false)
//Test.assertEquals(arrayLessThan100([25, 50, 25]), false)

