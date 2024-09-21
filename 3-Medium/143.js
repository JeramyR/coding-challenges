

//title: One, Two, Skip a Few

//tags: arrays,numbers

//url: https://edabit.com/challenge/Dz7kD2MsKRvippefT

//Description:
//Create a function which calculates how many numbers are missing from an ordered number line. This number line starts at the first value of the array, and increases by 1 to the end of the number line, ending at the last value of the array.
//howManyMissing([1, 2, 3, 8, 9]) ➞ 4
//
//// The number line starts at 1 and ends at 9 (so the numbers 0 and 10 aren't missing from it).
//// The numbers missing from this line are 4, 5, 6, and 7.
//// 4 numbers are missing.
//Examples
//howManyMissing([1, 3]) ➞ 1
//
//howManyMissing([7, 10, 11, 12]) ➞ 2
//
//howManyMissing([1, 3, 5, 7, 9, 11]) ➞ 5
//
//howManyMissing([5, 6, 7, 8]) ➞ 0
//Notes
//If the number line is complete, or the array is empty, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howManyMissing([1, 3]), 1)
//Test.assertEquals(howManyMissing([7, 10, 11, 12]), 2)
//Test.assertEquals(howManyMissing([1, 3, 5, 7, 9, 11]), 5)
//Test.assertEquals(howManyMissing([5, 6, 7, 8]), 0)
//Test.assertEquals(howManyMissing([1, 2, 3, 8, 9]), 4)
//Test.assertEquals(howManyMissing([1]), 0)
//Test.assertEquals(howManyMissing([]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Longest Daily Streak

//tags: arrays,logic

//url: https://edabit.com/challenge/wi65FEnQe6rYguxMQ

//Description:
//Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. Output the longest streak of consecutive logged in days.
//Examples
//dailyStreak([true, true, false, true]) ➞ 2
//
//dailyStreak([false, false, false]) ➞ 0
//
//dailyStreak([true, true, true, false, true, true]) ➞ 3
//Notes
//Return your output as an integer.
//If a given array is all false, return 0 (see example #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dailyStreak([true, true, false, true]), 2)
//Test.assertEquals(dailyStreak([false, false, false]), 0)
//Test.assertEquals(dailyStreak([true, true, true, false]), 3)
//Test.assertEquals(dailyStreak([true, true, true, false, true, true]), 3)
//Test.assertEquals(dailyStreak([true, false]), 1)
//Test.assertEquals(dailyStreak([true, false, true]), 1)
//Test.assertEquals(dailyStreak([true, false, true, true]), 2)
//​
//// Made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Accumulating Array

//tags: arrays,closures,loops

//url: https://edabit.com/challenge/FkH4K9TpFG98t52Ex

//Description:
//Create a function that takes in an array and returns an array of the accumulating sum.
//Examples
//accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
//// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]
//
//accumulatingArray([1, 5, 7]) ➞ [1, 6, 13]
//
//accumulatingArray([1, 0, 1, 0, 1]) ➞ [1, 1, 2, 2, 3]
//
//accumulatingArray([]) ➞ []
//Notes
//An empty array input should return an empty array [].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(accumulatingArray([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5])
//Test.assertSimilar(accumulatingArray([1, 5, 7]), [1, 6, 13])
//Test.assertSimilar(accumulatingArray([1, 0, 1, 0, 1]), [1, 1, 2, 2, 3])
//Test.assertSimilar(accumulatingArray([1, 2, 3, 0, 0, 1]), [1, 3, 6, 6, 6, 7])
//Test.assertSimilar(accumulatingArray([]), [])

