

//title: Column With Maximum Sum

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/X47SKhYan6mATPfhA

//Description:
//Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.
//Example
//nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
//n = 4
//Gives the array:
//[[4, 14, 12,  7],
//[14, 16, 5, 13],
//[7, 16, 11, 19]]
//
//// 1, 2, 3, 4 (column)
//// 25, 46, 28, 39 (sum)
//You would return 2, as the 2nd column has the greatest sum.
//Notes
//Nums will always divide into equal-length groups.

//code area
///////////////////////////////////////////////////////////////////////////
const colWithMaxSum = arr => {
    
}


//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(colWithMaxSum([14, 9, 19, 6, 13, 13, 3, 2, 12], 3), 3)
//Test.assertEquals(colWithMaxSum([1, 13, 15, 5, 16, 1, 4, 9, 20], 3), 2)
//Test.assertEquals(colWithMaxSum([15, 4, 6, 10, 6, 4], 2), 1)
//Test.assertEquals(colWithMaxSum([7, 9, 13, 16, 17, 1, 10, 6, 3, 19, 6, 10, 8, 18, 20, 4], 8), 7)
//Test.assertEquals(colWithMaxSum([4, 18, 14, 16, 7, 7, 20, 14, 9, 4, 8, 16, 1, 12, 18, 13], 2), 2)
//Test.assertEquals(colWithMaxSum([5, 7, 2, 12, 20, 7, 1, 12, 8, 7, 12, 8], 3), 2)
//Test.assertEquals(colWithMaxSum([18, 16, 6, 4, 18, 20, 9, 8, 1, 14, 20, 16], 4), 2)
//Test.assertEquals(colWithMaxSum([5, 4, 20, 8, 8, 18], 2), 1)
//Test.assertEquals(colWithMaxSum([2, 9, 12, 9, 17, 6, 8, 9, 8, 18, 2, 4], 2), 2)
//Test.assertEquals(colWithMaxSum([15, 2, 16, 19, 3, 1, 15, 13, 19, 16, 2, 16], 3), 1)
//Test.assertEquals(colWithMaxSum([4, 6, 18, 13, 19, 2, 7, 13, 19, 16, 12, 20, 17, 12, 4, 7], 8), 5)
//Test.assertEquals(colWithMaxSum([10, 8, 6, 2, 2, 2, 18, 17, 17, 20, 17, 17], 6), 1)
//Test.assertEquals(colWithMaxSum([3, 9, 14, 7, 6, 13, 9, 10, 1, 5, 10, 17, 16, 6, 3, 18], 4), 4)
//Test.assertEquals(colWithMaxSum([2, 7, 8, 17, 15, 3], 3), 2)
//Test.assertEquals(colWithMaxSum([8, 8, 6, 4, 8, 16, 4, 16, 18, 20, 20, 7], 2), 2)
//Test.assertEquals(colWithMaxSum([19, 15, 1, 10, 2, 8], 6), 1)
//Test.assertEquals(colWithMaxSum([5, 20, 8, 3, 5, 15], 3), 2)
//Test.assertEquals(colWithMaxSum([10, 12, 15, 14, 17, 4, 18, 12, 17, 18, 18, 12], 4), 3)
//Test.assertEquals(colWithMaxSum([5, 9, 12, 12, 7], 5), 3)
//Test.assertEquals(colWithMaxSum([3, 18, 8, 15, 9, 15, 12, 8, 11, 5, 10, 8], 6), 2)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: To Adjust the Time

//tags: dates,formatting,strings

//url: https://edabit.com/challenge/AuH5MDBMBcTS9Te4K

