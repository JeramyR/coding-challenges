

//title: A Week Later

//tags: dates,formatting,strings

//url: https://edabit.com/challenge/9ZWTRFRHf8W2YNEtF

//Description:
//Create a function which takes in a date as a string, and returns the date a week after.
//Examples
//weekAfter("12/03/2020") ➞ "19/03/2020"
//
//weekAfter("21/12/1989") ➞ "28/12/1989"
//
//weekAfter("01/01/2000") ➞ "08/01/2000"
//Notes
//Note that dates will be given in day/month/year format.
//Single digit numbers should be zero padded.
//See Resources for some helpful tutorials on JavaScript dates.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(weekAfter("12/03/2020"), "19/03/2020")
//Test.assertEquals(weekAfter("21/12/1989"), "28/12/1989")
//Test.assertEquals(weekAfter("01/01/2000"), "08/01/2000")
//Test.assertEquals(weekAfter("24/09/1924"), "01/10/1924")
//Test.assertEquals(weekAfter("21/07/1964"), "28/07/1964")
//Test.assertEquals(weekAfter("14/07/2085"), "21/07/2085")
//Test.assertEquals(weekAfter("25/04/1953"), "02/05/1953")
//Test.assertEquals(weekAfter("02/01/2200"), "09/01/2200")
//Test.assertEquals(weekAfter("06/01/2007"), "13/01/2007")
//Test.assertEquals(weekAfter("07/04/2195"), "14/04/2195")
//Test.assertEquals(weekAfter("04/09/2094"), "11/09/2094")
//Test.assertEquals(weekAfter("20/08/1910"), "27/08/1910")
//Test.assertEquals(weekAfter("12/12/1894"), "19/12/1894")
//Test.assertEquals(weekAfter("02/11/2094"), "09/11/2094")
//Test.assertEquals(weekAfter("22/12/1955"), "29/12/1955")
//Test.assertEquals(weekAfter("18/04/1859"), "25/04/1859")
//Test.assertEquals(weekAfter("17/03/1847"), "24/03/1847")
//Test.assertEquals(weekAfter("17/03/2142"), "24/03/2142")
//Test.assertEquals(weekAfter("26/01/2145"), "02/02/2145")
//Test.assertEquals(weekAfter("03/12/1959"), "10/12/1959")
//Test.assertEquals(weekAfter("01/06/1947"), "08/06/1947")
//Test.assertEquals(weekAfter("26/12/1853"), "02/01/1854")
//Test.assertEquals(weekAfter("27/10/2068"), "03/11/2068")
//Test.assertEquals(weekAfter("05/05/2080"), "12/05/2080")
//Test.assertEquals(weekAfter("22/12/2144"), "29/12/2144")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find Missing Least Positive Element From Array

//tags: arrays

//url: https://edabit.com/challenge/hEdPafen6dTL32Q5c

//Description:
//Create a function that returns an array of missing least positive element(s) from a given array. Resulted array can not contain 0 or negative numbers.
//Examples
//getLeastPositiveElements([3, 4, -1, 1]) ➞ [2]
//
//getLeastPositiveElements([3, 4, 6, -1, -3,1]) ➞ [2, 5]
//
//getLeastPositiveElements([1, 8, 6, -1, -9,1]) ➞ [2, 3, 4, 5, 7]
//Notes
//Please check example for clarification

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// JavaScript
//Test.assertSimilar(getLeastPositiveElements([3, 4, -1, 1]), [2])
//Test.assertSimilar(getLeastPositiveElements([3, 4, 6, -1, -3,1]), [2, 5])
//Test.assertSimilar(getLeastPositiveElements([1, 8, 6, -1, -9,1]), [2, 3, 4, 5, 7])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Key - Mouse (Logic)

//tags: language_fundamentals,logic,math

//url: https://edabit.com/challenge/NQnWDcLTcu7A5H6F9

//Description:
//A keyboard and a mouse cost in total x, knowing that the keyboard costs y more than the mouse, calculate the price of the mouse. Round the price of the mouse.
//Examples
//KM({"Total": "10.00$", "Difference": "0.40$", "Mouse": "?"})
//➞ {"Total": "10.00$", "Difference":"0.40$", "Mouse": "4.8$"}
//
//KM({"Total": "90.00$", "Difference": "5.40$", "Mouse": "?"})
//➞ {"Total": "90.00$", "Difference": "5.40$", "Mouse": "42.3$"}
//
//KM({"Total": "1.30$", "Difference": "0.80$", "Mouse": "?"})
//➞ {"Total": "1.30$", "Difference": "0.80$", "Mouse": "0.25$"}
//Notes
//If you get stuck, check the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(KM({"Total": "1.90$", "Difference": "0.90$", "Mouse": "?"}), {"Total": "1.90$", "Difference":"0.90$", "Mouse": "0.5$"})
//Test.assertSimilar(KM({"Total": "1.30$", "Difference": "0.80$", "Mouse": "?"}), {"Total": "1.30$", "Difference":"0.80$", "Mouse": "0.25$"})
//Test.assertSimilar(KM({"Total": "3.90$", "Difference": "0.20$", "Mouse": "?"}), {"Total": "3.90$", "Difference":"0.20$", "Mouse": "1.85$"})
//Test.assertSimilar(KM({"Total": "0.801$", "Difference": "0.40$", "Mouse": "?"}), {"Total": "0.801$", "Difference":"0.40$", "Mouse": "0.2$"})
//Test.assertSimilar(KM({"Total": "10.00$", "Difference": "0.40$", "Mouse": "?"}), {"Total": "10.00$", "Difference":"0.40$", "Mouse": "4.8$"})
//Test.assertSimilar(KM({"Total": "20.00$", "Difference": "1.40$", "Mouse": "?"}), {'Total': '20.00$', 'Difference': '1.40$', 'Mouse': '9.3$'})

