

//title: Two Product Problem (Part 2)

//tags: conditions,data_structures,loops

//url: https://edabit.com/challenge/gc44EAv3SYM9kWcAR

//Description:
//Create a function that takes an array arr and a number n and returns an array of two integers whose product is that of the number n.
//Examples
//twoProduct([1, 2, 3, 4, 13, 5], 39) ➞ [3, 13]
//
//twoProduct([11, 2, 7, 3, 5, 0], 55) ➞ [5, 11]
//
//twoProduct([100, 12, 4, 1, 2], 15) ➞ undefined
//Notes
//No duplicates.
//Sort the number.
//Try doing this with 0(n) time complexity.
//The array can have multiple solutions, so return the first match you find.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(twoProduct([100, 12, 4, 1, 2], 15), undefined)
//Test.assertSimilar(twoProduct([11, 2, 7, 3, 5, 0], 55), [5, 11])
//Test.assertSimilar(twoProduct([1, 2, 3, 4, 13, 5], 39), [3, 13])
//Test.assertSimilar(twoProduct([1, 2, -1, 4, 5], 20), [4, 5])
//Test.assertSimilar(twoProduct([1, 2, 3, 4, 5], 10), [2, 5])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Unashamed Primes: Sexy Triplets

//tags: arrays,math,numbers

//url: https://edabit.com/challenge/gn6kggvxAFfuMDsDJ

//Description:
//A sexy (from sex, the Latin word for six) prime triplet is a group of three primes that differ by each other by 6, with the sum of the smallest prime plus 18 being a composite number.
//You must implement a function that returns an array of triplets (triplets being arrays in turn) found in a range, which included bounds are the two given integers low and high.
//Examples
//sexyTriplets(1, 19) ➞ [ [7, 13, 19] ]
//// 7 + 6 = 13 + 6 = 19 and 7 + 18 = 25 (composite)
//
//sexyTriplets(5, 17) ➞ []
//// Despite [5, 11, 17] can seem a triplet, 5 + 18 = 23 (not composite)
//
//sexyTriplets(64, 88) ➞ [ [67, 73, 79] ]
//// 67 + 6 = 73 + 6 = 79 and 67 + 18 = 85 (composite)
//Notes
//If no triplets are found in the range, return an empty array (see example #2).
//A composite number is trivially a not prime number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sexyTriplets(1, 19), [[7, 13, 19]], "Example #1")
//Test.assertSimilar(sexyTriplets(1, 17), [], "Example #2")
//Test.assertSimilar(sexyTriplets(64, 88), [[67, 73, 79]], "Example #3")
//Test.assertSimilar(sexyTriplets(11, 59), [[17, 23, 29], [31, 37, 43], [47, 53, 59]])
//Test.assertSimilar(sexyTriplets(17, 29), [[17, 23, 29]])
//Test.assertSimilar(sexyTriplets(109, 275), [[151, 157, 163], [167, 173, 179], [227, 233, 239], [257, 263, 269]])
//Test.assertSimilar(sexyTriplets(1000, 1080), [])
//Test.assertSimilar(sexyTriplets(5842, 6333), [[6067, 6073, 6079], [6257, 6263, 6269], [6317, 6323, 6329]])
//Test.assertSimilar(sexyTriplets(45000, 45777), [[45427, 45433, 45439], [45491, 45497, 45503], [45751, 45757, 45763]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Palindrome Sequence

//tags: loops,numbers,strings

//url: https://edabit.com/challenge/dWhpHcH23keEF9N8m

//Description:
//A palindrome is a number that is the same when reversed, 2770772 for example. A palindrome can often be formed by adding a number to it's reverse: 641 + 146 = 787 (a palindrome). Using 78 as the seed, it takes 4 steps to produce a palindrome:
//78 + 87 = 165
//165 + 561 = 726
//726 + 627 = 1353
//1353 + 3531 = 4884 (a palindrome)
//About 97% of integers less than 10,000 produce palindromes in less than 25 steps. A few, like 196 and 879, may never form palindromes.
//Make a function that takes a palindrome as it's an argument and returns the smallest seed integer that will produce that palindrome, along with the number of steps required:
//palSeq(palindrome) = [seed, steps]
//palSeq(4884) ➞ [69, 4]
//
//palSeq(1) ➞ [1, 0]
//
//palSeq(11) ➞ [10, 1]
//// 10 + 01 = 11
//
//palSeq(3113) ➞ [199, 3]
//
//palSeq(8836886388) ➞ [177, 15]
//Notes
//The sequence always terminates when the first palindrome is produced. If the seed is a palindrome, the sequence has 0 steps.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(palSeq(1), [1, 0])
//Test.assertSimilar(palSeq(11), [10, 1])
//Test.assertSimilar(palSeq(229922), [1079, 6])
//Test.assertSimilar(palSeq(7777), [709, 2])
//Test.assertSimilar(palSeq(233332), [188, 7])
//Test.assertSimilar(palSeq(52788725), [1894, 13])
//Test.assertSimilar(palSeq(8813200023188), [89, 24])
//Test.assertSimilar(palSeq(88555588), [167, 11])
//Test.assertSimilar(palSeq(252), [252, 0])
//Test.assertSimilar(palSeq(987789), [100788, 1])
//Test.assertSimilar(palSeq(123321), [10119, 2])
//Test.assertSimilar(palSeq(10001), [10000, 1])

