

//title: Return the End Letters of Numbers

//tags: control_flow,numbers,strings

//url: https://edabit.com/challenge/MEgXcp8cj3vNvD42v

//Description:
//Create a function that takes an integer and returns it as an ordinal number. An Ordinal Number is a number that tells the position of something in a list, such as 1st, 2nd, 3rd, 4th, 5th, etc.
//Examples
//returnEndOfNumber(553) ➞ "553-RD"
//
//returnEndOfNumber(34) ➞ "34-TH"
//
//returnEndOfNumber(1231) ➞ "1231-ST"
//
//returnEndOfNumber(22) ➞ "22-ND"
//
//returnEndOfNumber(412) ➞ "412-TH"
//Notes
//Check the Resources tab for more info on ordinal numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(returnEndOfNumber(334), "334-TH")
//Test.assertEquals(returnEndOfNumber(12341), "12341-ST")
//Test.assertEquals(returnEndOfNumber(1), "1-ST")
//Test.assertEquals(returnEndOfNumber(3222), "3222-ND")
//Test.assertEquals(returnEndOfNumber(563), "563-RD")
//Test.assertEquals(returnEndOfNumber(412), "412-TH")
//Test.assertEquals(returnEndOfNumber(711), "711-TH")
//Test.assertEquals(returnEndOfNumber(213), "213-TH")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Odd Integer

//tags: arrays,bit_operations,loops,math

//url: https://edabit.com/challenge/GaWzhCsGSHcWyGoZh

//Description:
//Create a function that takes an array and finds the integer which appears an odd number of times.
//Examples
//findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) ➞ -1
//
//findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]) ➞ 5
//
//findOdd([10]) ➞ 10
//Notes
//There will always only be one integer that appears an odd number of times.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function doTest(a, n) {
//  console.log("==================")
//  console.log("A = ", a);
//  console.log("n = ", n);
//  Test.assertEquals(findOdd(a), n);
//}
//​
//Test.describe('TEST CASES', function() {
//  doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//  doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//  doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//  doTest([10], 10);
//  doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//  doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
//});

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Blackjack

//tags: arrays,conditions,games,loops

//url: https://edabit.com/challenge/QGHWExeW6neueusKP

//Description:
//Create a function that takes an array of card numbers and checks if the sum of their value exceeds 21. If the sum exceeds 21, return true and if the sum is under or equal to 21, return false. Values of the cards are as follows:
//2-10 are their value.
//J-K (face cards) count as 10.
//Aces count either as 1 or 11 - play conservatively, so that if giving an ace a value of 11 causes you to lose and 1 allows you to win, then go with 1.
//Examples
//overTwentyOne([2, 8, "J"]) ➞ false
//
//overTwentyOne(["A", "J", "K"]) ➞ false
//
//overTwentyOne([5, 5, 3, 9]) ➞ true
//
//overTwentyOne([2, 6, 4, 4, 5]) ➞ false
//
//overTwentyOne(["J", "Q", "K"]) ➞ true
//Notes
//There will be a maximum of one ace in each hand.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(overTwentyOne(['A', 2, 3]), false);
//Test.assertEquals(overTwentyOne(['A', 'J', 'K']), false);
//Test.assertEquals(overTwentyOne(['A', 'J', 'K', 'Q']), true);
//Test.assertEquals(overTwentyOne([5, 3, 6, 6, 7, 9]), true);

