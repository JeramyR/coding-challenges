

//title: N-bonacci Numbers

//tags: math,numbers

//url: https://edabit.com/challenge/LwLoX98Sa3qdv99oR

//Description:
//N-bonacci numbers are generalisations of the fibonacci sequence, where the next term is always the sum of the previous N terms. By convention, the first (N-1) terms are all 0 and the Nth term is 1.
//The initial 10 terms of the first 5 N-bonacci sequences are therefore:
//1-bonacci = 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, ...
//2-bonacci = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//3-bonacci = 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, ...
//4-bonaaci = 0, 0, 0, 1, 1, 2, 4, 8, 15, 29, ...
//5-bonacci = 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, ...
//Write a function that returns the kth term of the N-bonacci sequence, for two integer arguments N and k.
//Examples
//bonacci(1, 10) ➞ 1
//
//bonacci(2, 10) ➞ 34
//
//bonacci(3, 10) ➞ 44
//
//bonacci(4, 10) ➞ 29
//
//bonacci(5, 10) ➞ 16
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bonacci(2, 7), 8)
//Test.assertEquals(bonacci(3, 13), 274)
//Test.assertEquals(bonacci(5, 24), 203513)
//Test.assertEquals(bonacci(8, 44), 32440904961)
//Test.assertEquals(bonacci(1, 4), 1)
//Test.assertEquals(bonacci(2, 2), 1)
//Test.assertEquals(bonacci(3, 1), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Missing Alphabets

//tags: logic,strings,validation

//url: https://edabit.com/challenge/Wop5oxsoXGir4ZZ6W

//Description:
//Create a function that takes a string str containing only letters from a to z in lowercase and returns the missing letter(s) in alphabetical order a-z.
//A set of letters is given by abcdefghijklmnopqrstuvwxyz.
//Two sets of alphabets means two or more alphabets.
//Examples
//missingAlphabets("abcdefghijklmnopqrstuvwxy") ➞ "z"
//// "z" is missing.
//
//missingAlphabets("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy") ➞ "zz"
//// Given string has a set of two alphabets so output will be "zz"
//
//missingAlphabets("edabit") ➞ "cfghjklmnopqrsuvwxyz"
//Notes
//If the string contains all letters from a-z, return an empty string "".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(missingAlphabets("abcdefghijklmnopqrstuvwxy"), "z")
//Test.assertEquals(missingAlphabets("abcdefghijklmnopqrstuvwxyz"), "")
//Test.assertEquals(missingAlphabets("aabbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxyy"), "zz")
//Test.assertEquals(missingAlphabets("abbccddeeffgghhiijjkkllmmnnooppqqrrssttuuvvwwxxy"), "ayzz")
//Test.assertEquals(missingAlphabets("edabit"), "cfghjklmnopqrsuvwxyz")
//Test.assertEquals(missingAlphabets("aaaabbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz"), "")
//Test.assertEquals(missingAlphabets("mubashir"), "cdefgjklnopqtvwxyz")
//Test.assertEquals(missingAlphabets("aaaa"), "bbbbccccddddeeeeffffgggghhhhiiiijjjjkkkkllllmmmmnnnnooooppppqqqqrrrrssssttttuuuuvvvvwwwwxxxxyyyyzzzz")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: The Out-Shuffle

//tags: logic,numbers,recursion

//url: https://edabit.com/challenge/X4NdX2PhAc97Pd8mN

//Description:
//An out-shuffle, also known as an out faro shuffle or a perfect shuffle, is a controlled method for shuffling playing cards. It is performed by splitting the deck into two equal halves and interleaving them together perfectly, with the condition that the top card of the deck remains in place.
//Using an array to represent a deck of cards, an out-shuffle looks like:
//[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]
//// Card 1 remains in the first position.
//If we repeat the process, the deck eventually returns to original order:
//Shuffle 1:
//[1, 2, 3, 4, 5, 6, 7, 8] ➞ [1, 5, 2, 6, 3, 7, 4, 8]
//Shuffle 2:
//[1, 5, 2, 6, 3, 7, 4, 8] ➞ [1, 3, 5, 7, 2, 4, 6, 8]
//Shuffle 3:
//[1, 3, 5, 7, 2, 4, 6, 8] ➞ [1, 2, 3, 4, 5, 6, 7, 8]
//// Back where we started.
//Write a function that takes a positive even integer representing the number of the cards in a deck, and returns the number of out-shuffles required to return the deck to its original order.
//Examples
//shuffleCount(8) ➞ 3
//
//shuffleCount(14) ➞ 12
//
//shuffleCount(52) ➞ 8
//Notes
//The number of cards is always even and greater than one. Thus, the smallest possible deck size is two.
//You are expected to solve this challenge via a recursive approach.
//An iterative version of this challenge can be found here.
//A collection of challenges in recursion can be found here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(shuffleCount), false, "Recursion is required!")
//​
//let [numVector, resVector] = [
//  [2, 8, 14, 26, 52, 70, 104, 208],
//  [1, 3, 12, 20, 8, 22, 51, 66]
//]
//for (let i in numVector) Test.assertEquals(shuffleCount(numVector[i]), resVector[i])

