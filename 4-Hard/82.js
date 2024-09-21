

//title: Gold Distribution

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/KNjaveTsz3PQiHa8w

//Description:
//A group of pirates each have a distribution of gold coins, which can be represented as an array:
//[3, 9, 4, 5, 5]
//// Pirate 1 has 3 gold, Pirate 2 has 9 gold, etc.
//The difference between each pirate's share of gold and that of the richest pirate is represented as:
//[6, 0, 5, 4, 4]
//// Since 6 = 9 - 3, 0 = 9 - 9, 4 = 9 - 5, etc.
//Pirates have a keen sense of fairness, and a pirate will kill the others if he deems his share to be too little. Each pirate has a unique inequality threshold - the maximum difference he is willing to tolerate before he kills his comrades.
//Using the above gold distribution:
//[5, 0, 5, 5, 5]
//// Pirates killed, since 5 < 6.
//// 5 is Pirate 1's inequality distribution and 6 is his gold difference.
//
//[7, 0, 5, 5, 5]
//// Pirate 1 is satisfied, since 7 > 6.
//// All other pirates are satisfied as well.
//Given a distribution of coins and an array of inequality thresholds, create a function that returns true if any pirates are killed, or false otherwise.
//Examples
//piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 5]) ➞ false
//
//piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 1]) ➞ true
//
//piratesKilled([3, 3, 10], [7, 7, 0]) ➞ false
//
//piratesKilled([3, 3, 10], [6, 6, 0]) ➞ true
//Notes
//A pirate kills if the difference in his share of gold from the richest pirate is strictly greater than his inequality threshold.
//Gold and inequality distribution arrays are both ordered the same. (e.g. Pirate 1 is index 0 for both arrays, Pirate 2 is index 1 for both arrays, etc).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 5]), false)
//Test.assertEquals(piratesKilled([3, 5, 8, 3, 4], [10, 4, 2, 5, 1]), true)
//Test.assertEquals(piratesKilled([3, 3, 10], [7, 7, 0]), false)
//Test.assertEquals(piratesKilled([3, 3, 10], [6, 6, 0]), true)
//Test.assertEquals(piratesKilled([3, 3, 3], [0, 0, 0]), false)
//Test.assertEquals(piratesKilled([3, 3, 4, 4], [0, 0, 1, 1]), true)
//Test.assertEquals(piratesKilled([3, 3, 4, 4], [1, 1, 0, 0]), false)
//Test.assertEquals(piratesKilled([3, 3, 4, 4], [0, 0, 0, 1]), true)
//Test.assertEquals(piratesKilled([3, 3, 4, 4, 5], [0, 0, 0, 1, 1]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Major Sum

//tags: arrays,conditions,logic,loops

//url: https://edabit.com/challenge/tRC4gcpBBM4opQgGt

//Description:
//Create a function that takes an integer array and return the biggest between positive sum, negative sum, or 0s count. The major is understood as the greatest absolute.
//arr = [1,2,3,4,0,0,-3,-2], the function has to return 10, because:
//Positive sum = 1+2+3+4 = 10
//Negative sum = (-3)+(-2) = -5
//0s count = 2 (there are two zeros in array)
//Examples
//majorSum([1, 2, 3, 4, 0, 0, -3, -2]) ➞ 10
//
//majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]) ➞ -27
//
//majorSum([0, 0, 0, 0, 0, 1, 2, -3]) ➞ 5
//// Because -3 < 1+2 < 0sCount = 5
//Notes
//All numbers are integers.
//There aren't empty arrays.
//All tests are made to return only one value.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(majorSum([1, 2, 3, 4, 0, 0, -3, -2]), 10)
//Test.assertEquals(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]), -27)
//Test.assertEquals(majorSum([0, 0, 0, 0, 0, 1, 2, -3]), 5)
//Test.assertEquals(majorSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 11)
//Test.assertEquals(majorSum([0]),  1)
//Test.assertEquals(majorSum([1]), 1)
//Test.assertEquals(majorSum([-1]), -1)
//Test.assertEquals(majorSum([10, -12, 4, 0, -3, -7, -91, 45]), -113)
//Test.assertEquals(majorSum([0, 1, 0, 1, 0, 1, 0, 1, 0]), 5)
//Test.assertEquals(majorSum([-1, -1, -1, -1, -1, 1, 1, 1, 1, 0, 0, 0, 0]), -5)
//Test.assertEquals(majorSum([1, 2, 3, 4, -5, -4, -3, -2, -1, 0]), -15)
//Test.assertEquals(majorSum([0, 1, -2]), -2)
//Test.assertEquals(majorSum([2, 0, -1]), 2)
//Test.assertEquals(majorSum([2, 0, 0, 0, -1]), 3)
//Test.assertEquals(majorSum([2, 0, 0, 0, 0, -1]), 4)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Needle in a Hex String

//tags: formatting,functional_programming

//url: https://edabit.com/challenge/Fev8jkLtDunP9wexv

//Description:
//Find the index of a string within a hex encoded string.
//You will be given a string which needs to be found in another string which has previously been translated into hex. You will need to return the first index of the needle within the hex encoded string.
//Examples
//firstIndex("68 65 6c 6c 6f 20 77 6f 72 6c 64", "world") ➞ 6
//
//firstIndex("47 6f 6f 64 62 79 65 20 77 6f 72 6c 64", "world") ➞ 8
//
//firstIndex("42 6f 72 65 64 20 77 6f 72 6c 64", "Bored") ➞ 0
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstIndex("68 65 6c 6c 6f 20 77 6f 72 6c 64", "world"), 6)
//Test.assertEquals(firstIndex("47 6f 6f 64 62 79 65 20 77 6f 72 6c 64", "world"), 8)
//Test.assertEquals(firstIndex("74 68 65 20 6e 65 65 64 6c 65 20 69 73 20 74 6f 20 62 65 20 66 6f 75 6e 64", "needle"), 4)
//Test.assertEquals(firstIndex("a3 24 25 2d 2d 2d a3 24 20 77 6f 72 6c 64 2d 2d 2d", "world"), 9)
//Test.assertEquals(firstIndex("42 6f 72 65 64 20 77 6f 72 6c 64", "Bored"), 0)

