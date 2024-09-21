

//title: Flip the Boolean

//tags: conditions,language_fundamentals,logic

//url: https://edabit.com/challenge/noqGmqk6StwApSGwa

//Description:
//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
//Examples
//reverse(true) ➞ false
//
//reverse(false) ➞ true
//
//reverse(0) ➞ "boolean expected"
//
//reverse(null) ➞ "boolean expected"
//Notes
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverse(false), true)
//Test.assertEquals(reverse(true), false)
//Test.assertEquals(reverse(0), "boolean expected")
//Test.assertEquals(reverse(null), "boolean expected")
//Test.assertEquals(reverse(undefined), "boolean expected")
//Test.assertEquals(reverse({}), "boolean expected")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sandwich Fillings

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/W8z2EghwmjQYhwM2D

//Description:
//Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.
//Examples
//getFillings(["bread", "ham", "cheese", "ham", "bread"]) ➞ ["ham", "cheese", "ham"]
//
//getFillings(["bread", "sausage", "tomato", "bread"]) ➞ ["sausage", "tomato"]
//
//getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]) ➞ ["lettuce", "bacon", "tomato"]
//Notes
//The first and last elements will always be "bread".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getFillings(["bread", "ham", "cheese", "ham", "bread"]), ["ham", "cheese", "ham"])
//Test.assertSimilar(getFillings(["bread", "sausage", "tomato", "bread"]), ["sausage", "tomato"])
//Test.assertSimilar(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]), ["lettuce", "bacon", "tomato"])
//Test.assertSimilar(getFillings(["bread", "bacon", "lettuce", "tomato", "bread"]), ["bacon", "lettuce", "tomato"])
//Test.assertSimilar(getFillings(["bread", "tomato", "tomato", "ham", "sausage", "bread"]), ["tomato", "tomato", "ham", "sausage"])
//Test.assertSimilar(getFillings(["bread", "lettuce", "bread"]), ["lettuce"])
//Test.assertSimilar(getFillings(["bread", "cheese", "bread"]), ["cheese"])
//Test.assertSimilar(getFillings(["bread", "lettuce", "tomato", "ham", "bread"]), ["lettuce", "tomato", "ham"])
//Test.assertSimilar(getFillings(["bread", "ham", "cheese", "lettuce", "ham", "bread"]), ["ham", "cheese", "lettuce", "ham"])
//Test.assertSimilar(getFillings(["bread", "lettuce", "lettuce", "bread"]), ["lettuce", "lettuce"])
//Test.assertSimilar(getFillings(["bread", "sausage", "ham", "bread"]), ["sausage", "ham"])
//Test.assertSimilar(getFillings(["bread", "bacon", "bread"]), ["bacon"])
//Test.assertSimilar(getFillings(["bread", "ham", "bread"]), ["ham"])
//Test.assertSimilar(getFillings(["bread", "ham", "bread"]), ["ham"])
//Test.assertSimilar(getFillings(["bread", "sausage", "ham", "lettuce", "bread"]), ["sausage", "ham", "lettuce"])
//Test.assertSimilar(getFillings(["bread", "sausage", "bread"]), ["sausage"])
//Test.assertSimilar(getFillings(["bread", "lettuce", "bread"]), ["lettuce"])
//Test.assertSimilar(getFillings(["bread", "tomato", "lettuce", "cheese", "cheese", "bread"]), ["tomato", "lettuce", "cheese", "cheese"])
//Test.assertSimilar(getFillings(["bread", "tomato", "sausage", "bacon", "tomato", "bread"]), ["tomato", "sausage", "bacon", "tomato"])
//Test.assertSimilar(getFillings(["bread", "bacon", "ham", "lettuce", "tomato", "lettuce", "bread"]), ["bacon", "ham", "lettuce", "tomato", "lettuce"])
//Test.assertSimilar(getFillings(["bread", "tomato", "lettuce", "cheese", "lettuce", "bread"]), ["tomato", "lettuce", "cheese", "lettuce"])
//Test.assertSimilar(getFillings(["bread", "ham", "ham", "bacon", "ham", "cheese", "bread"]), ["ham", "ham", "bacon", "ham", "cheese"])
//Test.assertSimilar(getFillings(["bread", "tomato", "bacon", "ham", "tomato", "bread"]), ["tomato", "bacon", "ham", "tomato"])
//Test.assertSimilar(getFillings(["bread", "ham", "cheese", "lettuce", "bread"]), ["ham", "cheese", "lettuce"])
//Test.assertSimilar(getFillings(["bread", "lettuce", "bread"]), ["lettuce"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Leap Years

//tags: dates,logic,math,validation

//url: https://edabit.com/challenge/ALmkPHd7eoe5btx9y

//Description:
//A leap year has one day added to February for being synchronized with the seasonal year. A leap year appears with a regular frequency, which is determined by the rule below:
//A year must either be divisible by 400 or divisible by 4 and not 100.
//Given a year you must implement a function that returns true if it's a leap year, or false if it's not.
//Examples
//isLeap(2020) ➞ true
//// Exactly divided by 4 and not by 100.
//
//isLeap(1800) ➞ false
//// Exactly divided by 4, but is also exactly divided by 100.
//
//isLeap(2000) ➞ true
//// Exactly divided by 400.
//
//isLeap(2019) ➞ false
//// It can't be exactly divided by 400 or by 4.
//Notes
//Exactly divided can be interpreted as the remainder of the division is equal to 0.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.
//Bonus: Try to implement this function writing a single line of code.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isLeap(2020), true, "Example #1")
//Test.assertEquals(isLeap(1800), false, "Example #2")
//Test.assertEquals(isLeap(2000), true, "Example #3")
//Test.assertEquals(isLeap(2019), false, "Example #4")
//Test.assertEquals(isLeap(1452), true)
//Test.assertEquals(isLeap(1998), false)
//Test.assertEquals(isLeap(1904), true)
//Test.assertEquals(isLeap(1985), false)
//Test.assertEquals(isLeap(2048), true)
//Test.assertEquals(isLeap(1600), true)

