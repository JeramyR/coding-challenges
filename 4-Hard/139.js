

//title: Sort Odds Keeping Evens in Place

//tags: arrays,sorting

//url: https://edabit.com/challenge/NhkHhyK7hSCAdLCeZ

//Description:
//Write a function that sorts only the odd numbers in an array in ascending order, keeping the even numbers in their current place.
//For example, if our input array is: [5, 2, 6, 6, 1, 4, 9, 3]:
//[_, 2, 6, 6, _, 4, _, _]  // keep evens in place.
//
//// Sort odds: [5, 1, 9, 3] => [1, 3, 5, 9]
//
//[1, 2, 6, 6, 3, 4, 5, 9]  // final array.
//Examples
//oddSort([7, 5, 2, 3, 1]) ➞ [1, 3, 2, 5, 7]
//
//oddSort([3, 7, 0, 9, 3, 2, 4, 8]) ➞ [3, 3, 0, 7, 9, 2, 4, 8]
//
//oddSort([2, 2, 8, 4]) ➞ [2, 2, 8, 4]
//
//oddSort([7, 9, 7]) ➞ [7, 7, 9]
//Notes
//Arrays may contain duplicate numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(oddSort([1, 8, 4, 3, 2, 6, 7, 5]), [1, 8, 4, 3, 2, 6, 5, 7])
//Test.assertSimilar(oddSort([3, 7, 0, 9, 3, 2, 4, 8]), [3, 3, 0, 7, 9, 2, 4, 8])
//Test.assertSimilar(oddSort([7, 5, 2, 3, 1]), [1, 3, 2, 5, 7])
//Test.assertSimilar(oddSort([2, 2, 9, 7, 4, 4, 4, 9]), [2, 2, 7, 9, 4, 4, 4, 9])
//Test.assertSimilar(oddSort([2, 2, 4, 0, 3, 1]), [2, 2, 4, 0, 1, 3])
//Test.assertSimilar(oddSort([2, 2, 8, 4]), [2, 2, 8, 4])
//Test.assertSimilar(oddSort([1, 9, 1]), [1, 1, 9])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Briefcase Lock

//tags: arrays,higher_order_functions

//url: https://edabit.com/challenge/sWo3y2WgtGDDtRtrB

//Description:
//A briefcase has a 4-digit rolling-lock. Each digit is a number from 0-9 that can be rolled either forwards or backwards.
//Create a function that returns the smallest number of turns it takes to transform the lock from the current combination to the target combination. One turn is equivalent to rolling a number forwards or backwards by one.
//To illustrate:
//current-lock: 4089
//target-lock: 5672
//What is the minimum number of turns it takes to transform 4089 to 5672?
//4 ➞ 5
//4 ➞ 5  // Forward Turns: 1 <- Min
//4 ➞ 3 ➞ 2 ➞ 1 ➞ 0 ➞ 9 ➞ 8 ➞ 7 ➞ 6 ➞ 5  // Backward Turns: 9
//
//0 ➞ 6
//0 ➞ 1 ➞ 2 ➞ 3 ➞ 4 ➞ 5 ➞ 6  // Forward Turns: 6
//0 ➞ 9 ➞ 8 ➞ 7 ➞ 6  // Backward Turns: 4  <- Min
//
//8 ➞ 7
//8 ➞ 9 ➞ 0 ➞ 1 ➞ 2 ➞ 3 ➞ 4 ➞ 5 ➞ 6 ➞ 7  // Forward Turns: 9
//8 ➞ 7  // Backward Turns: 1  <- Min
//
//9 ➞ 2
//9 ➞ 0 ➞ 1 ➞ 2  // Forward Turns: 3  <- Min
//9 ➞ 8 ➞ 7 ➞ 6 ➞ 5 ➞ 4 ➞ 3 ➞ 2  // Backward Turns: 7
//It takes 1 + 4 + 1 + 3 = 9 minimum turns to change the lock from 4089 to 5672.
//Examples
//minTurns("4089", "5672") ➞ 9
//
//minTurns("1111", "1100") ➞ 2
//
//minTurns("2391", "4984") ➞ 10
//Notes
//Both locks are in string format.
//A 9 rolls forward to 0, and a 0 rolls backwards to a 9.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(minTurns("4089", "5672"), 9)
//Test.assertEquals(minTurns("1732", "4444"), 9)
//Test.assertEquals(minTurns("7109", "2332"), 13)
//Test.assertEquals(minTurns("2391", "4984"), 10)
//Test.assertEquals(minTurns("1234", "3456"), 8)
//Test.assertEquals(minTurns("1111", "1100"), 2)
//Test.assertEquals(minTurns("1111", "0000"), 4)
//Test.assertEquals(minTurns("0000", "9999"), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Return the Most Frequent Character

//tags: arrays,regex,strings

//url: https://edabit.com/challenge/2qZPtgxSvvktKMcrc

//Description:
//Write a function that returns the most frequent character in an array of words.
//Examples
//mostFrequentChar(["apple", "bandage", "yodel", "make"])
//➞ ["a", "e"]
//
//mostFrequentChar(["music", "madness", "maniac", "motion"])
//➞ ["m"]
//
//mostFrequentChar(["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"])
//➞ ["e", "h", "i"]
//Notes
//If multiple characters tie for most frequent, list all of them in alphabetical order.
//Words will be in lower case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(mostFrequentChar(["apple", "bandage", "yodel", "make"]), ['a', 'e'])
//Test.assertSimilar(mostFrequentChar(["music", "madness", "maniac", "motion"]), ['m'])
//Test.assertSimilar(mostFrequentChar(["the", "hills", "are", "alive", "with", "the", "sound", "of", "music"]), ['e', 'h', 'i'])
//Test.assertSimilar(mostFrequentChar(["let", "them", "eat", "cake"]), ['e'])
//Test.assertSimilar(mostFrequentChar(["potion", "master", "professor", "snape"]), ['o', 's'])

