

//title: Cryptoprimes

//tags: cryptography,math,numbers

//url: https://edabit.com/challenge/Z92EqDaPY56u5kgsv

//Description:
//In this challenge, you are given an array of strings composed of the letters a-j. This array is special because it is an array of consecutive prime numbers which have been treated to a simple substitution cipher. Each of the numbers (0-9) have been substituted by one of the letters a-j. The substitution scheme is the same for all members of the array.
//Your task is to develop a function that recovers the unencrypted array of primes.
//Examples
//cryptoprimes(["b", "c", "a", "i"]) ➞ [2, 3, 5, 7]
//
//cryptoprimes(["bb", "bi", "bg", "bc"]) ➞ [11, 13, 17, 19]
//
//cryptoprimes(["fgf", "fgb", "fgi", "fgd", "ffb"]) ➞ [101, 103, 107, 109, 113]
//
//cryptoprimes(["ebhi", "ebhf", "ecaf", "ecjf", "ecjb"]) ➞ [6791, 6793, 6803, 6823, 6827]
//Notes
//There is only one possible solution for each of the test cases.
//The cipher scheme is different for each of the test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(cryptoprimes(['b', 'c', 'a', 'i']), [2, 3, 5, 7])
//Test.assertSimilar(cryptoprimes(['bb', 'bi', 'bg', 'bc']), [11, 13, 17, 19])
//Test.assertSimilar(cryptoprimes(['fgf', 'fgb', 'fgi', 'fgd', 'ffb']), [101, 103, 107, 109, 113])
//Test.assertSimilar(cryptoprimes(['ebhi', 'ebhf', 'ecaf', 'ecjf', 'ecjb']), [6791, 6793, 6803, 6823, 6827])
//Test.assertSimilar(cryptoprimes(['caghj', 'caghc', 'cagij', 'cbdfc', 'cbdfe', 'cbdbj']), [34961, 34963, 34981, 35023, 35027, 35051])
//Test.assertSimilar(cryptoprimes(['fiagb', 'fiaba', 'fiabb', 'fiabc', 'fiacf', 'figdf', 'figdc', 'figfa', 'figif', 'figaa']), [12347, 12373, 12377, 12379, 12391, 12401, 12409, 12413, 12421, 12433])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Infinite Sequence

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/gz4kjsXXvoekxvMcg

//Description:
//Consider the following array:
//[1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789, 12345678910, 1234567891011 ...]
//If we join these numbers, you will end up with an infinite sequence:
//112123123412345123456 ... to infinity.
//Given a number n, return the element at nth index of the sequence. You can assume that the indexes start from 1 (not 0).
//Examples
//infiniteSequence(1) ➞ 1
//// number at index 1 = 1
//
//infiniteSequence(3) ➞ 2
//// number at index 3 = 2
//
//infiniteSequence(100) ➞ 1
//Notes
//1 ≤ n ≤ 10^18

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(infiniteSequence(1), 1)
//Test.assertEquals(infiniteSequence(2), 1)
//Test.assertEquals(infiniteSequence(3), 2)
//Test.assertEquals(infiniteSequence(10), 4)
//Test.assertEquals(infiniteSequence(15), 5)
//Test.assertEquals(infiniteSequence(21), 6)
//Test.assertEquals(infiniteSequence(100), 1)
//Test.assertEquals(infiniteSequence(2100), 2)
//Test.assertEquals(infiniteSequence(31000), 2) 
//Test.assertEquals(infiniteSequence(999999999999999999), 4) 
//Test.assertEquals(infiniteSequence(1000000000000000000), 1)
//Test.assertEquals(infiniteSequence(999999999999999993), 7)

