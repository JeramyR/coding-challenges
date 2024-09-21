

//title: Retrieve the Last N Elements

//tags: arrays,language_fundamentals

//url: https://edabit.com/challenge/S6zpG8RwDrxaFEQLE

//Description:
//Write a function that retrieves the last n elements from an array.
//Examples
//last([1, 2, 3, 4, 5], 1) ➞ [5]
//
//last([4, 3, 9, 9, 7, 6], 3) ➞ [9, 7, 6]
//
//last([1, 2, 3, 4, 5], 7) ➞ "invalid"
//
//last([1, 2, 3, 4, 5], 0) ➞ []
//Notes
//Return "invalid" if n exceeds the length of the array.
//Return an empty array if n == 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(last([1, 2, 3, 4, 5], 0), [])
//Test.assertSimilar(last([1, 2, 3, 4, 5], 1), [5])
//Test.assertSimilar(last([4, 3, 9, 9, 7, 6], 3), [9, 7, 6])
//Test.assertSimilar(last([5, 1, 2], 3), [5, 1, 2])
//Test.assertSimilar(last([], 1), "invalid")
//Test.assertSimilar(last([1, 2, 3, 4, 5], 7), "invalid")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Multi-division

//tags: algebra,loops,math,validation

//url: https://edabit.com/challenge/Tu2PuZf8yXQAE6kFD

//Description:
//Create a function, that will for a given a, b, c, do the following:
//Add a to itself b times.
//Check if the result is divisible by c.
//Examples
//abcmath(42, 5, 10) ➞ false
//// 42+42 = 84,84+84 = 168,168+168 = 336,336+336 = 672, 672+672 = 1344
//// 1344 is not divisible by 10
//
//abcmath(5, 2, 1) ➞ true
//
//abcmath(1, 2, 3) ➞ false
//Notes
//In the first step of the function, a doesn't always refer to the original a.
//"if the result is divisible by c", means that if you divide the result and c, you will get an integer (5, and not 4.5314).
//The second test is correct.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(abcmath(1, 2, 3), false)
//Test.assertEquals(abcmath(69, 15, 9), false)
//Test.assertEquals(abcmath(9, 2, 52), false)
//Test.assertEquals(abcmath(5, 2, 3), false)
//Test.assertEquals(abcmath(5, 2, 1), true)
//Test.assertEquals(abcmath(261, 2, 1), true)
//Test.assertEquals(abcmath(22, 2, 22), true)
//Test.assertEquals(abcmath(69, 12, 3), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Say Hello to Guests

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/r9uigYABnbPLY7zsz

//Description:
//In this exercise you will have to:
//Take a list of names.
//Add "Hello" to every name.
//Make one big string with all greetings.
//The solution should be one string with a comma in between every "Hello (Name)".
//Examples
//greetPeople(["Joe"]) ➞ "Hello Joe"
//
//greetPeople(["Angela", "Joe"]) ➞ "Hello Angela, Hello Joe"
//
//greetPeople(["Frank", "Angela", "Joe"]) ➞ "Hello Frank, Hello Angela, Hello Joe"
//Notes
//Each greeting has to be separated with a comma and a space.
//If you're given an empty array [], return an empty string "".

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(greetPeople(["Kyrill"]),  "Hello Kyrill")
//Test.assertEquals(greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]), "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu")
//Test.assertEquals(greetPeople([]), "")

