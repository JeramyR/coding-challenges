

//title: A Day at the Market

//tags: conditions,logic,numbers

//url: https://edabit.com/challenge/qq2HY8vM6Gz478qD2

//Description:
//Backpack Bill and Wallet Will set off for the annual festival. As they approach the stalls, Bill retorts that he'll be able to bring home more stuff than Will. Taking this as a challenge, Will refutes and a competition spurs into action.
//Backpack Bill has an infinite inventory space, but a limited number of coins.
//Wallet Will has an infinite number of coins, but a limited inventory space.
//Create a function that returns the name of the man who can bring home the most items. The parameters are given as follows:
//Bill's amount of money.
//Will's amount of inventory space.
//The item's price.
//The item's size.
//Worked Example
//whoWinsTonight(40, 95, 5, 10) ➞ "Will"
//
//// The item costs 5 coins and takes up 10 inventory spaces.
//// Bill can only buy a maximum of 8 items (40 coins DIV 5 = 8).
//// Will can only bring home a maximum of 9 items. (95 inventory spaces DIV 10 = 9).
//// Will is the winner.
//Examples
//whoWinsTonight(20, 20, 5, 10) ➞ "Bill"
//
//whoWinsTonight(10, 2, 20, 1) ➞ "Will"
//
//whoWinsTonight(3, 7, 2, 5) ➞ "Tie"
//Notes
//DIV means a floored division. That means you round down after dividing.
//Return "Tie" if both men can afford the same amount of stuff.
//All numbers will be positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(whoWinsTonight(20, 20, 5, 10), 'Bill')
//Test.assertEquals(whoWinsTonight(30, 100, 1, 50), 'Bill')
//Test.assertEquals(whoWinsTonight(90, 10, 2, 5), 'Bill')
//​
//Test.assertEquals(whoWinsTonight(10, 2, 20, 1), 'Will')
//Test.assertEquals(whoWinsTonight(40, 100, 5, 10), 'Will')
//Test.assertEquals(whoWinsTonight(5, 5, 5, 2), 'Will')
//​
//Test.assertEquals(whoWinsTonight(3, 7, 2, 5), 'Tie')
//Test.assertEquals(whoWinsTonight(50, 50, 49, 26), 'Tie')
//Test.assertEquals(whoWinsTonight(100000, 100000, 1, 1), 'Tie')
//​
//// Author: Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Make My Way Home

//tags: math,numbers

//url: https://edabit.com/challenge/ywBPgGhgeLHibEG7H

//Description:
//You will be given a list, showing how far James travels away from his home for each day. He may choose to travel towards or away from his house, so negative values are to be expected.
//Create a function that calculates what distance James must walk to get back home.
//Examples
//distanceHome([2, 4, 2, 5]) ➞ 13
//
//distanceHome([-1, -4, -3, -2]) ➞ 10
//
//distanceHome([3, 4, -5, -2]) ➞ 0
//Notes
//Assume that James only travels in a straight line.
//Distance is always a positive number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(distanceHome([2, 4, 2, 5]), 13)
//Test.assertEquals(distanceHome([-1, -4, -3, -2]), 10)
//Test.assertEquals(distanceHome([3, 4, -5, -2]), 0)
//Test.assertEquals(distanceHome([12, 12]), 24)
//Test.assertEquals(distanceHome([10, 8, -4, -10, -15, 14, -13]), 10)
//Test.assertEquals(distanceHome([-3, -6, -15, -14, -11, 3, 0, -15, 0]), 61)
//Test.assertEquals(distanceHome([-11, -4, -14, 4, -2, 7, 0, -1, 10, -1]), 12)
//Test.assertEquals(distanceHome([-7, 1, 0, -9, 0, 0]), 15)
//Test.assertEquals(distanceHome([-15, -7, 4, -3, -8]), 29)
//Test.assertEquals(distanceHome([-11, 10, -6, 8, 0, 12, -11]), 2)
//Test.assertEquals(distanceHome([-4, -5, -14, -13]), 36)
//Test.assertEquals(distanceHome([5, 8]), 13)
//Test.assertEquals(distanceHome([10, -15, -3, 2, 4, -15, 11, 1]), 5)
//Test.assertEquals(distanceHome([9, 13, -11, -11, -10, -12, 15, -3]), 10)
//Test.assertEquals(distanceHome([13, -1, -12, -4, 0, 10, 8, 10]), 24)
//Test.assertEquals(distanceHome([-9, 1, -10, 10, -9, -10, 0, 11, -2, -3]), 21)
//Test.assertEquals(distanceHome([13, 2, 12, 12, -15, 11, 9, 0, 13]), 57)
//Test.assertEquals(distanceHome([0, 5, 8, -3]), 10)
//Test.assertEquals(distanceHome([-10, 2, -1, -12]), 21)
//Test.assertEquals(distanceHome([-9, -11, 11, -15, -8]), 32)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Lowercase, Uppercase or Mixed?

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/FBedBBPjcgGDBm5yr

//Description:
//Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
//Examples
//getCase("whisper...") ➞ "lower"
//
//getCase("SHOUT!") ➞ "upper"
//
//getCase("Indoor Voice") ➞ "mixed"
//Notes
//Ignore punctuation, spaces and numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getCase("whisper..."), "lower")
//Test.assertEquals(getCase("SHOUT!"), "upper")
//Test.assertEquals(getCase("Indoor Voice"), "mixed")
//Test.assertEquals(getCase("324324Indoor66453546Voice434"), "mixed")
//Test.assertEquals(getCase("!!!!SHOUT!!!!"), "upper")
//Test.assertEquals(getCase("......313whisper2131232..."), "lower")

