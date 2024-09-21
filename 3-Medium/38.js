

//title: Calculate the Missing Value with Ohm`s Law

//tags: math,physics

//url: https://edabit.com/challenge/Y2jWYX8FBR9AvNdyi

//Description:
//Create a function that calculates the missing value of 3 inputs using Ohm's law. The inputs are v, r or i (aka: voltage, resistance and current).
//Ohm's law:
//V = R * I
//Return the missing value rounded to two decimal places.
//Examples
//ohmsLaw(12, 220, "") ➞ 0.05
//
//ohmsLaw(230, "", 2) ➞ 115
//
//ohmsLaw("", 220, 0.02) ➞ 4.4
//
//ohmsLaw("", "", 10) ➞ "Invalid"
//
//ohmsLaw(500, 50, 10) ➞ "Invalid"
//Notes
//Missing values will be ""
//If there is more than one missing value, or no missing value, return "Invalid"
//Only numbers will be given.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(ohmsLaw(12, 220, ''), 0.05)
//Test.assertEquals(ohmsLaw(230, '', 2), 115)
//Test.assertEquals(ohmsLaw('', 220, 0.02), 4.4)
//Test.assertEquals(ohmsLaw('', '', 10), "Invalid")
//Test.assertEquals(ohmsLaw(500, 50, 10), "Invalid")
//Test.assertEquals(ohmsLaw(12, "", ""), "Invalid")
//​
//// Author: Andreas Skauen Bertelsen

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Emphasise the Words

//tags: loops,regex,strings

//url: https://edabit.com/challenge/HRPCRRZ9FPYiXnNhH

//Description:
//Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.
//Examples
//emphasise("hello world") ➞ "Hello World"
//
//emphasise("GOOD MORNING") ➞ "Good Morning"
//
//emphasise("99 red balloons!") ➞ "99 Red Balloons!"
//Notes
//You won't run into any issues when dealing with numbers in strings.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(emphasise("hello world"), "Hello World")
//Test.assertEquals(emphasise("GOOD MORNING"), "Good Morning")
//Test.assertEquals(emphasise("99 red balloons!"), "99 Red Balloons!")
//Test.assertEquals(emphasise("1 2 3 4 5 6 7 8 9"), "1 2 3 4 5 6 7 8 9")
//Test.assertEquals(emphasise(""), "")
//Test.assertEquals(emphasise("joshua senoron"), "Joshua Senoron")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Format Number with Comma(s) Separating Thousands

//tags: formatting,numbers,regex,strings

//url: https://edabit.com/challenge/5o7CE6N4uNAGDzjRg

//Description:
//Create a function that takes a number as an argument and returns a string formatted to separate thousands.
//Examples
//formatNum(1000) ➞ "1,000"
//
//formatNum(100000) ➞ "100,000"
//
//formatNum(20) ➞ "20"
//Notes
//You can expect a valid number for all test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(formatNum(1000), "1,000");
//Test.assertEquals(formatNum(1000000), "1,000,000");
//Test.assertEquals(formatNum(20), "20");
//Test.assertEquals(formatNum(0), "0");
//Test.assertEquals(formatNum(12948), "12,948");