//Description:
//In this challenge, you have to add a variable amount of hours, minutes and seconds to a given time, obtaining, in turn, a new adjusted time.
//Given a string now being a timestamp in the format hh:mm:ss, and three integers hrs, min and sec being the hours, minutes and seconds to add, implement a function that returns a string being the newly adjusted timestamp (maintaining the same format).
//Examples
//timeAdjust("01:00:00", 1, 30, 10) ➞ "02:30:10"
//
//timeAdjust("18:22:30", 4, 60, 30) ➞ "23:23:00"
//
//timeAdjust("00:00:00", 72, 120, 120) ➞ "02:02:00"
//Notes
//The amounts of hrs, min and sec can be any positive integer, and you have to correctly add them to the corresponding unit if they exceed their scale. See example #2: sixty minutes is one hour, and sixty seconds (30 + 30) is one minute.
//If the amount of time to add exceeds the 24 hours, then the time will start again from "00:00:00". See example #3: 72 hours are 3 exact days so that after three cycles of 24 hours, the hour will be again "00" (and becomes "02" because we are adding also 120 minutes or 2 hours).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(timeAdjust("01:00:00", 1, 30, 10), "02:30:10", "Example #1")
//Test.assertEquals(timeAdjust("18:22:30", 4, 60, 30), "23:23:00", "Example #2")
//Test.assertEquals(timeAdjust("00:00:00", 72, 120, 120), "02:02:00", "Example #3")
//Test.assertEquals(timeAdjust("23:59:59", 0, 0, 1), "00:00:00")
//Test.assertEquals(timeAdjust("12:17:43", 0, 0, 0), "12:17:43")
//Test.assertEquals(timeAdjust("14:11:29", 1000, 23466, 171626), "12:57:55")
//Test.assertEquals(timeAdjust("21:02:55", 39, 62525, 332), "22:13:27")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort by Number of Calls

//tags: closures,functional_programming,higher_order_functions

//url: https://edabit.com/challenge/zi2Mvb2GZi3r34JKv

//Description:
//Create a function that takes a list of functions and sorts them in ascending order based on how many calls are needed for them to return a non-function.
//Examples
//f1 = _ => "hello"
//// f1() ➞ "hello"
//
//f2 = _ => _ => "edabit"
//// f2()() ➞ "edabit"
//
//f3 = _ => _ => _ => "user"
//// f3()()() ➞ "user"
//
//funcSort([f2, f3, f1]) ➞ [f1, f2, f3]
//// [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]
//
//funcSort([f1, f2, f3]) ➞ [f1, f2, f3]
//// [f1, f2, f3] ➞ [1, 2, 3] ➞ [1, 2, 3] ➞ [f1, f2, f3]
//
//funcSort([f2, "func"]) ➞ ["func", f2]
//// [f2, "func"] ➞ [2, 0] ➞ [0, 2] ➞ ["func", f2]
//Notes
//Treat non-functions as needing zero calls.
//Every function will be called with empty parameters.
//Every function will need to be called at least once.
//The potentially returned values include Numbers, Booleans, and Strings, among others.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// example functions
//f1 = _ => "hello"
//f2 = _ => _ => "edabit"
//f3 = _ => _ => _ => "user"
//​
//// examples
//Test.assertSimilar(funcSort([f2, f3, f1]), [f1, f2, f3], 'Example 1')
//Test.assertSimilar(funcSort([f2, 'func']), ['func', f2], 'Example 2')
//​
//// create functions f5 to f14 to be used in tests
//rand = max => Math.floor(Math.random() * max)
//​
//for (k = 5; k < 15; k++) {
//  r = ['"func"', '0', 'null', '[]', '{}', 'true', '1.0'][rand(6)]
//  eval('f' + k.toString() + ' = ' + '_ => '.repeat(k) + r)
//}
//​
//// create 12 random tests
//for (k = 0; k < 12; k++) {
//  r = ["'func'", '0', 'null', '[]', '{}', 'true', '1.0'][rand(6)]
//  g = n => 'f' + n.toString()
//  l = [...Array(5 + rand(5)).keys()].map(k => 5 + rand(10))
//  sl = [...l].sort((x,y) => x - y)
//  lf = '[' + l.map(k => g(k)).toString().replace('f5', r) + ']'
//  slf = '[' + sl.map(k => g(k)).toString().replace('f5', r) + ']'

