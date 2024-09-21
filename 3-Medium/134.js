

//title: Opposite House 🏘️

//tags: interview,logic,math,numbers

//url: https://edabit.com/challenge/cNhzjwSSSXFEzWRQ4

//Description:
//Mubashir was walking through a straight street with exactly n identical houses on both sides. House numbers in the street look like this:
//1 |   | 6
//
//3 |   | 4
//
//5 |   | 2
//He noticed that Even numbered houses increase on the right while Odd numbered houses decrease on the left.
//Create a function that takes a house number house and length of the street n and returns the house number on the opposite side.
//Examples
//oppositeHouse(1, 3) ➞ 6
//
//oppositeHouse(2, 3) ➞ 5
//
//oppositeHouse(3, 5) ➞ 8
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(oppositeHouse(1, 3), 6)
//Test.assertEquals(oppositeHouse(3, 3), 4)
//Test.assertEquals(oppositeHouse(2, 3), 5)
//Test.assertEquals(oppositeHouse(3, 5), 8)
//Test.assertEquals(oppositeHouse(7, 11), 16)
//Test.assertEquals(oppositeHouse(10, 22), 35)
//Test.assertEquals(oppositeHouse(20, 3400), 6781)
//Test.assertEquals(oppositeHouse(9, 26), 44)
//Test.assertEquals(oppositeHouse(20, 10), 1) 
//Test.assertEquals(oppositeHouse(23633656673, 310027696726), 596421736780)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Letters Only

//tags: conditions,logic,regex,strings,validation

//url: https://edabit.com/challenge/6nWnXZZBdetZSLbTE

//Description:
//Check if the given string consists of only letters and spaces and if every letter is in lower case.
//Examples
//lettersOnly("JAVACRIPT") ➞ false
//
//lettersOnly("javascript") ➞ true
//
//lettersOnly("12321313") ➞ false
//
//lettersOnly("i have spaces") ➞ true
//
//lettersOnly("i have numbers(1-10)") ➞ false
//
//lettersOnly("") ➞ false
//Notes
//Empty arguments will always return false.
//Input values will be mixed (symbols, letters, numbers).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lettersOnly("javascript"), true)
//Test.assertEquals(lettersOnly("JAVACRIPT"), false)
//Test.assertEquals(lettersOnly("html css javascript"), true)
//Test.assertEquals(lettersOnly("12321313"), false)
//Test.assertEquals(lettersOnly("@-=001-302;4'23"), false)
//Test.assertEquals(lettersOnly("the quick brown fox"), true)
//Test.assertEquals(lettersOnly("hello 123 world"), false)
//Test.assertEquals(lettersOnly("i have spaces"), true)
//Test.assertEquals(lettersOnly(""), false)
//Test.assertEquals(lettersOnly("i have numbers 1 and 2)"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Solving Linear Equations (Part 2)

//tags: algebra,math

//url: https://edabit.com/challenge/pGkL8nouKnHNGyBQt

//Description:
//Consider the equation ax-b=bx-3a+4 where a and b are constants. Create a function that takes numbers a and b as arguments, and returns the solution of the equation.
//If the equation does not have a solution, return "No solution".
//If any number satisfies the equation, return "Any number".
//Examples
//solve(1, 2) ➞ -3.0
//
//solve(-4, -6) ➞ 5.0
//
//solve(4, 1) ➞ -2.333
//Notes
//Round your answer to three decimal places.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(solve(1, 2), -3.0)
//Test.assertEquals(solve(-4, -6), 5.0)
//Test.assertEquals(solve(4, 1), -2.333)
//Test.assertEquals(solve(3, 3), "No solution")
//Test.assertEquals(solve(3, 2), -3.0)
//Test.assertEquals(solve(-2, -2), "No solution")
//Test.assertEquals(solve(2, 2), "Any number")

