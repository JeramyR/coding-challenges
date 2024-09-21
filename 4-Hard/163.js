

//title: Coin Co-Operation

//tags: algorithms,interview,language_fundamentals,loops

//url: https://edabit.com/challenge/PuGi7j9rm5nHBX8Ec

//Description:
//Let's say that there exists a machine that gives out free coins, but with a twist!
//Separating two people is a wall, and this machine is placed in such a way that both people are able to access it. Spending a coin in this machine will give the person on the other side 3 coins and vice versa.
//If both people continually spend coins for each other (SHARING), then they'll both gain a net profit of 2 coins per turn. However, there is always the possibility for someone to act selfishly (STEALING): they spend no coins, yet they still receive the generous 3 coin gift from the other person!
//Here's an example of Red taking advantage of Green! 
//The Challenge
//Assuming that both people start with 3 coins each, create a function that calculates both people's final number of coins. You will be given two arrays of strings, with each string being the words "share" or "steal".
//Examples
//getCoinBalances(["share"], ["share"]) ➞ [5, 5]
//// Both people spend one coin, and receive 3 coins each.
//
//getCoinBalances(["steal"], ["share"]) ➞ [6, 2]
//// Person 1 gains 3 coins, while person 2 loses a coin.
//
//getCoinBalances(["steal"], ["steal"]) ➞ [3, 3]
//// Neither person spends any coins and so no one gets rewarded.
//
//getCoinBalances(["share", "share", "share"], ["steal", "share", "steal"]) ➞ [3, 11]
//Notes
//No tests will include a negative number of coins.
//All words will be given in lowercase.
//This challenge is adapted from a famous game theory example called the Prisoner's Dilemma, which you can learn more about in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getCoinBalances(['share'], ['share']), [5, 5])
//Test.assertSimilar(getCoinBalances(['steal'], ['share']), [6, 2])
//Test.assertSimilar(getCoinBalances(['share'], ['steal']), [2, 6])
//Test.assertSimilar(getCoinBalances(['steal'], ['steal']), [3, 3])
//​
//Test.assertSimilar(getCoinBalances(['share', 'share', 'share'], ['steal', 'share', 'steal']), [3, 11])
//Test.assertSimilar(getCoinBalances(['share', 'share', 'steal', 'share'], ['steal', 'steal', 'steal', 'steal']), [0, 12])
//Test.assertSimilar(getCoinBalances(['steal', 'steal', 'steal'], ['share', 'share', 'share']), [12, 0])
//Test.assertSimilar(getCoinBalances(['share', 'share'], ['share', 'share']), [7, 7])
//Test.assertSimilar(getCoinBalances(['share', 'steal', 'steal', 'steal'], ['share', 'share', 'steal', 'share']), [11, 3])
//Test.assertSimilar(getCoinBalances(['share', 'share', 'steal', 'share'], ['steal', 'share', 'steal', 'steal']), [3, 11])
//Test.assertSimilar(getCoinBalances(['steal', 'steal', 'steal', 'steal'], ['steal', 'steal', 'steal', 'steal']), [3, 3])
//Test.assertSimilar(getCoinBalances(['steal', 'share', 'steal', 'steal'], ['share', 'share', 'steal', 'steal']), [8, 4])
//Test.assertSimilar(getCoinBalances(['steal', 'steal'], ['share', 'share']), [9, 1])
//Test.assertSimilar(getCoinBalances(['steal', 'share'], ['share', 'steal']), [5, 5])
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Domino Chain

//tags: algorithms,strings,validation

//url: https://edabit.com/challenge/6WCXBFrY3jvbJe3xm

//Description:
//Mubashir was playing with dominos. He concluded that:
//If the first domino is pushed over, it will keep tipping next dominos to its right.
//Reaction will stop if a domino is already tipped over, or if there is an empty space.
//
//Create a function which takes a string of current status of the dominos and returns the string after dominos chain reaction.
//"|" represents a standing domino.
//"/" represents a tripped domino.
//" " represents an empty space.
//Examples
//dominoChain("||| ||||//| |/") ➞ "/// ||||//| |/"
//// A space will stop the reaction.
//
//dominoChain("||//||") ➞ "////||"
//// An already tripped domino will stop the reaction.
//
//dominoChain("||||") ➞ "////"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(dominoChain("||| ||||//| |/"), "/// ||||//| |/")
//Test.assertEquals(dominoChain("|||||"), "/////")
//Test.assertEquals(dominoChain(" ///"), " ///")
//Test.assertEquals(dominoChain(""), "")
//Test.assertEquals(dominoChain(" "), " ")
//Test.assertEquals(dominoChain("||||| |||"), "///// |||")
//Test.assertEquals(dominoChain("|||||/|||"), "//////|||")
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Perfect or Amicable?

//tags: conditions,math,numbers

//url: https://edabit.com/challenge/gGrPrwZ5XZ3GqEzkp

//Description:
//Given a positive number x, if all the positive divisors of x (excluding x) add up to x, then x is said to be a perfect number.
//For example, the set of positive divisors of 6 excluding 6 itself is (1, 2, 3). The sum of this set is 6. Therefore, 6 is a perfect number.
//Given a positive number x, if all the positive divisors of x add up to a second number y, and all the positive divisors of y add up to x, then x and y are said to be a pair of amicable numbers.
//Create a function that takes a number and returns "Perfect" if the number is perfect, "Amicable" if the number is part of an amicable pair, or "Neither".
//Examples
//numType(6) ➞ "Perfect"
//
//numType(2924) ➞ "Amicable"
//
//numType(5010) ➞ "Neither"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numType(6), "Perfect")
//Test.assertEquals(numType(2924), "Amicable")
//Test.assertEquals(numType(5010), "Neither")
//Test.assertEquals(numType(8128), "Perfect")
//Test.assertEquals(numType(10744), "Amicable")
//Test.assertEquals(numType(17296), "Amicable")
//Test.assertEquals(numType(498), "Neither")
//Test.assertEquals(numType(66992), "Amicable")
//Test.assertEquals(numType(5566), "Neither")

