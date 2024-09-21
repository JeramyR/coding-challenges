

//title: Kaprekar Numbers

//tags: numbers,strings

//url: https://edabit.com/challenge/FzHZJtG5LQwjMGdZp

//Description:
//A Kaprekar Number is a positive integer that is equal to a number formed by first squaring, then splitting and summing its two lexicographical parts:
//If the quantity of digits of the squared number is even, the left and right parts will have the same length.
//If the quantity of digits of the squared number is odd, then the right part will be the longer half, with the left part being the shorter or equal to zero if the quantity of digits is equal to 1.
//Given a positive integer n implement a function that returns true if it's a Kaprekar number, and false if it's not.
//Examples
//isKaprekar(3) ➞ false
//// n² = "9"
//// Left + Right = 0 + 9 = 9 ➞ 9 !== 3
//
//isKaprekar(5) ➞ false
//// n² = "25"
//// Left + Right = 2 + 5 = 7 ➞ 7 !== 5
//
//isKaprekar(297) ➞ true
//// n² = "88209"
//// Left + Right = 88 + 209 = 297 ➞ 297 === 297
//Notes
//Trivially, 0 and 1 are Kaprekar Numbers being the only two numbers equal to their square. Any number formed only by digits equal to 9 will always be a Kaprekar Number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isKaprekar(1), true)
//Test.assertEquals(isKaprekar(2), false)
//Test.assertEquals(isKaprekar(3), false, "Example #1")
//Test.assertEquals(isKaprekar(5), false, "Example #2")
//Test.assertEquals(isKaprekar(9), true)
//Test.assertEquals(isKaprekar(65), false)
//Test.assertEquals(isKaprekar(99), true)
//Test.assertEquals(isKaprekar(297), true, "Example #3")
//Test.assertEquals(isKaprekar(348), false)
//Test.assertEquals(isKaprekar(666), false)
//Test.assertEquals(isKaprekar(1441), false)
//Test.assertEquals(isKaprekar(77778), true)
//Test.assertEquals(isKaprekar(102102), false)
//Test.assertEquals(isKaprekar(533170), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Palindromic Dates

//tags: dates,strings,validation

//url: https://edabit.com/challenge/TmoJMiKP7iuckJHbQ

//Description:
//The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats, otherwise return false.
//Examples
//palindromicDate("02/02/2020") ➞ true
//
//palindromicDate("11/12/2019") ➞ false
//
//palindromicDate("11/02/2011") ➞ false
//// Although 11/02/2011 is palindromic in dd/mm/yyyy format,
//// it isn't in mm/dd/yyyy format (02/11/2011)
//Notes
//All dates will be valid in both date formats.
//The date must be palindromic in both dd/mm/yyyy and mm/dd/yyyy formats to pass.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(palindromicDate("02/02/2020"), true)
//Test.assertEquals(palindromicDate("11/12/2019"), false)
//Test.assertEquals(palindromicDate("11/02/2011"), false)
//Test.assertEquals(palindromicDate("06/10/1469"), false)
//Test.assertEquals(palindromicDate("06/05/3133"), false)
//Test.assertEquals(palindromicDate("12/12/2121"), true)
//Test.assertEquals(palindromicDate("09/09/9090"), true)
//Test.assertEquals(palindromicDate("11/04/2203"), false)
//Test.assertEquals(palindromicDate("07/07/7070"), true)
//Test.assertEquals(palindromicDate("06/11/2923"), false)
//Test.assertEquals(palindromicDate("03/08/8030"), false)
//Test.assertEquals(palindromicDate("01/01/1010"), true)
//Test.assertEquals(palindromicDate("03/11/3369"), false)
//Test.assertEquals(palindromicDate("11/03/2775"), false)
//Test.assertEquals(palindromicDate("03/03/1822"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Total Sales of Product

//tags: arrays,data_structures,language_fundamentals,loops

//url: https://edabit.com/challenge/ZyRoiEiegKfLued8g

//Description:
//In this question you will be given a table as below, where the first row lists the names of products, and each of row after that lists the sales of the product for each day (over some time range).
//[
//  ["A", "B", "C"],
//  [ 2 ,  7 ,  1 ],
//  [ 3 ,  6 ,  6 ],
//  [ 4 ,  5 ,  5 ]
//]
//Write a function that receives:
//A sales table sales as shown above.
//The name of a product product.
//... and returns the total sales if the product is on the array, otherwise return the string "Product not found".
//Examples
//totalSales([
//  ["A", "B", "C"],
//  [ 2 ,  7 ,  1 ],
//  [ 3 ,  6 ,  6 ],
//  [ 4 ,  5 ,  5 ]
//], "A") ➞ 9
//
//// 2 + 3 + 4 = 9
//
//
//totalSales([
//  ["A", "B", "C"],
//  [ 2 ,  7 ,  1 ],
//  [ 3 ,  6 ,  6 ],
//  [ 4 ,  5 ,  5 ]
//], "C") ➞ 12
//
//// 1 + 6 + 5 = 12
//
//
//totalSales([
//  ["A", "B", "C"],
//  [ 2 ,  7 ,  1 ],
//  [ 3 ,  6 ,  6 ],
//  [ 4 ,  5 ,  5 ]
//], "D") ➞ "Product not found"
//Notes
//The examples above all use the same sales table, but in the tests the table will vary.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//table1 = [
// ['A', 'B', 'C'],
// [ 2 ,  7 ,  1 ],
// [ 3 ,  6 ,  6 ],
// [ 4 ,  5 ,  5 ]]
// 
//table2 = [
// ['W', 'X', 'Y', 'Z'],
// [ 3 ,  5 ,  7 ,  1 ],
// [ 4 ,  5 ,  2 ,  3 ]]
// 
//table3 = [
// ['R', 'T', 'V', 'W', 'C'],
// [ 2 ,  3 ,  7 ,  7 ,  4 ],
// [ 8 ,  5 ,  2 ,  9 ,  0 ],
// [ 2 ,  5 ,  8 ,  7 ,  4 ],
// [ 5 ,  3 ,  7 ,  2 ,  3 ]]
//​
//Test.assertEquals(totalSales(table1,'A'), 9)
//Test.assertEquals(totalSales(table1,'B'), 18)
//Test.assertEquals(totalSales(table1,'C'), 12)
//Test.assertEquals(totalSales(table1,'D'), 'Product not found')
//​
//Test.assertEquals(totalSales(table2,'A'), 'Product not found')
//Test.assertEquals(totalSales(table2,'W'), 7)

