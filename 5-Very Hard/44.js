

//title: Parentheses Clusters

//tags: data_structures,strings

//url: https://edabit.com/challenge/uGN6vd3t2ycfnCpfv

//Description:
//Write a function that groups a string into parentheses clusters. Each cluster should be balanced.
//Examples
//split("()()()") ➞ ["()", "()", "()"]
//
//split("((()))") ➞ ["((()))"]
//
//split("((()))(())()()(()())") ➞ ["((()))", "(())", "()", "()", "(()())"]
//
//split("((())())(()(()()))") ➞ ["((())())", "(()(()()))"]
//Notes
//All input strings will only contain parentheses.
//Balanced: Every opening parens ( must exist with its matching closing parens ) in the same cluster.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(split("()()()"), ["()", "()", "()"])
//Test.assertSimilar(split(""), [])
//Test.assertSimilar(split("()()(())"), ["()", "()", "(())"])
//Test.assertSimilar(split("(())(())"), ["(())", "(())"])
//Test.assertSimilar(split("((()))"), ["((()))"])
//Test.assertSimilar(split("()(((((((((())))))))))"), ["()", "(((((((((())))))))))"])
//Test.assertSimilar(split("((())()(()))(()(())())(()())"), ["((())()(()))", "(()(())())", "(()())"])
//Test.assertSimilar(split("((()))(())()()(()())"), ["((()))", "(())", "()", "()", "(()())"])
//Test.assertSimilar(split("((())())(()(()()))"), ["((())())", "(()(()()))"])
//Test.assertSimilar(split("(()(()()))()(((()))()(()))(()((()))(())())"), ["(()(()()))", "()", "(((()))()(()))", "(()((()))(())())"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Two Powers of Two

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/62nPmuETpGCiMbddd

//Description:
//Given a number n, return whether it can be expressed as the sum of two powers of two. That means the sum of these types of 'doubling' numbers 1, 2, 4, 8, 16, 32, etc ...
//Examples
//twoPowersTwo(9) ➞ true
//// Can be expressed as 1 + 8 (2^0 + 2^3).
//
//twoPowersTwo(32) ➞ true
//// Can be expressed as 16 + 16 (2^4 + 2^4)
//
//twoPowersTwo(68) ➞ true
//// Can be expressed as 64 + 4 (2^6 + 2^2)
//
//two_powers_of_two(14) ➞ false
//Notes
//The two powers of two don't have to be unique.
//Inputs are whole numbers >= 0
//The powers of two themselves don't have to be whole numbers, so 1 can be considered as valid: 0.5 + 0.5 or 2^-1 + 2^-1
//You can find a similar challenge here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(twoPowersTwo(0), false)
//Test.assertEquals(twoPowersTwo(1), true)
//Test.assertEquals(twoPowersTwo(2), true)
//Test.assertEquals(twoPowersTwo(3), true)
//Test.assertEquals(twoPowersTwo(4), true)
//Test.assertEquals(twoPowersTwo(5), true)
//Test.assertEquals(twoPowersTwo(6), true)
//Test.assertEquals(twoPowersTwo(9), true)
//Test.assertEquals(twoPowersTwo(14), false)
//Test.assertEquals(twoPowersTwo(32), true)
//Test.assertEquals(twoPowersTwo(48), true)
//Test.assertEquals(twoPowersTwo(68), true)
//Test.assertEquals(twoPowersTwo(72), true)
//Test.assertEquals(twoPowersTwo(80), true)
//Test.assertEquals(twoPowersTwo(96), true)
//Test.assertEquals(twoPowersTwo(1052672), true)
//Test.assertEquals(twoPowersTwo(131080), true)
//Test.assertEquals(twoPowersTwo(270336), true)
//Test.assertEquals(twoPowersTwo(1048578), true)
//Test.assertEquals(twoPowersTwo(262176), true)
//​
//// Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Astonishing Numbers

//tags: loops,math,numbers

//url: https://edabit.com/challenge/BPCCy3zLD5d96zyet

//Description:
//In this challenge, you have to establish if a given integer is an Astonishing number. An Astonishing number is an integer that, when partitioned into two parts a (left) and b (right), is equal to the sum of the consecutive numbers from a up to b (if a is lower than b), or from b up to a (if a is greater than b).
//Given a positive integer num, implement a function that returns:
//The string "AB-Astonishing" if num is an Astonishing number and the partition a is lower than b.
//The string "BA-Astonishing" if num is an Astonishing number and the partition a is greater than b.
//false if num is not an Astonishing number.
//Examples
//isAstonishing(15) ➞ "AB-Astonishing"
//// There is only one possible partition: a = 1 and b = 5
//// Sum from a up to b: 1 + 2 + 3 + 4 + 5 = 15
//// It's Astonishing and partition a is lower than partition b
//
//isAstonishing(4020) ➞ false
//// There are three possible partitions
//// Partition 1: a = 4 and b = 020 = 20 (leading zeros are not considered)
//// Sum from a up to b: 4 + 5 + 6 + ... + 20 = 204
//// Partition 2: a = 40 and b = 20
//// Sum from b up to a: 20 + 21 + 22 + ... + 40 = 630
////Partition 3: a = 402 and b = 0
//// Sum from b to a: 0 + 1 + 2 + ... + 402 = 81003
//// It's not Astonishing
//
//isAstonishing(2002077) ➞ "BA-Astonishing"
//// There are six possible partitions
//// Partition 1: a = 2 and b = 002077 = 2077 (leading zeros are not considered)
//// Sum from a up to b: 2 + 3 + 4 + ... + 2077 = 2158002
//// Partition 2: a = 20 and b = 02077 = 2077
//// Sum from a up to b: 20 + 21 + 22 + ... + 2077 = 2157813
//// Partition 3: a = 200 and b = 2077
//// Sum from a up to b: 200 + 201 + 202 + ... + 2077 = 2138103
//// Partition 4: a = 2002 and b = 077 = 77
//// Sum from b up to a: 77 + 78 + 79 + ... + 2002 = 2002077
//// It's Astonishing and partition a is greater than partition b
//Notes
//Leading zeros in the b partition are not considered (see examples #2 and #3).
//A valid partition has at least a number into it, and this number can be also 0 (see example #2).
//You can expect positive integers greater than 9 as input (a single-digit number can't be partitioned).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAstonishing(15), "AB-Astonishing")
//Test.assertEquals(isAstonishing(4020), false)
//Test.assertEquals(isAstonishing(2002077), "BA-Astonishing")
//Test.assertEquals(isAstonishing(190), "BA-Astonishing")
//Test.assertEquals(isAstonishing(429), "AB-Astonishing")
//Test.assertEquals(isAstonishing(1333353333), "AB-Astonishing")
//Test.assertEquals(isAstonishing(2665444422), false)
//Test.assertEquals(isAstonishing(888887270281), false)
//Test.assertEquals(isAstonishing(228118821481188), "AB-Astonishing")
//Test.assertEquals(isAstonishing(2313692851932), "BA-Astonishing")

