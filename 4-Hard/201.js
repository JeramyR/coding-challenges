

//title: String to Phone Number

//tags: arrays,formatting,numbers,regex,strings

//url: https://edabit.com/challenge/2Ybd7gvXJQd5h5CMH

//Description:
//You're able to call numbers like 1-800-flowers which replace the characters with the associated numbers on a cellular device keyboard.
//Conversion
//abc  = 2
//def  = 3
//ghi  = 4
//jkl  = 5
//mno  = 6
//pqrs = 7
//tuv  = 8
//wxyz = 9
//This is your task:
//Create a function that takes a string as argument.
//Convert all letters to numbers by using a cellular device keyboard as reference and leave any other characters in.
//Return a string containing the argument with replaced letters.
//Examples
//dial("1-800-HOTLINEBLING") ➞ "1-800-468546325464"
//
//dial("abc-def-ghi-jkl!!") ➞ "222-333-444-555!!"
//
//dial("adgjmptw :)") ➞ "23456789 :)"
//Notes
//While when you would write a SMS back in the day, to enter "b", you would have to press "2" twice. When calling numbers this is not the case as the range a-c gets converted to "2".
//Given string can contain upper and lowercase letters.
//Enjoy and good luck!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//function test(entry, shouldBe) {
//  Test.assertEquals(dial(entry), shouldBe, "Number " + entry + " not converted correctly")
//}
//​
//test("1-800-HOTLINEBLING", "1-800-468546325464", "Incorrect Number")
//test("hello-world!", "43556-96753!", "Incorrect Number")
//test("aaaabcccdefggg", "22222222333444", "Incorrect Number")
//test("01023468adghijgkmz?", "010234682344454569?", "Incorrect Number")
//test("SwApPeDcAsE", "79277332273", "Incorrect Number")
//test("VAPORWAVE", "827679283", "Incorrect Number")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Time Around the World

//tags: dates,formatting

//url: https://edabit.com/challenge/5fN46pGqkjd9EQXca

//Description:
//In this challenge, the goal is to calculate what time it is in two different cities. You're given a string cityA and the related string timestamp (time in cityA) with the date formatted in full U.S. notation, as in this example:
//"July 21, 1983 23:01"
//You have to return a new timestamp with date and corresponding time in cityB, formatted as in this example:
//"1983-7-21 23:01"
//See the table below for a list of given cities and their GMT (Greenwich Mean Time) hours offsets.
//GMT	City
//- 08:00	Los Angeles
//- 05:00	New York
//- 04:30	Caracas
//- 03:00	Buenos Aires
//00:00	London
//+ 01:00	Rome
//+ 03:00	Moscow
//+ 03:30	Tehran
//+ 05:30	New Delhi
//+ 08:00	Beijing
//+ 10:00	Canberra
//Examples
//timeDifference("Los Angeles", "April 1, 2011 23:23", "Canberra") ➞ "2011-4-2 17:23"
//// Can be a new day.
//
//timeDifference("London", "July 31, 1983 23:01", "Rome") ➞ "1983-8-1 00:01"
//// Can be a new month.
//
//timeDifference("New York", "December 31, 1970 13:40", "Beijing") ➞ "1971-1-1 02:40"
//// Can be a new year.
//Notes
//Pay attention to hours and minutes, a leading 0 is needed in the returned timestamp when they're a single digit (see examples #2 and #3).
//Pay attention to cities with half hours offsets.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(timeDifference("Los Angeles", "April 1, 2011 23:23", "Canberra"), "2011-4-2 17:23", "Example #1")
//Test.assertEquals(timeDifference("London", "July 31, 1983 23:01", "Rome"), "1983-8-1 00:01", "Example #2")
//Test.assertEquals(timeDifference("New York", "December 31, 1970 13:40", "Beijing"), "1971-1-1 02:40", "Example #3")
//Test.assertEquals(timeDifference("London", "August 20, 1985 12:23", "Buenos Aires"), "1985-8-20 09:23")
//Test.assertEquals(timeDifference("Rome", "December 21, 1987 15:11", "New Delhi"), "1987-12-21 19:41")
//Test.assertEquals(timeDifference("Canberra", "March 1, 2009 18:32", "Caracas"), "2009-3-1 04:02")
//Test.assertEquals(timeDifference("Moscow", "September 14, 1953 19:54", "New York"), "1953-9-14 11:54")
//Test.assertEquals(timeDifference("Beijing", "November 18, 1999 02:03", "New Delhi"), "1999-11-17 23:33")
//Test.assertEquals(timeDifference("Tehran", "June 3, 1977 11:18", "Moscow"), "1977-6-3 10:48")
//Test.assertEquals(timeDifference("Caracas", "January 21, 1990 12:44", "London"), "1990-1-21 17:14")
//Test.assertEquals(timeDifference("New York", "February 21, 2016 17:56", "Rome"), "2016-2-21 23:56")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Through the Grid

//tags: algorithms,logic,numbers

//url: https://edabit.com/challenge/DnfrJ7Gjg4jqrLzW8

//Description:
//How many ways are there to navigate through a grid (w * h)?
//
//Suppose you're on a 4 × 6 grid, and want to go from the bottom left to the top right. How many different paths can you take? Avoid backtracking, you can only move right or up.
//Create a function that takes width and height and returns the amount of possibilities.
//Examples
//gridPos([1, 1]) ➞ 2
//
//gridPos([6, 4]) ➞ 210
//
//gridPos([5, 5]) ➞ 252
//Notes
//Check the Resources tab for a detailed explanation.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//[[[1, 1], 2], [[6, 4], 210], [[10, 10], 184756], [[2, 2], 6], 
//[[1, 6], 7], [[2, 1], 3], [[4, 6], 210], [[12, 12], 2704156]]
//.forEach(c => Test.assertEquals(gridPos(c[0]), c[1]))

