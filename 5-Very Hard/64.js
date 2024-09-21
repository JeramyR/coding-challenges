

//title: Coin Trouble

//tags: arrays,logic,loops,validation

//url: https://edabit.com/challenge/xP34EkkKFGQc6ZGwg

//Description:
//Given an array of coins, father needs to distribute them amongst his three children. Write a function to determine if the coins can be distributed equally or not. Return true if each son receives the same amount of money, otherwise return false.
//[1, 2, 3, 2, 2, 2, 3] ➞ true
//Amount to be distributed to each child = (1+2+3+2+4+3)/3 => 15/3 => 5
//Possible set of coin to be distributed to children = [(1,2,2),(2,3),(2,3)]
//[5, 3, 10, 1, 2] ➞ false
//Amount to be distributed to each child = (5+3+10+1+2)/3 => 21/3 => 7
//But there are no combination such that each child get equal value which is 7.
//Examples
//coinsDiv([1, 2, 3, 2, 2, 2, 3]) ➞ true
//
//coinsDiv([5, 3, 10, 1, 2]) ➞ false
//
//coinsDiv([2, 4, 3, 2, 4, 9, 7, 8, 6, 9]) ➞ true
//Notes
//Inputs will be an array of positive integers only.
//Coin can be any positive value.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(coinsDiv([1, 1, 1]), true)
//Test.assertEquals(coinsDiv([80, 78, 79, 65, 61]), false)
//Test.assertEquals(coinsDiv([1, 1, 1]), true)
//Test.assertEquals(coinsDiv([80, 78, 79, 65, 61]), false)
//Test.assertEquals(coinsDiv([1, 2, 3, 2, 2, 2, 3]), true)
//Test.assertEquals(coinsDiv([5, 3, 10, 1, 2]), false)
//Test.assertEquals(coinsDiv([2, 4, 3, 2, 4, 9, 7, 8, 6, 9]), true)
//Test.assertEquals(coinsDiv([4, 7, 6, 8, 2, 1, 2]), true)
//Test.assertEquals(coinsDiv([3, 6, 2, 2, 2, 2, 1, 3, 2, 1, 3]), true)
//Test.assertEquals(coinsDiv([11, 9, 3, 22, 6, 2, 4, 10, 1]), false)
//Test.assertEquals(coinsDiv([13, 6, 12, 23, 2, 8, 15, 31, 16]), false)
//Test.assertEquals(coinsDiv([4, 14, 12, 21, 3, 1, 18, 5]), true)
//Test.assertEquals(coinsDiv([10, 5, 20, 27, 17, 4, 3, 15, 0, 25]), true)
//Test.assertEquals(coinsDiv([7, 3, 3, 4, 5, 4, 1, 1, 1, 1, 1, 8, 7, 3, 3, 4, 5, 4, 1, 1, 1, 1, 1, 8]), true)
//Test.assertEquals(coinsDiv([1, 13, 10, 6, 24, 16, 22, 4]), false)
//Test.assertEquals(coinsDiv([9]), false)
//Test.assertEquals(coinsDiv([246, 96, 129, 220, 203, 75, 200, 77, 114, 91]), false)
//Test.assertEquals(coinsDiv([3, 2, 2, 5, 9, 3, 3]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count 5s and Win

//tags: algorithms,arrays

//url: https://edabit.com/challenge/i3kofSpArqtR4jaGj

//Description:
//Arun is obsessed with primes, especially five. He considers a number to be luckiest if it has the highest number of five in it. If two numbers have the same frequency of five, Arun considers the larger of them to be luckiest, and if there is no five in any number, the first given number is considered luckiest. Help him choose the luckiest number.
//Examples
//getLuckiest([5, 12, 55, 11]) ➞ 55
//
//getLuckiest([5, 12, -55,  11]) ➞ -55
//
//getLuckiest([515, 1255, -55,  1]) ➞ 1255
//
//getLuckiest([44, 12, 7, 40]) ➞ 44
//Notes
//Return null if given an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getLuckiest([]), null)
//Test.assertEquals(getLuckiest([-55, -155, 45, 31, 67]), -55)
//Test.assertEquals(getLuckiest([5, 12, 55, 11]), 55)
//Test.assertEquals(getLuckiest([5, 12, -55,  11]), -55)
//Test.assertEquals(getLuckiest([515, 1255, -55,  1]), 1255)
//Test.assertEquals(getLuckiest([44, 12, 7, 40]) , 44)
//Test.assertEquals(getLuckiest([-1, -43, -67, 3]), -1)
//​
//// Author : Arun Suryan

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Excel Sheet Column Number

//tags: language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/PokiiWCazbS3L8sHr

//Description:
//Given a column title as it appears in an Excel sheet return its corresponding column number.
//The number is computed in the following way:
//A -> 1
//B -> 2
//C -> 3
//...
//Z -> 26
//AA -> 27
//AB -> 28
//...
//Examples
//titleToNumber("A") ➞ 1
//
//titleToNumber("R") ➞ 18
//
//titleToNumber("AB") ➞ 28
//Notes
//1 <= len(s) <= 7
//s consists only of uppercase English letters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(titleToNumber("A"), 1)
//Test.assertEquals(titleToNumber("R"), 18)
//Test.assertEquals(titleToNumber("AB"), 28)
//Test.assertEquals(titleToNumber("ZY"), 701)
//Test.assertEquals(titleToNumber("KFC"), 7595)
//Test.assertEquals(titleToNumber("WEB"), 15680)
//Test.assertEquals(titleToNumber("FANG"), 106503)
//Test.assertEquals(titleToNumber("CODE"), 62977)
//Test.assertEquals(titleToNumber("AGILE"), 586409)
//Test.assertEquals(titleToNumber("TRUMP"), 9470438)
//Test.assertEquals(titleToNumber("EDABIT"), 61253966)
//Test.assertEquals(titleToNumber("PYTHON"), 201883748)
//Test.assertEquals(titleToNumber("ANISTON"), 479715692)
//Test.assertEquals(titleToNumber("FRIENDS"), 2071569675)

