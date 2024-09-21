

//title: Is the Sequence Linear, Quadratic or Cubic?

//tags: algorithms,math,recursion

//url: https://edabit.com/challenge/N7p2XeHgkXejEgoap

//Description:
//Create a function that determines if a given sequence is linear, quadratic or cubic. The input will be an array of numbers of varying lengths. The function should return "Linear", "Quadratic" or "Cubic".
//Examples
//seqLevel([1, 2, 3, 4, 5]) ➞ "Linear"
//
//seqLevel([3, 6, 10, 15, 21]) ➞ "Quadratic"
//
//seqLevel([4, 14, 40, 88, 164]) ➞ "Cubic"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(seqLevel([1, 2, 3, 4, 5]), "Linear")
//Test.assertEquals(seqLevel([2, 1, 0, -1, -2]), "Linear")
//Test.assertEquals(seqLevel([3, 6, 10, 15, 21]), "Quadratic")
//Test.assertEquals(seqLevel([4, 9, 16, 25, 36]), "Quadratic")
//Test.assertEquals(seqLevel([7, 17, 31, 49, 71]), "Quadratic")
//Test.assertEquals(seqLevel([2, 10, 26, 50, 82]), "Quadratic")
//Test.assertEquals(seqLevel([-6, -4, 10, 42, 98, 184]), "Cubic")
//Test.assertEquals(seqLevel([17, 59, 143, 287, 509, 827]), "Cubic")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sock Pairs

//tags: arrays,strings

//url: https://edabit.com/challenge/AkSERJZ9pTEZfFMNE

//Description:
//Joseph is in the middle of packing for a vacation. He's having a bit of trouble finding all of his socks, though.
//Write a function that returns the number of sock pairs he has. A sock pair consists of two of the same letter, such as "AA". The socks are represented as an unordered sequence.
//Examples
//sockPairs("AA") ➞ 1
//
//sockPairs("ABABC") ➞ 2
//
//sockPairs("CABBACCC") ➞ 4
//Notes
//If given an empty string (no socks in the drawer), return 0.
//There can be multiple pairs of the same type of sock, such as two pairs of CC for the last example.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sockPairs("AA"), 1)
//Test.assertEquals(sockPairs("ABABC"), 2)
//Test.assertEquals(sockPairs("CABBACCC"), 4)
//Test.assertEquals(sockPairs("AACDE"), 1)
//Test.assertEquals(sockPairs("ACDBE"), 0)
//Test.assertEquals(sockPairs(""), 0)
//Test.assertEquals(sockPairs("ABABAB"), 2)
//Test.assertEquals(sockPairs("AAAAA"), 2)
//Test.assertEquals(sockPairs("AAACCBB"), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Dice Gambling

//tags: algorithms,conditions,games,math

//url: https://edabit.com/challenge/QuhNPjLubRNh2McfX

//Description:
//Create a function that takes an array consisting of dice rolls from 1-6. Return the sum of your rolls with the following conditions:
//If a 1 is rolled, that is bad luck. The next roll counts as 0.
//If a 6 is rolled, that is good luck. The next roll is multiplied by 2.
//The array length will always be 3 or higher.
//Examples
//rolls([1, 2, 3]) ➞ 4
//// The second roll, 2, counts as 0 as a result of rolling 1.
//
//rolls([2, 6, 2, 5]) ➞ 17
//// The 2 following the 6 was multiplied by 2.
//
//rolls([6, 1, 1]) ➞ 8
//// The first roll makes the second roll worth 2, but the
//// second roll was still 1 so the third roll doesn't count.
//Notes
//Even if a 6 is rolled after a 1, 6 isn't summed but the 6's "effect" still takes place.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rolls([1,2,3]), 4)
//Test.assertEquals(rolls([2,6,2,5]), 17)
//Test.assertEquals(rolls([6,1,1]), 8)
//Test.assertEquals(rolls([5,1,6,1,6]), 8)
//Test.assertEquals(rolls([1,1,1]), 1)
//Test.assertEquals(rolls([1,1,3,1,1]), 2)
//Test.assertEquals(rolls([1,1,1,1,1]), 1)
//Test.assertEquals(rolls([6,6,6]), 30)

