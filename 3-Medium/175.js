

//title: N-Sized Parts

//tags: arrays,strings

//url: https://edabit.com/challenge/yffZ8xYon38AnH6J5

//Description:
//Create a function that divides a string into parts of size n.
//Examples
//partition("chew", 2) ➞ ["ch", "ew"]
//
//partition("thematic", 4) ➞ ["them", "atic"]
//
//partition("c++", 2) ➞ ["c+", "+"]
//Notes
//For inputs that do not split evenly into parts of size n, the last element in the array will have a "leftover" string (see example #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(partition("them", 2), ["th", "em"])
//Test.assertSimilar(partition("thematic", 4), ["them", "atic"])
//Test.assertSimilar(partition("movement", 2), ["mo", "ve", "me", "nt"])
//Test.assertSimilar(partition("python", 2), ["py", "th", "on"])
//Test.assertSimilar(partition("c++", 2), ["c+", "+"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Every Value Needs Some Testing (To Pass)

//tags: conditions,validation

//url: https://edabit.com/challenge/ugFFzGwCYAAYEvoRF

//Description:
//In this challenge, you have to verify that every, or some, of the given variables, pass a given test condition. There are seven parameters:
//test A string being the condition to verify.
//type A string with two possible values:
//everybody if every variable has to pass the test;
//somebody if at least one of the variables has to pass the test.
//a, b, c, d, e The variables being integers or booleans.
//Create a function that returns true or false, depending on the result of the test applied to the variables.
//Examples
//everySome(">= 1", "everybody", 1, 1, -1, 1, 1) ➞ false
//// Is every variable >= 1?
//
//everySome(">= 1", "somebody", -1, -1, -1, -1, 1) ➞ true
//// Is some variable >= 1?
//
//everySome("< 4 / 2", "everybody", 1, 2, 1, 2, 1, 0, -10) ➞ false
//// Is every variable < 2?
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(everySome(">= 1", "everybody", 1, 1, -1, 1, 1), false, "Example #1")
//Test.assertEquals(everySome(">= 1", "somebody", -1, -1, -1, -1, 1), true, "Example #2")
//Test.assertEquals(everySome("< 4 / 2", "everybody", 1, 2, 1, 2, 1, 0, -10), false, "Example #3")
//Test.assertEquals(everySome("!= 0", "everybody", false, false, false, false, false), false)
//Test.assertEquals(everySome("<= 10 * 2", "somebody", 21, 68, 104, 20, 3), true)
//Test.assertEquals(everySome("!== 1", "everybody", true, true, true, true, true), true)
//Test.assertEquals(everySome("=== 9 % 9", "somebody", 9, 1, 81, 218, 33), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Initialize

//tags: arrays,formatting

//url: https://edabit.com/challenge/uJewuaLAFMXGWhbgu

//Description:
//Create a function that takes in an array of full names and returns the initials.
//Examples
//initialize(["Stephen Hawking"]) ➞ ["S. H."]
//
//initialize(["Harry Potter", "Ron Weasley"]) ➞ ["H. P.", "R. W."]
//
//initialize(["Sherlock Holmes", "John Watson", "Irene Adler"]) ➞ ["S. H.", "J. W.", "I. A."]
//Notes
//Each initial is followed by a dot.
//Names will always be made of two words, separated by a space.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(initialize(['Sherlock Holmes', 'John Watson', 'Irene Adler']), ['S. H.', 'J. W.', 'I. A.'])
//Test.assertSimilar(initialize(['Harry Potter', 'Ron Weasley']), ['H. P.', 'R. W.'])
//Test.assertSimilar(initialize(['Stephen Hawking']), ['S. H.'])
//Test.assertSimilar(initialize(['Atticus Finch']), ['A. F.'])
//Test.assertSimilar(initialize(['Leonardo DiCaprio']), ['L. D.'])

