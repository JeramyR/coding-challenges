

//title: Remix the String

//tags: arrays,formatting,loops,strings

//url: https://edabit.com/challenge/TeadejgLka6ZxKhWM

//Description:
//Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string.
//Examples
//remix("abcd", [0, 3, 1, 2]) ➞ "acdb"
//The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2, because the order of those characters maps to their corresponding numbers in the index array.
//remix("PlOt", [1, 3, 0, 2]) ➞ "OPtl"
//
//remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]) ➞ "cmourpte"
//Notes
//Be sure not to change the original case; otherwise no gotchas. Assume you'll be given a string and array of equal length, both containing valid characters (A-Z, a-z, or 0-9).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(remix("abcd", [0, 3, 1, 2]), "acdb");
//Test.assertEquals(remix("PlOt", [1, 3, 0, 2]), "OPtl");
//Test.assertEquals(remix("computer", [0, 2, 1, 5, 3, 6, 7, 4]), "cmourpte");
//Test.assertEquals(remix("twist", [4, 0, 1, 2, 3]), "wistt");
//Test.assertEquals(remix("responsibility", [0, 6, 8, 11, 10, 7, 13, 5, 3, 2, 4, 12, 1, 9]), "rtibliensyopis");
//Test.assertEquals(remix("Interference", [6, 9, 10, 11, 7, 3, 0, 2, 5, 1, 8, 4]), "enrfeeIrcnte");
//Test.assertEquals(remix("sequence", [5, 7, 3, 4, 0, 1, 2, 6]), "encqusee");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Pirate`s Tale

//tags: math,numbers

//url: https://edabit.com/challenge/r5iWRGMmLpyreLKEf

//Description:
//Captain Hook and his crew are currently resting at Origin Shore. They are about to embark on their next adventure to an undisclosed location (x, y) to find treasure.
//Captain Hook's ship can only move exactly north, south, east or west. It takes exactly 1 day for the ship to travel 1 unit in one of the four cardinal directions.
//After every 5 days, the crew will take one day of rest.
//Given the location of the treasure, find out how long it takes for Captain Hook and his crew to find the treasure. The ship is currently at coordinate (0, 0).
//numberOfDays([3, 5]) => 9 days
//// Since: 3 days east + 2 days north (5 days passed) + 1 day of rest + 3 days north
//
//numberOfDays([-4, -1]) => 5 days
//// Since 4 days west + 1 day south
//Examples
//numberOfDays([10, 10]) ➞ 23
//
//numberOfDays([3, 3]) ➞ 7
//
//numberOfDays([-10, -9]) ➞ 22
//
//numberOfDays([-1, -2]) ➞ 3
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numberOfDays([10, 10]), 23);
//Test.assertEquals(numberOfDays([3, 3]), 7);
//Test.assertEquals(numberOfDays([-10, -9]), 22);
//Test.assertEquals(numberOfDays([-1, -4]), 5);
//Test.assertEquals(numberOfDays([-10, -2]), 14);
//Test.assertEquals(numberOfDays([3, 30]), 39);
//Test.assertEquals(numberOfDays([40, 1]), 49);
//Test.assertEquals(numberOfDays([3, 5]), 9);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is This a Right Angled Triangle?

//tags: algebra,math,validation

//url: https://edabit.com/challenge/d4TfH5d9nHvJiRSCb

//Description:
//Given three numbers, x, y and z, determine whether they are the edges of a right angled triangle.
//Examples
//rightTriangle(3, 4, 5) ➞ true
//// This is the classic example of a "nice" right angled triangle.
//
//rightTriangle(145, 105, 100) ➞ true
//// This is a less famous example.
//
//rightTriangle(70, 130, 110) ➞ false
//// This isn't a right angled triangle.
//Notes
//Notice the largest side of the triangle might not be the last one passed to the function.
//All numbers will be integers (whole numbers).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rightTriangle(3, 4, 5), true)
//Test.assertEquals(rightTriangle(145, 105, 100), true)
//Test.assertEquals(rightTriangle(70, 130, 110), false)
//Test.assertEquals(rightTriangle(60, 60, 60), false)
//Test.assertEquals(rightTriangle(0, 4, 4), false, "A triangle can't have an edge of length 0.")
//Test.assertEquals(rightTriangle(-3, 4, 5), false, "A triangle can't have edges of negative length.")
//Test.assertEquals(rightTriangle(115, 277, 252), true)
//Test.assertEquals(rightTriangle(140, 170, 220), false)
//Test.assertEquals(rightTriangle(915, 1748, 1973), true)

