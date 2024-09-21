

//title: Is It a Triangle?

//tags: conditions,geometry,math,validation

//url: https://edabit.com/challenge/k5uod5qGNgHwPaWzA

//Description:
//Create a function that takes three numbers as arguments and returns true if it's a triangle and false if not.
//Examples
//isTriangle(2, 3, 4) ➞ true
//
//isTriangle(3, 4, 5) ➞ true
//
//isTriangle(4, 3, 8) ➞ false
//Notes
//a, b and, c are the side lengths of the triangles.
//Test input will always be three positive numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isTriangle(4, 5, 6), true)
//Test.assertEquals(isTriangle(3, 4, 6), true)
//Test.assertEquals(isTriangle(2, 5, 7), false)
//Test.assertEquals(isTriangle(2, 5, 9), false)
//Test.assertEquals(isTriangle(2, 9, 5), false)
//Test.assertEquals(isTriangle(9, 2, 5), false)
//Test.assertEquals(isTriangle(11, 12, 20), true)
//Test.assertEquals(isTriangle(14, 3, 12), true)
//Test.assertEquals(isTriangle(23, 4, 28), false)
//Test.assertEquals(isTriangle(21, 4, 25), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The 3 Programmers Problem

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/BYZW3yNmG99eLpSdR

//Description:
//You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.
//Examples
//programmers(147, 33, 526) ➞ 493
//
//programmers(33, 72, 74) ➞ 41
//
//programmers(1, 5, 9) ➞ 8
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(programmers(1,   5,   9),   8)
//Test.assertEquals(programmers(43,  33,  43),  10)
//Test.assertEquals(programmers(88,  14,  23),  74)
//Test.assertEquals(programmers(33,  72,  74),  41)
//Test.assertEquals(programmers(147, 33,  526), 493)
//Test.assertEquals(programmers(234, 345, 457), 223)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The pH Scale

//tags: conditions,language_fundamentals,numbers

//url: https://edabit.com/challenge/GmAuzN42QXxPNpSmF

//Description:
//Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.
//
//Examples
//pHName(5) ➞ "acidic"
//
//pHName(8.7) ➞ "alkaline"
//
//pHName(7) ➞ "neutral"
//Notes
//Values such as 6.9999 and 8.00001 should return "acidic" and "alkaline" respectively.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pHName(7.0), "neutral")
//Test.assertEquals(pHName(7), "neutral")
//Test.assertEquals(pHName(13.52), "alkaline")
//Test.assertEquals(pHName(-4.33), "invalid")
//Test.assertEquals(pHName(8.27), "alkaline")
//Test.assertEquals(pHName(9.72), "alkaline")
//Test.assertEquals(pHName(-4.58), "invalid")
//Test.assertEquals(pHName(14.85), "invalid")
//Test.assertEquals(pHName(17.76), "invalid")
//Test.assertEquals(pHName(3.9), "acidic")
//Test.assertEquals(pHName(14.21), "invalid")
//Test.assertEquals(pHName(-2.35), "invalid")
//Test.assertEquals(pHName(2.66), "acidic")
//Test.assertEquals(pHName(16.45), "invalid")
//Test.assertEquals(pHName(3.46), "acidic")
//Test.assertEquals(pHName(7.26), "alkaline")
//Test.assertEquals(pHName(12.46), "alkaline")
//Test.assertEquals(pHName(17.51), "invalid")
//Test.assertEquals(pHName(19.7), "invalid")
//Test.assertEquals(pHName(10.46), "alkaline")
//Test.assertEquals(pHName(-4.83), "invalid")
//Test.assertEquals(pHName(3.13), "acidic")
//Test.assertEquals(pHName(11.38), "alkaline")
//Test.assertEquals(pHName(5.23), "acidic")
//Test.assertEquals(pHName(18.85), "invalid")

