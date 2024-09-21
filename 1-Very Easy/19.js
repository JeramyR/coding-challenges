

//title: Movie Theatre Admittance

//tags: algorithms,conditions,validation

//url: https://edabit.com/challenge/fP7gFvDaBymoZrXFx

//Description:
//Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//The person is at least 15 years old.
//They have parental supervision.
//The function accepts two parameters, age and isSupervised. Return a boolean.
//Examples
//acceptIntoMovie(14, true) ➞ true
//
//acceptIntoMovie(14, false) ➞ false
//
//acceptIntoMovie(16, false) ➞ true
//Notes
//age is a decimal.
//isSupervised is a boolean.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(acceptIntoMovie(14, true), true)
//Test.assertEquals(acceptIntoMovie(15, true), true)
//Test.assertEquals(acceptIntoMovie(16, true), true)
//Test.assertEquals(acceptIntoMovie(14, false), false)
//Test.assertEquals(acceptIntoMovie(15, false), true)
//Test.assertEquals(acceptIntoMovie(16, false), true)
//Test.assertEquals(acceptIntoMovie(14.99999, true), true)
//Test.assertEquals(acceptIntoMovie(14.99999, false), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fix the Bug: Simple Array Manipulation

//tags: arrays,bugs,language_fundamentals

//url: https://edabit.com/challenge/jipHTDkabftop5irE

//Description:
//Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
//Examples
//incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
//
//incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
//
//incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
//Notes
//Make sure to read every line carefully.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(incrementItems([0, 1, 2, 3]), [1, 2, 3, 4])
//Test.assertSimilar(incrementItems([2, 4, 6, 8]), [3, 5, 7, 9])
//Test.assertSimilar(incrementItems([-1, -2, -3, -4]), [0, -1, -2, -3])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Drinks Allowed?

//tags: conditions,language_fundamentals,logic,validation

//url: https://edabit.com/challenge/PwpJNJiysvq3AuYJ8

//Description:
//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
//Examples
//shouldServeDrinks(17, true) ➞ false
//
//shouldServeDrinks(19, false) ➞ true
//
//shouldServeDrinks(30, true) ➞ false
//Notes
//Return true or false.
//Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(shouldServeDrinks(17, true), false)
//Test.assertEquals(shouldServeDrinks(30, true), false)
//Test.assertEquals(shouldServeDrinks(24, false), true)
//Test.assertEquals(shouldServeDrinks(18, false), true)
//Test.assertEquals(shouldServeDrinks(3, false), false)

