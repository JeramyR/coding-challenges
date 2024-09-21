

//title: The Dice Game

//tags: arrays,games

//url: https://edabit.com/challenge/FC36gN8o9ZMtsqgMu

//Description:
//Four friends are playing a simple dice game (players are denoted p1, p2, p3 and p4). In each round, all players roll a pair of six-sided dice. The player with the lowest total score is removed. If the lowest score is shared by two or more players, the player in that group with the lowest score from their first dice is removed. If the lowest score is still shared (i.e. two or more players have the same rolls in the same order), then all players roll again. This process continues until one player remains. Given an array of scores only (given in player order for each round), return the winning player.
//Example
//diceGame([[6, 2], [4, 3], [3, 4], [5, 4], [3, 5], [1, 5], [4, 3], [1, 5], [1, 5], [5, 6], [2, 2]]) ➞ "p1"
//
//             p1      p2      p3      p4
//Round 1 -> [6, 2], [4, 3], [3, 4], [5, 4]  Player 3 removed.
//Round 2 -> [3, 5], [1, 5],         [4, 3]  Player 2 removed.
//Round 3 -> [1, 5],                 [1, 5]  No lowest score, players roll again.
//Round 4 -> [5, 6],                 [2, 2]  Player 1 wins!
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////
// const diceGame = inputArr => {
//     console.log(inputArr.length)
// }


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(diceGame(
//     [
//         [1, 3], [2, 6], [6, 3], [5, 6],
//         [2, 2], [5, 6], [5, 4],
//         [1, 3], [5, 6]
//     ]
//     ), 'p4')
//Test.assertEquals(diceGame([[4, 4], [4, 3], [1, 1], [1, 1], [3, 1], [4, 5], [2, 6], [2, 3], [1, 5], [5, 3], [4, 5], [5, 2], [2, 1]]), 'p3')
//Test.assertEquals(diceGame([[6, 1], [4, 3], [2, 5], [1, 4], [6, 2], [2, 5], [1, 4], [6, 4], [4, 3]]), 'p1')
//Test.assertEquals(diceGame([[1, 2], [2, 1], [4, 4], [1, 2], [1, 3], [1, 5], [2, 1], [4, 1], [5, 6], [5, 1], [4, 2], [5, 2], [5, 1]]), 'p1')
//Test.assertEquals(diceGame([[1, 2], [5, 6], [1, 3], [6, 5], [4, 6], [1, 3], [1, 3], [5, 3], [4, 1], [1, 1], [3, 3], [4, 1]]), 'p2')
//Test.assertEquals(diceGame([[1, 2], [2, 3], [5, 4], [4, 4], [5, 2], [1, 1], [3, 6], [4, 4], [2, 2]]), 'p2')
//Test.assertEquals(diceGame([[1, 4], [4, 2], [3, 5], [4, 2], [1, 2], [1, 2], [2, 4], [3, 5], [4, 1], [2, 2], [1, 1], [1, 1], [4, 3], [1, 1]]), 'p2')
//Test.assertEquals(diceGame([[2, 6], [3, 6], [6, 3], [6, 5], [4, 5], [5, 3], [5, 6], [2, 6], [6, 5]]), 'p4')
//Test.assertEquals(diceGame([[1, 1], [4, 3], [2, 1], [6, 2], [3, 2], [3, 2], [4, 2], [2, 1], [6, 5], [6, 2], [4, 5], [4, 5], [5, 3], [3, 3]]), 'p3')
//Test.assertEquals(diceGame([[5, 1], [2, 6], [1, 6], [6, 4], [3, 4], [2, 5], [6, 1], [3, 2], [4, 1]]), 'p4')
//Test.assertEquals(diceGame([[1, 4], [3, 6], [1, 6], [6, 1], [4, 1], [4, 3], [6, 5], [5, 6], [5, 6], [2, 1], [2, 4]]), 'p4')
//Test.assertEquals(diceGame([[1, 3], [6, 5], [5, 4], [5, 4], [2, 2], [4, 6], [4, 1], [5, 5], [4, 5]]), 'p3')
//Test.assertEquals(diceGame([[2, 3], [3, 6], [5, 4], [3, 1], [2, 5], [1, 5], [5, 3], [4, 3], [2, 1]]), 'p1')
//Test.assertEquals(diceGame([[4, 2], [4, 4], [1, 4], [1, 4], [1, 3], [3, 5], [6, 5], [1, 2], [5, 1], [6, 1], [2, 4], [2, 4], [5, 4]]), 'p2')
//Test.assertEquals(diceGame([[2, 5], [4, 1], [2, 1], [4, 4], [6, 5], [4, 4], [1, 4], [3, 1], [1, 5]]), 'p2')
//Test.assertEquals(diceGame([[6, 3], [5, 5], [2, 3], [6, 6], [2, 5], [5, 1], [4, 4], [2, 2], [1, 3]]), 'p1')
//Test.assertEquals(diceGame([[6, 2], [6, 1], [6, 1], [2, 2], [1, 1], [4, 3], [2, 6], [4, 6], [4, 6], [3, 4], [3, 5]]), 'p3')
//Test.assertEquals(diceGame([[1, 6], [3, 2], [3, 4], [1, 2], [4, 1], [4, 2], [2, 5], [4, 1], [5, 1]]), 'p3')
//Test.assertEquals(diceGame([[3, 4], [2, 5], [5, 5], [2, 5], [6, 4], [6, 5], [6, 2], [6, 2], [3, 5], [6, 4], [4, 2], [5, 2], [3, 2], [6, 4], [1, 2], [5, 4], [5, 5]]), 'p2')
//Test.assertEquals(diceGame([[1, 5], [3, 1], [2, 3], [5, 3], [1, 2], [1, 2], [6, 3], [2, 2], [6, 3], [2, 2], [5, 5], [3, 1], [3, 1], [6, 6], [6, 4], [5, 3], [3, 4], [6, 4]]), 'p3')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Scoring Strings

//tags: logic,strings

//url: https://edabit.com/challenge/3kLXjsWRwH62Skt78

//Description:
//Nesting level, for this challenge, refers to the depth of the parentheses surrounding an integer. For example, the string "(5((10)8))", 5 has a nesting level of 1 because it has one set of parentheses around it, 10 has a nesting level of 3 because it has 3 sets of parentheses around it, and 8 has a nesting level of 2.
//We can score this string by multiplying each number with its nesting level and then summing up the results, as follows:
//"(5((10)8))" ➞ 5*1 + 10*3 + 8*2 ➞ 51
//Create a function that takes a string as its argument and returns its score.
//Examples
//scoreIt("()") ➞ 0
//
//scoreIt("4(123)") ➞ 123
//// 4*0 + 123*1 = 123
//
//scoreIt("((((1)2)3)4)") ➞ 20
//// 1*4 + 2*3 + 3*2 + 4*1 = 20
//
//scoreIt("(6)8((34(7)))") ➞ 95
//// 6*1 + 8*0 + 34*2 + 7*3 = 95
//Notes
//The nesting for all test cases is balanced and logically consistent (there are no missing or extra parentheses).
//Test cases contain only positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(scoreIt("((()))"), 0)
//Test.assertEquals(scoreIt("5abc8de"), 0)
//Test.assertEquals(scoreIt("5(abc8de)"), 8)
//Test.assertEquals(scoreIt("(((((20)))))"), 100)
//Test.assertEquals(scoreIt("1(11(111(1111(11111))))"), 48010)
//Test.assertEquals(scoreIt("(((258(7(23))67))6)"), 1124)
//Test.assertEquals(scoreIt("()45((1)(((123(1)16(((34)3)2)5)56)))"), 1017)
//Test.assertEquals(scoreIt("(8(6(4(2(1)3)5)7)9)"), 95)
//Test.assertEquals(scoreIt("((76(87))7((765))876(((90(6(12))))))"), 4053)
//Test.assertEquals(scoreIt("(1((2(((3((((4(((((5((((((6(((((((7((((((((8(((((((((9)))))))))))))))))))))))))))))))))))))))))))))"), 1155)
//Test.assertEquals(scoreIt("9(99(999(9999()(99999(999999)))))"), 5432085)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Variable Length Quantity (VLQ) Encoding

//tags: algorithms,bit_operations,data_structures

//url: https://edabit.com/challenge/M9AmkND2m9B42PRAe

//Description:
//In this challenge you have to create functions to encode and decode variable-length quantities. A variable-length quantity (VLQ) is a universal code that uses an arbitrary number of binary octets (eight-bit bytes) to represent an arbitrarily large integer. A VLQ is essentially a base-128 representation of an unsigned integer with the addition of the eighth bit to mark continuation of bytes.
//The way it works is fairly simple. As a big-endian series of bytes, the most significant bit (MSB) of each byte is a 1 to indicate that another VLQ byte follows. The remaining 7 bits of each byte make up the decoded value.
//Examples
//# ENCODE:
//intToVlq(127) ➞ [127]
//// numbers between 0 and 127 are unchanged
//// binary: [01111111]
//
//intToVlq(128) ➞ [129, 0]
//// 1st byte = 1 + 128 equivalent to 1 * 128 with MSB set to 1 indicating byte follows
//// 2nd byte = 0 
//// 128 + 0 ➞ 128
//// binary: [10000001, 00000000]
//
//intToVlq(106903) ➞ [134, 195, 23]
//// 1st byte = 128 + 6 ➞ 6 * 128^2 ➞ 98304
//// 2nd byte = 128 + 67 ➞ 67 * 128 ➞ 8576
//// 3rd byte = 23 ➞ 23
//// 98304 + 8576 + 23 = 106903
//// binary: [10000110, 11000011, 00010111]
//
//# DECODE:
//vlqToInt([229, 145, 63]) ➞ 1657023
//// (229 - 128)*128^2 + (145 - 128)*128 + 63 = 1657023
//Notes
//Integer values for encoding will be in the range 0 <= n <= 2^63

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// encode VLQ
//Test.assertSimilar(intToVlq(0), [0])
//Test.assertSimilar(intToVlq(12), [12])
//Test.assertSimilar(intToVlq(128), [129, 0])
//Test.assertSimilar(intToVlq(106903), [134, 195, 23])
//Test.assertSimilar(intToVlq(268435455), [255, 255, 255, 127])
//Test.assertSimilar(intToVlq(1234567890123), [163, 247, 143, 236, 137, 75])
//Test.assertSimilar(intToVlq(562949953421312), [129, 128, 128, 128, 128, 128, 128, 0])
//Test.assertSimilar(intToVlq(9223372036854775807), [255, 255, 255, 255, 255, 255, 255, 255, 127])
//​
//// decode VLQ
//Test.assertSimilar(vlqToInt([12]), 12 )
//Test.assertSimilar(vlqToInt([129, 0]), 128)
//Test.assertSimilar(vlqToInt([134, 195, 23]), 106903)
//Test.assertSimilar(vlqToInt([255, 255, 255, 127]), 268435455)
//Test.assertSimilar(vlqToInt([163, 247, 143, 236, 137, 75]), 1234567890123)
//Test.assertSimilar(vlqToInt([129, 128, 128, 128, 128, 128, 128, 0]), 562949953421312)
//Test.assertSimilar(vlqToInt([255, 255, 255, 255, 255, 255, 255, 255, 127]), 9223372036854775807)

