

//title: Digits Battle!

//tags: games,loops,numbers

//url: https://edabit.com/challenge/nG3NSjoK4BTi9jxBS

//Description:
//Starting from the left side of an integer, adjacent digits pair up in "battle" and the larger digit wins. If two digits are the same, they both lose. A lone digit automatically wins.
//Create a function that returns the victorious digits.
//To illustrate:
//battleOutcome(578921445) ➞ 7925
//// [57]: 7 wins; [89] 9 wins; [21] 2 wins;
//// [44] neither wins; 5 (automatically) wins
//Examples
//battleOutcome(32531) ➞ 351
//// 3 deffeats 2, 5 defeats 3, 1 is a single.
//
//battleOutcome(111) ➞ 1
//// 1 and 1 tie, so neither move on, last 1 is a single.
//
//battleOutcome(78925) ➞ 895
//Notes
//There are no winners in a battle with equal digits (neither should be printed).
//If the length of the number is odd, the lone digit should be printed at the end of the number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(battleOutcome(32531), 351)
//Test.assertEquals(battleOutcome(111), 1)
//Test.assertEquals(battleOutcome(5289), 59)
//Test.assertEquals(battleOutcome(76811), 781)
//Test.assertEquals(battleOutcome(3245196), 3596)
//Test.assertEquals(battleOutcome(93552129), 929)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Complete Prime Factorization

//tags: arrays,math

//url: https://edabit.com/challenge/a78cwfLkCepCmCkQ2

//Description:
//Create a function that decomposes an integer into its prime factors, ordered from smallest to largest.
//For instance:
//completeFactorization(24) = [2, 2, 2, 3]
//// Since 24 = 8 x 3 = 2^3 x 3 = 2 x 2 x 2 x 3
//Examples
//completeFactorization(10) ➞ [2, 5]
//
//completeFactorization(9) ➞ [3, 3]
//
//completeFactorization(72) ➞ [2, 2, 2, 3, 3]
//Notes
//1 is not considered a prime number, so omit it in your final array of prime factors.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(completeFactorization(30), [2, 3, 5])
//Test.assertSimilar(completeFactorization(12), [2, 2, 3])
//Test.assertSimilar(completeFactorization(15), [3, 5])
//Test.assertSimilar(completeFactorization(48), [2, 2, 2, 2, 3])
//Test.assertSimilar(completeFactorization(311), [311])
//Test.assertSimilar(completeFactorization(17), [17])
//Test.assertSimilar(completeFactorization(44), [2, 2, 11])
//Test.assertSimilar(completeFactorization(10), [2, 5])
//Test.assertSimilar(completeFactorization(9), [3, 3])
//Test.assertSimilar(completeFactorization(72), [2, 2, 2, 3, 3])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Ice Cream Stand

//tags: arrays,math

//url: https://edabit.com/challenge/aJHPftoXzexJMcoPf

//Description:
//For this question, treat people as existing only on integers.
//Two ice cream stands: A and B each occupy a spot on the beach, from [0, 100]. Their positions are represented with coordinates (A, B). One position could be:
//[32, 69]
//People are distributed equally from [0, 100], and will purchase ice cream from the stand closest to them.
//For (A, B) above, we have that everyone from[0, 50] goes to A and everyone from [51, 100] goes to B. People on 50 will go to A because |50 - 32| = 18 < 19 = |50 - 69|, and people on 51 will go to B because |51 - 69| = 18 < 19 = |51 - 32| .
//profit = total number of integers claimed by the ice cream stand
//Write a function that calculates the profit for each ice cream stand based on their position. For the example above, profit(32, 69) = [51, 50].
//Disregard ties. For instance, if (A, B) = (49, 51), disregard the person on 50. Profit is equally distributed in this case, with profit(49, 51) = [50, 50].
//Examples
//profit(32, 69) ➞ [51, 50]
//
//profit(49, 51) ➞ [50, 50]
//
//profit(0, 1) ➞ [1, 100]
//Notes
//A < B will always be true.
//A and B will never occupy the same spot.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(profit(32, 69), [51, 50])
//Test.assertSimilar(profit(49, 51), [50, 50])
//Test.assertSimilar(profit(25, 26), [26, 75])
//Test.assertSimilar(profit(24, 26), [25, 75])
//Test.assertSimilar(profit(0, 1), [1, 100])
//Test.assertSimilar(profit(3, 6), [5, 96])
//Test.assertSimilar(profit(55, 65), [60, 40])
//Test.assertSimilar(profit(25, 75), [50, 50])

