

//title: Burglary Series (02): Most Valuable Item

//tags: arrays,loops,math,objects

//url: https://edabit.com/challenge/yMEs8bXPyZenPEYLM

//Description:
//You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.
//Examples
//mostExpensiveItem({
//  piano: 2000,
//}) ➞ "piano"
//
//mostExpensiveItem({
//  tv: 30,
//  skate: 20,
//}) ➞ "tv"
//
//mostExpensiveItem({
//  tv: 30,
//  skate: 20,
//  stereo: 50,
//}) ➞ "stereo"
//Notes
//There will only be one most valuable item (no ties).
//The object will always contain at least one item (no empty objects).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mostExpensiveItem({
//  tv: 30,
//  skate: 20,
//  stereo: 50,
//}), "stereo")
//​
//Test.assertSimilar(mostExpensiveItem({
//  skate: 20,
//}), "skate")
//​
//Test.assertEquals(mostExpensiveItem({
//  tv: 30,
//  skate: 20,
//}), "tv")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Doubled Pay

//tags: loops,math,numbers

//url: https://edabit.com/challenge/WdhGpwBN9DnNnWNDs

//Description:
//An employee working at a very bizarre company earns one penny on their first day. However, for every day that passes, their base amount doubles, so they earn two pennies on the second day and four pennies on the third day (totalling 7 pennies). Given a number of days, return how many pennies the employee accumulates.
//Examples
//doubledPay(1) ➞ 1
//
//doubledPay(2) ➞ 3
//
//doubledPay(3) ➞ 7
//Notes
//You will only get tests for valid positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(doubledPay(1), 1)
//Test.assertEquals(doubledPay(2), 3)
//Test.assertEquals(doubledPay(3), 7)
//Test.assertEquals(doubledPay(4), 15)
//Test.assertEquals(doubledPay(5), 31)
//Test.assertEquals(doubledPay(6), 63)
//Test.assertEquals(doubledPay(7), 127)
//Test.assertEquals(doubledPay(8), 255)
//Test.assertEquals(doubledPay(9), 511)
//Test.assertEquals(doubledPay(10), 1023)
//Test.assertEquals(doubledPay(11), 2047)
//Test.assertEquals(doubledPay(12), 4095)
//Test.assertEquals(doubledPay(13), 8191)
//Test.assertEquals(doubledPay(14), 16383)
//Test.assertEquals(doubledPay(15), 32767)
//Test.assertEquals(doubledPay(16), 65535)
//Test.assertEquals(doubledPay(17), 131071)
//Test.assertEquals(doubledPay(18), 262143)
//Test.assertEquals(doubledPay(19), 524287)
//Test.assertEquals(doubledPay(20), 1048575)
//Test.assertEquals(doubledPay(21), 2097151)
//Test.assertEquals(doubledPay(22), 4194303)
//Test.assertEquals(doubledPay(59), 576460752303423487)
//Test.assertEquals(doubledPay(66), 73786976294838206463)
//Test.assertEquals(doubledPay(35), 34359738367)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Percentage Changed

//tags: math

//url: https://edabit.com/challenge/C6ytXLzadegnWtCZF

//Description:
//Create a function that takes an old price oldPrice, a new price newPrice, and returns what percent the price decreased or increased. Round the percentage to the nearest whole percent.
//Examples
//percentageChanged("$800", "$600") ➞ "25% decrease"
//
//percentageChanged("$1000", "$840") ➞ "16% decrease"
//
//percentageChanged("$100", "$950") ➞ "850% increase"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(percentageChanged("$800", "$600"), "25% decrease")
//Test.assertEquals(percentageChanged("$1000", "$840"), "16% decrease")
//Test.assertEquals(percentageChanged("$700", "$650"), "7% decrease")
//Test.assertEquals(percentageChanged("$100", "$950"), "850% increase")
//Test.assertEquals(percentageChanged("$450", "$460"), "2% increase")
//Test.assertEquals(percentageChanged("$1000", "$1500"), "50% increase")

