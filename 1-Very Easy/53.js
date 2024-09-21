

//title: End Corona!

//tags: math,numbers

//url: https://edabit.com/challenge/zJserqaeu9cM9Qjib

//Description:
//Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.
//Examples
//endCorona(4000, 2000, 77000) ➞ 39
//
//endCorona(3000, 2000, 50699) ➞ 51
//
//endCorona(30000, 25000, 390205) ➞ 79
//Notes
//The number of people who recover per day recovers will always be greater than daily newCases.
//Be conservative and round up the number of days needed.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(endCorona(4000, 2000, 77000), 39)
//Test.assertEquals(endCorona(3000, 2000, 50699), 51)
//Test.assertEquals(endCorona(30000, 25000, 390205), 79)
//Test.assertEquals(endCorona(260000, 255000, 20511691), 4103)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burrrrrrrp

//tags: math,strings

//url: https://edabit.com/challenge/cePrimGCGmaRrFHWv

//Description:
//Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
//Examples
//longBurp(3) ➞ "Burrrp"
//
//longBurp(5) ➞ "Burrrrrp"
//
//longBurp(9) ➞ "Burrrrrrrrrp"
//Notes
//Expect num to always be >= 1.
//Remember to use a capital "B".
//Don't forget to return the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longBurp(3), "Burrrp")
//Test.assertEquals(longBurp(5), "Burrrrrp")
//Test.assertEquals(longBurp(9), "Burrrrrrrrrp")
//Test.assertEquals(longBurp(10), "Burrrrrrrrrrp")
//Test.assertEquals(longBurp(13), "Burrrrrrrrrrrrrp")
//Test.assertEquals(longBurp(18), "Burrrrrrrrrrrrrrrrrrp")
//Test.assertEquals(longBurp(1), "Burp")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Spaces Between Each Character

//tags: arrays,formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/8zbTPvexR9Aei3Csp

//Description:
//Create a function that takes a string and returns a string with spaces in between all of the characters.
//Examples
//spaceMeOut("space") ➞ "s p a c e"
//
//spaceMeOut("far out") ➞ "f a r   o u t"
//
//spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"
//Notes
//Treat a space as its own character (i.e. leave three spaces between words).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(spaceMeOut("space"), "s p a c e", "Example #1")
//Test.assertEquals(spaceMeOut("far out"), "f a r   o u t", "Example #2")
//Test.assertEquals(spaceMeOut("elongated musk"), "e l o n g a t e d   m u s k", "Example #3")
//Test.assertEquals(spaceMeOut("long"), "l o n g")
//Test.assertEquals(spaceMeOut("123"), "1 2 3")
//Test.assertEquals(spaceMeOut("a1b2c3"), "a 1 b 2 c 3")
//​
//// made by @Joshua Señoron

