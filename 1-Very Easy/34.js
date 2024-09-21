

//title: Minimal VI: Ternary Operator

//tags: conditions,language_fundamentals,logic

//url: https://edabit.com/challenge/j3aeuun5WDXFsTYAK

//Description:
//In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
//Write a function that returns the strings:
//"both" if both given booleans a and b are true.
//"first" if only a is true.
//"second" if only b is true .
//"neither" if both a and b are false.
//Tips
//If-else statements can be written as a oneliner using Javascript's ternary operator.
//For example, the code:
//function startswith(name) {
//  if ("AEIOU".includes(name[0])) {
//    return "vowel"
//  } else {
//    return "consonant"
//  }
//}
//Can be simplified to:
//function startswith(name) {
//  return "AEIOU".includes(name[0]) ? "vowel" : "consonant"
//}
//Bonus
//You can concatenate as many ternary operators as you want. However, concatenating too many can diminish the readability of your code.
//x > 50 ? "majority" : x < 50 ? "minority" : "draw"
//Notes
//This is an open series: there isn't a definite list of features for the challenges. Please, do not hesitate to leave your suggestions in the Comments.
//Readability is indeed a subjective concept. Let's discuss it! Feel free to leave your opinion in the Comments.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(areTrue(true, true), "both")
//Test.assertEquals(areTrue(true, false), "first")
//Test.assertEquals(areTrue(false, true), "second")
//Test.assertEquals(areTrue(false, false), "neither")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Less Than, Greater Than

//tags: arrays,logic,numbers

//url: https://edabit.com/challenge/FvXHdrhjLaof47Qt3

//Description:
//Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.
//Examples
//arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
//
//arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]
//
//arrBetween(7, 32, [1, 2, 3, 78]) ➞ []
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(arrBetween(7, 32, [1, 2, 3, 78]), [])
//Test.assertSimilar(arrBetween(0, 9, [1, 2, 3, 78]), [1, 2, 3])
//Test.assertSimilar(arrBetween(-5, 3, [-8, 0, 0, 20, -3]), [0, 0, -3])
//Test.assertSimilar(arrBetween(1, 1, [1, 0, 3, 7]), [])
//Test.assertSimilar(arrBetween(0, 310, [1, -2, 300, 78765, 100, 99, 98, 234]), [1, 300, 100, 99, 98, 234])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 50-30-20 Strategy

//tags: algebra,arrays,data_structures,numbers,objects

//url: https://edabit.com/challenge/MQL7KSftPQzrxdJw6

//Description:
//The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
//Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.
//Examples
//fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
//
//fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
//
//fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(fiftyThirtyTwenty(10000), {"Needs": 5000, "Wants": 3000, "Savings": 2000})
//Test.assertSimilar(fiftyThirtyTwenty(50000), {"Needs": 25000, "Wants": 15000, "Savings": 10000})
//Test.assertSimilar(fiftyThirtyTwenty(13450), {"Needs": 6725, "Wants": 4035, "Savings": 2690})
//Test.assertSimilar(fiftyThirtyTwenty(27800), {"Needs": 13900, "Wants": 8340, "Savings": 5560})
//Test.assertSimilar(fiftyThirtyTwenty(19000), {"Needs": 9500, "Wants": 5700, "Savings": 3800})
//Test.assertSimilar(fiftyThirtyTwenty(17610), {"Needs": 8805, "Wants": 5283, "Savings": 3522})
//Test.assertSimilar(fiftyThirtyTwenty(25000), {"Needs": 12500, "Wants": 7500, "Savings": 5000})
//Test.assertSimilar(fiftyThirtyTwenty(100000), {"Needs": 50000, "Wants": 30000, "Savings": 20000})
//Test.assertSimilar(fiftyThirtyTwenty(347100), {"Needs": 173550, "Wants": 104130, "Savings": 69420})
//​
//// Author: comecheckoutmycode

