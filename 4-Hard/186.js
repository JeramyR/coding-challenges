

//title: Electricity Bill

//tags: conditions,math,numbers

//url: https://edabit.com/challenge/aZjeXFRsaoJNRb7Ed

//Description:
//Create a function that takes number of units consumed by the customer and returns calculated Electricity Bill as per following conditions:
//First 100 Units will be charged at $1/unit.
//Next 100 Units will be charged at $2/unit.
//Next 100 Units will be charged at $3/unit.
//Next 200 Units will be charged at $4/unit.
//Next Units will be charged at $5/unit.
//10% tax to be added in final amount.
//Extra $15 to be added for Meter Charge.
//Examples
//electricityBill(100) ➞ 125
//// 100 units at $1/unit = 100,
//// 10% Tax = 10,
//// $15 for Meter Charge = 15,
//// Electricity Bill = 100 + 10 + 15
//
//electricityBill(225) ➞ 427.5
//// 100 units at $1/unit = 100, 100 units at $2/unit = 200, 25 units at $3/unit = 75
//// 10% Tax = 37.5,
//// 15$ for Meter Charge = 15,
//// Electricity Bill = 100 + 200 + 75 + 22.5 + 15 = 427.50
//
//electricityBill(300) ➞ 675
//// 100 units at $1/unit = 100, 100 units at $2/unit = 200, 100 units at $3/unit = 300
//// 10% Tax = 60,
//// 15$ for Meter Charge = 15,
//// Electricity Bill = 100 + 200 + 300 + 60 + 15 = 675
//Notes
//Return final calculated Electricity Bill rounded up to two decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(electricityBill(100), 125.00)
//Test.assertSimilar(electricityBill(225), 427.50)
//Test.assertSimilar(electricityBill(300), 675.00)
//Test.assertSimilar(electricityBill(500), 1555)
//Test.assertSimilar(electricityBill(1000), 4305)
//Test.assertSimilar(electricityBill(133.17), 197.98)
//Test.assertSimilar(electricityBill(33.31), 51.65)
//Test.assertSimilar(electricityBill(471.67), 1430.35)
//Test.assertSimilar(electricityBill(532.56), 1734.08)
//Test.assertSimilar(electricityBill(111.11), 149.45)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: When to Sleep?

//tags: arrays,logic,numbers,strings

//url: https://edabit.com/challenge/fKGMjfjibMM7AxtpZ

//Description:
//Given a series of arrays, with each individual array containing the time of the alarm set and the sleep duration, return what time to sleep.
//Examples
//bedTime(["07:50", "07:50"]) ➞ ["00:00"]
//// The second argument means 7 hours, 50 minutes sleep duration.
//
//bedTime(["06:15", "10:00"], ["08:00", "10:00"], ["09:30", "10:00"]) ➞ ["20:15", "22:00", "23:30"]
//// The second argument of each sub list means 10 hours sleep duration.
//
//bedTime(["05:45", "04:00"], ["07:10", "04:30"]) ➞ ["01:45", "02:40"]
//// Sleep duration can be different among the arrays.
//Notes
//Times should be given in 24-hrs (i.e. "23:25" as opposed to "11:25PM").
//Return an array of strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(bedTime(['07:50', '07:50']), ['00:00'])
//Test.assertSimilar(bedTime(['06:15', '10:00'], ['08:00', '10:00'], ['09:30', '10:00']), ['20:15', '22:00', '23:30'])
//Test.assertSimilar(bedTime(['05:45', '04:00'], ['07:10', '04:30']), ['01:45', '02:40'])
//​
//// Made by @Joshua Señoron

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sum Quadratic Roots

//tags: algebra,math

//url: https://edabit.com/challenge/kpSesJm9Frbi84eNB

//Description:
//Given a, b and c, find the roots of the equation ax^2 +bx +c = 0 and then add them together.
//Round your answer to two decimal places.
//If there is only one real root return 1.
//If there are no real roots, return 0.
//Examples
//findRootsSum(2, 4, -6) ➞ -2.00
//
//findRootsSum(3, 4, -3) ➞ -1.33
//
//findRootsSum(4, 3, -8) ➞ -0.75
//Notes
//The Discriminant of a quadratic equation is b^2-4(a)(c).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findRootsSum(2, 4, -6), -2.00)
//Test.assertEquals(findRootsSum(3, 4, -3), -1.33)
//Test.assertEquals(findRootsSum(4, 3, -8), -0.75)
//Test.assertEquals(findRootsSum(5, 7, -2), -1.40)
//Test.assertEquals(findRootsSum(2, 4, 2), 1.00)
//Test.assertEquals(findRootsSum(3, 4, 3), 0.00)

