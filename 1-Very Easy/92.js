

//title: Filter a String

//tags: interview,language_fundamentals,regex,strings

//url: https://edabit.com/challenge/KWkWjHNzgCqM6yPBa

//Description:
//Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.
//Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.
//Examples
//filterString("*$(#Mu12bas43hiR%@*!") ➞ [2, 6, 4, 8]
//// 2 uppercase letters
//// 6 lowercase letters
//// 4 numbers
//// 8 special characters
//
//filterString("^^Edabit^^%$#12379") ➞ [1, 5, 5, 7]
//
//filterString("**Airforce1**") ➞ [1, 7, 1, 4]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterString("*$(#Mu12bas43hiR%@*!"), [2,6,4,8])
//Test.assertSimilar(filterString("^^Edabit^^%$#12379"), [1,5,5,7])
//Test.assertSimilar(filterString("123PakisTan#$%"), [2,6,3,3])
//Test.assertSimilar(filterString("**Airforce1**"), [1,7,1,4])
//Test.assertSimilar(filterString("bgA5<1d-tOwUZTS8yQ"), [7,6,3,2])
//Test.assertSimilar(filterString("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9,9,6,9])
//Test.assertSimilar(filterString("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15,8,6,9])
//Test.assertSimilar(filterString("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10,7,3,6])
//Test.assertSimilar(filterString("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7,13,4,10])
////Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Convert Number to Corresponding Month Name

//tags: arrays,conditions,dates,formatting

//url: https://edabit.com/challenge/NKknKNfeaJxLDfJuZ

//Description:
//Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
//Number	Month Name
//1	January
//2	February
//3	March
//4	April
//5	May
//6	June
//7	July
//8	August
//9	September
//10	October
//11	November
//12	December
//Examples
//monthName(3) ➞ "March"
//
//monthName(12) ➞ "December"
//
//monthName(6) ➞ "June"
//Notes
//You can expect only integers ranging from 1 to 12 as test input.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(monthName(1), "January")
//Test.assertEquals(monthName(2), "February")
//Test.assertEquals(monthName(3), "March")
//Test.assertEquals(monthName(4), "April")
//Test.assertEquals(monthName(5), "May")
//Test.assertEquals(monthName(6), "June")
//Test.assertEquals(monthName(7), "July")
//Test.assertEquals(monthName(8), "August")
//Test.assertEquals(monthName(9), "September")
//Test.assertEquals(monthName(10), "October")
//Test.assertEquals(monthName(11), "November")
//Test.assertEquals(monthName(12), "December")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: After N Months...

//tags: dates,math,numbers

//url: https://edabit.com/challenge/wF7PQGqevdvv6Fu24

//Description:
//Create a function that takes in year and months as input, then return what year it would be after n-months have elapsed.
//Examples
//afterNMonths(2020, 24) ➞ 2022
//
//afterNMonths(1832, 2) ➞ 1832
//
//afterNMonths(1444, 60) ➞ 1449
//Notes
//Assume that adding 12 months will always increment the year by 1.
//If no value is given for year or months, return "year missing" or "month missing".
//At least one value will be present.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(afterNMonths(2020, 24), 2022)
//Test.assertEquals(afterNMonths(1832, 2), 1832)
//Test.assertEquals(afterNMonths(1444, 60), 1449)
//Test.assertEquals(afterNMonths(2020, undefined), "month missing")
//Test.assertEquals(afterNMonths(undefined, 2), "year missing")
//Test.assertEquals(afterNMonths(1444, 65), 1449)
//​
//// made by @Joshua Señoron

