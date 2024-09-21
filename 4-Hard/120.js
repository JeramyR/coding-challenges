

//title: 💥repeatedrepeatedrepeated💥

//tags: language_fundamentals,numbers,strings

//url: https://edabit.com/challenge/RTGusMtBRRdE5ivEP

//Description:
//This challenge concerns strings such as:
//"repeatedrepeatedrepeated"
//... that are obtained by repeating a smaller string, which in this case is the string "repeated".
//On a related note, since the string above is made of 3 repetitions, one way to produce this string is via the code "repeated".repeat(3).
//Write a function that, given a string, either:
//Returns false if the string isn't made by repeating a smaller string or ...
//Returns the number of repetitions if the string repeats a smaller string.
//Examples
//isRepeated("repeatedrepeatedrepeated") ➞ 3
//
//isRepeated("overintellectualizations") ➞ False
//
//isRepeated("nononononononononononono") ➞ 12
//
//isRepeated("moremoremoremoremoremore") ➞ 6
//
//isRepeated(",,,,,,,,,,,,,,,,,,,,,,,,") ➞ 24
//Notes
//To keep things a little simpler, all strings in the tests will have length exactly 24, just as in all the examples above. In particular, the answers will always be divisors of 24.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isRepeated("repeated".repeat(3)), 3)
//Test.assertEquals(isRepeated("repeat".repeat(4)), 4)
//Test.assertEquals(isRepeated("no".repeat(12)), 12)
//Test.assertEquals(isRepeated("more".repeat(6)), 6)
//Test.assertEquals(isRepeated("puns".repeat(6)), 6) 
//Test.assertEquals(isRepeated(",".repeat(24)), 24)
//Test.assertEquals(isRepeated("please".repeat(4)), 4)
//Test.assertEquals(isRepeated("stop".repeat(6)), 6)
//Test.assertEquals(isRepeated("now".repeat(8)), 8)
//Test.assertEquals(isRepeated("overintellectualizations"), false)
//Test.assertEquals(isRepeated("intercomprehensibilities"), false)
//Test.assertEquals(isRepeated("microspectrophotometries"), false)
//Test.assertEquals(isRepeated("accomplished".repeat(2)), 2)
//​
//// Original Python challenge from Luis Pereira

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Let`s Meet!

//tags: algebra,numbers

//url: https://edabit.com/challenge/4dKfy68gbxjms7fXA

//Description:
//From point A, an object is moving towards point B at constant velocity va (in km/hr). From point B, another object is moving towards point A at constant velocity vb (in km/hr). Knowing this and the distance between point A and B (in km), write a function that returns how much time passes until both objects meet.
//Format the output like this:
//"2h 23min 34s"
//Examples
//letsMeet(100, 10, 30) ➞ "2h 30min 0s"
//
//letsMeet(280, 70, 80) ➞ "1h 52min 0s"
//
//letsMeet(90, 75, 65) ➞ "0h 38min 34s"
//Notes
//Seconds should be rounded down to the nearest whole number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(letsMeet(100, 10, 30), "2h 30min 0s")
//Test.assertEquals(letsMeet(33, 15, 20), "0h 56min 34s")
//Test.assertEquals(letsMeet(250, 60, 80), "1h 47min 8s")
//Test.assertEquals(letsMeet(125, 55, 40), "1h 18min 56s")
//Test.assertEquals(letsMeet(0.6, 10, 15), "0h 1min 26s")
//Test.assertEquals(letsMeet(0.8, 23, 18), "0h 1min 10s")
//Test.assertEquals(letsMeet(0.72, 8, 12), "0h 2min 9s")
//Test.assertEquals(letsMeet(33, 15, 20), "0h 56min 34s")
//Test.assertEquals(letsMeet(360, 80, 64), "2h 30min 0s")
//Test.assertEquals(letsMeet(10, 45, 42), "0h 6min 53s")
//Test.assertEquals(letsMeet(90, 75, 65), "0h 38min 34s")
//Test.assertEquals(letsMeet(280, 70, 80), "1h 52min 0s")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Password Validation

//tags: conditions,regex,validation

//url: https://edabit.com/challenge/JYyXdP5WBmDiL8LvT

//Description:
//Create a function that validates a password to conform to the following rules:
//Length between 6 and 24 characters.
//At least one uppercase letter (A-Z).
//At least one lowercase letter (a-z).
//At least one digit (0-9).
//Maximum of 2 repeated characters.
//"aa" is OK 👍
//"aaa" is NOT OK 👎
//Supported special characters:
//! @ # $ % ^ & * ( ) + = _ - { } [ ] : ; " ' ? < > , .
//Examples
//validatePassword("P1zz@") ➞ false
//// Too short.
//
//validatePassword("iLoveYou") ➞ false
//// Missing a number.
//
//validatePassword("Fhg93@") ➞ true
//// OK!
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// INVALID PASSWORDS
//Test.assertEquals(validatePassword("P1zz@"), false, "Too short.")
//Test.assertEquals(validatePassword("P1zz@P1zz@P1zz@P1zz@P1zz@"), false, "Too long.")
//Test.assertEquals(validatePassword("mypassword11"), false, "Missing uppercase letter.")
//Test.assertEquals(validatePassword("MYPASSWORD11"), false, "Missing lowercase letter.")
//Test.assertEquals(validatePassword("iLoveYou"), false, "Missing number.")
//Test.assertEquals(validatePassword("Pè7$areLove"), false, 'Special character "è" disallowed.')
//Test.assertEquals(validatePassword("Repeeea7!"), false, 'Repeated character "eee" disallowed.')
//// VALID PASSWORDS
//Test.assertEquals(validatePassword("H4(k+x0"), true)
//Test.assertEquals(validatePassword("Fhg93@"), true)
//Test.assertEquals(validatePassword("aA0!@#$%^&*()+=_-{}[]:;\""), true)
//Test.assertEquals(validatePassword("zZ9'?<>,."), true)

