

//title: Factor Chain

//tags: arrays,loops,validation

//url: https://edabit.com/challenge/FtZGQEonGwyozeCna

//Description:
//A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:
//[3, 6, 12, 36]
//
//// 3 is a factor of 6
//// 6 is a factor of 12
//// 12 is a factor of 36
//Create a function that determines whether or not an array is a factor chain.
//Examples
//factorChain([1, 2, 4, 8, 16, 32]) ➞ true
//
//factorChain([1, 1, 1, 1, 1, 1]) ➞ true
//
//factorChain([2, 4, 6, 7, 12]) ➞ false
//
//factorChain([10, 1]) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(factorChain([1, 2, 4, 8, 16, 32]), true)
//Test.assertEquals(factorChain([1, 1, 1, 1, 1, 1]), true)
//Test.assertEquals(factorChain([2, 4, 6, 7, 12]), false)
//Test.assertEquals(factorChain([10, 1]), false)
//Test.assertEquals(factorChain([10, 20, 30, 40]), false)
//Test.assertEquals(factorChain([10, 20, 40]), true)
//Test.assertEquals(factorChain([1, 1, 1, 1, 7, 49]), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Multiplying Numbers in a String

//tags: language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/TzxoYExuxuQw2ahWR

//Description:
//Given a string of numbers separated by a comma and space, return the product of the numbers.
//Examples
//multiplyNums("2, 3") ➞ 6
//
//multiplyNums("1, 2, 3, 4") ➞ 24
//
//multiplyNums("54, 75, 453, 0") ➞ 0
//
//multiplyNums("10, -2") ➞ -20
//Notes
//Bonus: Try to complete this challenge in one line!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(multiplyNums("2, 3"), 6)
//Test.assertEquals(multiplyNums("1, 2, 3, 4"), 24)
//Test.assertEquals(multiplyNums("54, 75, 453, 0"), 0)
//Test.assertEquals(multiplyNums("10, -2"), -20)
//Test.assertEquals(multiplyNums("-26, 1, -27, -12, -19"), 160056)
//Test.assertEquals(multiplyNums("16, 8"), 128)
//Test.assertEquals(multiplyNums("-27, -14, -28, 13, -17"), 2339064)
//Test.assertEquals(multiplyNums("-19, -22, -14, 20, -15, -24, -17, 19, 30, -10"), -4082823360000)
//Test.assertEquals(multiplyNums("1, 13, 0, -11, 26, -17, 21"), 0)
//Test.assertEquals(multiplyNums("-25, -19, 7, -26, -26"), 2247700)
//Test.assertEquals(multiplyNums("-4, -16, -22, -3, -6"), -25344)
//Test.assertEquals(multiplyNums("-22, 11, 19, 5, 19, -9, -13, 20, -29"), 29641926600)
//Test.assertEquals(multiplyNums("-25, 22"), -550)
//Test.assertEquals(multiplyNums("26, -19, 17, 26, -21"), 4585308)
//Test.assertEquals(multiplyNums("5, -1, 1, -28, 14, 28, 1"), 54880)
//Test.assertEquals(multiplyNums("-27, -9, 6, -25, 4"), -145800)
//Test.assertEquals(multiplyNums("-24, -13, -14, 30, 9, -14"), 16511040)
//Test.assertEquals(multiplyNums("27, 25, 27, -18, -27, -7, 28, 27, 0"), 0)
//Test.assertEquals(multiplyNums("-23, 11, -18, -5, -4"), 91080)
//Test.assertEquals(multiplyNums("-16, -10, -29, -23, -30, -1"), 3201600)
//Test.assertEquals(multiplyNums("-14, -17, 9, -2, -17, -10, -30"), 21848400)
//Test.assertEquals(multiplyNums("-13, -23, 10, 0, -23"), 0)
//Test.assertEquals(multiplyNums("0"), 0)
//Test.assertEquals(multiplyNums("30"), 30)
//Test.assertEquals(multiplyNums("-24, -21, 6, -29, 23, 11, -21, -29"), -13511936592)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is Johnny Making Progress?

//tags: arrays,loops,numbers

//url: https://edabit.com/challenge/QtcPzxgcZJQdsfdMS

//Description:
//To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
//Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
//Examples
//progressDays([3, 4, 1, 2]) ➞ 2
//// There are two progress days, (3->4) and (1->2)
//
//progressDays([10, 11, 12, 9, 10]) ➞ 3
//
//progressDays([6, 5, 4, 3, 2, 9]) ➞ 1
//
//progressDays([9, 9])  ➞ 0
//Notes
//Running the same number of miles as last week does not count as a progress day.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(progressDays([3, 4, 1, 2]), 2);
//Test.assertEquals(progressDays([10, 11, 12, 9, 10]), 3);
//Test.assertEquals(progressDays([6, 5, 4, 3, 2, 9]), 1);
//Test.assertEquals(progressDays([9, 9]), 0);
//Test.assertEquals(progressDays([12, 11, 10, 12, 11, 13]), 2);

