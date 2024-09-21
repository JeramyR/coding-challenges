

//title: Making Change

//tags: algebra,arrays,loops,math,objects

//url: https://edabit.com/challenge/8LYGTfbjXRag47yAT

//Description:
//Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.
//Coin	Value
//Penny	0.01
//Nickel	0.05
//Dime	0.10
//Quarter	0.25
//Examples
//makeChange(47) ➞ { "q": 1, "d": 2, "n": 0, "p": 2 }
//
//makeChange(24) ➞ { "q": 0, "d": 2, "n": 0, "p": 4 }
//
//makeChange(92) ➞ { "q": 3, "d": 1, "n": 1, "p": 2 }
//Notes
//Amount given will always be less than 100 and more than 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(makeChange(47), { "q": 1, "d": 2, "n": 0, "p": 2 })
//Test.assertSimilar(makeChange(24), { "q": 0, "d": 2, "n": 0, "p": 4 })
//Test.assertSimilar(makeChange(92), { "q": 3, "d": 1, "n": 1, "p": 2 })
//Test.assertSimilar(makeChange(99), { "q": 3, "d": 2, "n": 0, "p": 4 })
//Test.assertSimilar(makeChange(87), { "q": 3, "d": 1, "n": 0, "p": 2 })
//Test.assertSimilar(makeChange(15), { "q": 0, "d": 1, "n": 1, "p": 0 })
//Test.assertSimilar(makeChange(25), { "q": 1, "d": 0, "n": 0, "p": 0 })
//Test.assertSimilar(makeChange(36), { "q": 1, "d": 1, "n": 0, "p": 1 })

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Power Ranger

//tags: math,numbers

//url: https://edabit.com/challenge/Rr3TMAJvNiA4YDpB4

//Description:
//Create a function that takes in n, a, b and returns the number of positive values raised to the nth power that lie in the range [a, b], inclusive.
//Examples
//powerRanger(2, 49, 65) ➞ 2
//// 2 squares (n^2) lie between 49 and 65, 49 (7^2) and 64 (8^2)
//
//powerRanger(3, 1, 27) ➞ 3
//// 3 cubes (n^3) lie between 1 and 27, 1 (1^3), 8 (2^3) and 27 (3^3)
//
//powerRanger(10, 1, 5) ➞ 1
//// 1 value raised to the 10th power lies between 1 and 5, 1 (1^10)
//
//powerRanger(5, 31, 33) ➞ 1
//
//powerRanger(4, 250, 1300) ➞ 3
//Notes
//Remember that the range is inclusive.
//a < b will always be true.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(powerRanger(5, 31, 33), 1)
//Test.assertEquals(powerRanger(4, 250, 1300), 3)
//Test.assertEquals(powerRanger(2, 49, 65), 2)
//Test.assertEquals(powerRanger(3, 1, 27), 3)
//Test.assertEquals(powerRanger(10, 1, 5), 1)
//Test.assertEquals(powerRanger(1, 1, 5), 5)
//Test.assertEquals(powerRanger(2, 1, 100), 10)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Gold Distribution

//tags: algorithms,arrays,logic,numbers

//url: https://edabit.com/challenge/XayqZJQQ5oJJGZSqc

//Description:
//Mubashir and his friend Matt found some gold piles. They decided to follow simple rules to distribute the gold among them.
//Gold will be divided into n piles.
//Each person will choose bigger gold pile either from far left or far right.
//If the weight of both piles is equal then the person will choose left pile.
//Help them by creating a function that takes an array of gold piles gold and returns a two-element array with [Mubashir's Gold, Matt's Gold].
//Examples
//goldDistribution([4, 2, 9, 5, 2, 7]) ➞ [14, 15]
//// Mubashir will choose 7, Remaining piles = [4, 2, 9, 5, 2]
//// Matt will choose 4, Remaining piles = [2, 9, 5, 2]
//// Mubashir will choose 2, Remaining piles = [9, 5, 2]
//// Matt will choose 9, Remaining piles = [5, 2]
//// Mubashir will choose 5, Remaining piles = [2]
//// Matt will choose 2
//// Mubashir = 7+2+5 = 14, Matt = 4+9+2 = 15
//
//goldDistribution([10, 1000, 2, 1]) ➞ [12, 1001]
//
//goldDistribution([10, 9, 1, 2, 8, 4]) ➞ [16, 18]
//Notes
//Mubashir gets to pick his gold first!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(goldDistribution([4, 2, 9, 5, 2, 7]), [14, 15])
//Test.assertSimilar(goldDistribution([4, 7, 2, 9, 5, 2]), [11, 18])
//Test.assertSimilar(goldDistribution([10, 1000, 2, 1]), [12, 1001])
//Test.assertSimilar(goldDistribution([10, 9, 1, 2, 8, 4]), [16, 18])
//Test.assertSimilar(goldDistribution([9, 32, 12, 43, 1, 55]), [130, 22])
//Test.assertSimilar(goldDistribution([19, 22, 1, 5, 7, 31]), [58, 27])
//Test.assertSimilar(goldDistribution([2, 2, 2, 2, 2, 2]), [6, 6])
//// Mubashir

