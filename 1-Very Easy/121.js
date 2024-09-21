

//title: Repeating Letters N Times

//tags: language_fundamentals,loops,strings

//url: https://edabit.com/challenge/pggD9dH8Nwuac7fPE

//Description:
//Create a function that repeats each character in a string n times.
//Examples
//repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"
//
//repeat("hello", 3) ➞ "hhheeellllllooo"
//
//repeat("stop", 1) ➞ "stop"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(repeat("mice", 5), "mmmmmiiiiiccccceeeee")
//Test.assertEquals(repeat("hello", 3), "hhheeellllllooo")
//Test.assertEquals(repeat("stop", 1), "stop")
//Test.assertEquals(repeat("tomato", 2), "ttoommaattoo")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Exists a Number Higher?

//tags: arrays,higher_order_functions,validation

//url: https://edabit.com/challenge/77zq4RhMgWup22H6d

//Description:
//Write a function that returns true if there exists at least one number that is larger than or equal to n.
//Examples
//existsHigher([5, 3, 15, 22, 4], 10) ➞ true
//
//existsHigher([1, 2, 3, 4, 5], 8) ➞ false
//
//existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true
//
//existsHigher([], 5) ➞ false
//Notes
//Return false for an empty array [].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(existsHigher([5, 3, 15, 22, 4], 10), true)
//Test.assertEquals(existsHigher([1, 2, 3, 4, 5], 8), false)
//Test.assertEquals(existsHigher([4, 3, 3, 3, 2, 2, 2], 4), true)
//Test.assertEquals(existsHigher([2, 2, 2, 2], 5), false)
//Test.assertEquals(existsHigher([], 0), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Coding Challenge #3

//tags: arrays,loops,math

//url: https://edabit.com/challenge/bADsAhtb5g6pu5WYM

//Description:
//This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
//Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.
//Examples
//[5, 7, 8, 2, 1], 2 ➞ [1, 1, 0, 0, 1]
//
//[9, 8, 16, 47], 4 ➞ [1, 0, 0, 3]
//
//[17, 11, 99, 55, 23, 1], 5 ➞ [2, 1, 4, 0, 3, 1]
//
//[6, 1], 7 ➞ [6, 1]
//
//[3, 2, 9], 3 ➞ [0, 2, 0]
//
//[48, 22, 0, 19, 33, 100], 10 ➞ [8, 2, 0, 9, 3, 0]
//Notes
//If you get stuck, see Comments for a hint.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mysteryFunc([5, 7, 8, 2, 1], 2), [1, 1, 0, 0, 1])
//Test.assertSimilar(mysteryFunc([9, 8, 16, 47], 4), [1, 0, 0, 3])
//Test.assertSimilar(mysteryFunc([17, 11, 99, 55, 23, 1], 5), [2, 1, 4, 0, 3, 1])
//Test.assertSimilar(mysteryFunc([6, 1], 7), [6, 1])
//Test.assertSimilar(mysteryFunc([3, 2, 9], 3), [0, 2, 0])
//Test.assertSimilar(mysteryFunc([48, 22, 0, 19, 33, 100], 10), [8, 2, 0, 9, 3, 0])

