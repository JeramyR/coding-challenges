

//title: The Collatz Sequence

//tags: algorithms,conditions,numbers,recursion

//url: https://edabit.com/challenge/3xPt246ScpEosiJLF

//Description:
//The Collatz sequence is as follows:
//Start with some given integer n.
//If it is even, the next number will be n divided by 2.
//If it is odd, multiply it by 3 and add 1 to make the next number.
//The sequence stops when it reaches 1.
//According to the Collatz conjecture, it will always reach 1. If that's true, you can construct a finite sequence following the aforementioned method for any given integer.
//Write a function that takes in an integer n and returns the highest integer in the corresponding Collatz sequence.
//Examples
//maxCollatz(10) ➞ 16
//// Collatz sequence: 10, 5, 16, 8, 4, 2, 1
//
//maxCollatz(32) ➞ 32
//// Collatz sequence: 32, 16, 8, 4, 2, 1
//
//maxCollatz(85) ➞ 256
//// Collatz sequence: 85, 256, 128, 64, 32, 16, 8, 4, 2, 1
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(maxCollatz(161), 9232)
//Test.assertEquals(maxCollatz(23), 160)
//Test.assertEquals(maxCollatz(48), 48)
//Test.assertEquals(maxCollatz(1), 1)
//Test.assertEquals(maxCollatz(70), 160)
//Test.assertEquals(maxCollatz(908), 1024)
//Test.assertEquals(maxCollatz(369), 1108)
//Test.assertEquals(maxCollatz(3500), 3940)
//Test.assertEquals(maxCollatz(33), 100)
//Test.assertEquals(maxCollatz(715), 3220)
//​
//// Author : MyName

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Humble Sequence of the Modest Numbers

//tags: algorithms,loops,numbers,validation

//url: https://edabit.com/challenge/Z5tC9uqQrNioT2dLm

//Description:
//In this challenge, you have to establish if a positive integer is a Modest number, accordingly to the following algorithm:
//Divide the number into two left and right partitions.
//For each combination of left and right parts, you have to check if a condition is true: the remainder of the number divided by the right part is equal to the left part.
//If at least a combination of two parts satisfies the above condition, the number is Modest, otherwise, it's not.
//Given an integer num, implement a function that returns true if num is a Modest number, or false if it's not.
//Example #1
//isModest(2036) ➞ true
//
//Combination 1:
//Left = 2 | Right = 036 = 36 (Leading zeros are not considered)
//Number (2036) % Right (36) =  20 != Left (2)
//
//Combination 2:
//Left = 20 | Right = 36
//Number (2036) % Right (36) = 20 = Left (20)
//
//// At least a combination satisfies the condition
//// It's a Modest number
//Example #2
//isModest(3412) ➞ false
//
//Combination 1:
//Left = 3 | Right = 412
//3412 % 412 = 116 != Left
//
//Combination 2:
//Left = 34 | Right = 12
//3412 % 12 = 4 != Left
//
//Combination 3:
//Left = 341 | Right = 2
//3412 % 2 = 0 != Left
//
//// It's not a Modest number
//// Notice how left and right parts are made:
//// They are not permutations or combinations...
//// ...but partitions of consecutive digits.
//Example #3
//isModest(21333) ➞ true
//
//Combination 1:
//Left = 2 | Right = 1333
//21333 % 1333 = 5 != Left
//
//Combination 2:
//Left = 21 | Right = 333
//21333 % 333 = 21 = Left
//
//// At least a combination satisfies the condition
//// It's a Modest number
//Example #4
//isModest(8) ➞ false
//// An integer with less than two digits can't be partitioned.
//Notes
//In the right part, leading zeros are not considered (see example #1).
//Remember to not confuse partitions with permutations or combinations. In the Instructions, "combination" is related to a combination of the left and the right part containing consecutive digits (see example #2, where is reported each combination of possible partitions).
//Trivially, every positive integer lower than 10 can't be partitioned into two parts and it's not a Modest number (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isModest(2036), true, "Example #1")
//Test.assertEquals(isModest(3412), false, "Example #2")
//Test.assertEquals(isModest(21333), true, "Example #3")
//Test.assertEquals(isModest(8), false, "Example #4")
//Test.assertEquals(isModest(13), true)
//Test.assertEquals(isModest(329), false)
//Test.assertEquals(isModest(433), true)
//Test.assertEquals(isModest(2037), true)
//Test.assertEquals(isModest(2038), false)
//Test.assertEquals(isModest(12036), true)
//Test.assertEquals(isModest(20010), false)
//Test.assertEquals(isModest(450810), true)
//Test.assertEquals(isModest(4221344), false)
//Test.assertEquals(isModest(9111111), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove The Word!

//tags: arrays,logic,strings

//url: https://edabit.com/challenge/Xpj88Ni3QxoCGFnne

//Description:
//Create a function that takes an array and string. The function should remove the letters in the string from the array, and return the array.
//Examples
//removeLetters(["s", "t", "r", "i", "n", "g", "w"], "string") ➞ ["w"]
//
//removeLetters(["b", "b", "l", "l", "g", "n", "o", "a", "w"], "balloon") ➞ ["b", "g", "w"]
//
//removeLetters(["d", "b", "t", "e", "a", "i"], "edabit") ➞ []
//Notes
//If number of times a letter appears in the array is greater than the number of times the letter appears in the string, the extra letters should be left behind (see example #2).
//If all the letters in the array are used in the string, the function should return an empty array (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(removeLetters(["s", "t", "r", "i", "n", "g", "w"], "string"), ["w"])
//Test.assertSimilar(removeLetters(["b", "b", "l", "l", "g", "n", "o", "a", "w"], "balloon"), ["b", "g", "w"])
//Test.assertSimilar(removeLetters(["d", "b", "t", "e", "a", "i"], "edabit"), [])
//Test.assertSimilar(removeLetters(["t", "t", "e", "s", "t", "u"], "testing"), ["t", "u"])

