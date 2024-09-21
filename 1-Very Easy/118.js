

//title: Array from Comma-Delimited String

//tags: loops,strings

//url: https://edabit.com/challenge/LHTF9ij2FtvwhnzQF

//Description:
//Write a function that turns a comma-delimited list into an array of strings.
//Examples
//toArray("watermelon, raspberry, orange")
//➞ ["watermelon", "raspberry", "orange"]
//
//toArray("x1, x2, x3, x4, x5")
//➞ ["x1", "x2", "x3", "x4", "x5"]
//
//toArray("a, b, c, d")
//➞ ["a", "b", "c", "d"]
//
//toArray("")
//➞ []
//Notes
//Return an empty array for an empty string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(toArray("watermelon, raspberry, orange"), ["watermelon", "raspberry", "orange"])
//Test.assertSimilar(toArray("x1, x2, x3, x4, x5"), ["x1", "x2", "x3", "x4", "x5"])
//Test.assertSimilar(toArray("a, b, c, d"), ["a", "b", "c", "d"])
//Test.assertSimilar(toArray(""), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: State Names and Abbreviations

//tags: arrays,formatting,loops

//url: https://edabit.com/challenge/8fnEAEj5vKNqAXNYA

//Description:
//Create a function that filters out an array of state names into two categories based on the second parameter.
//Abbreviations abb
//Full names full
//Examples
//filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
//➞ ["CA", "NY"]
//
//filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
//➞ ["Arizona", "Nevada"]
//
//filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
//➞ ["MT", "NJ", "TX", "ID", "IL"]
//
//filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
//➞ []
//Notes
//State abbreviations will always be in uppercase.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'abb'), ['CA', 'NY'])
//Test.assertSimilar(filterStateNames(['Arizona', 'CA', 'NY', 'Nevada'], 'full'), ['Arizona', 'Nevada'])
//Test.assertSimilar(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'abb'), ['MT', 'NJ', 'TX', 'ID', 'IL'])
//Test.assertSimilar(filterStateNames(['MT', 'NJ', 'TX', 'ID', 'IL'], 'full'), [])
//Test.assertSimilar(filterStateNames(['Montana', 'FL'], 'abb'), ['FL'])
//Test.assertSimilar(filterStateNames(['Montana', 'FL'], 'full'), ['Montana'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Edaaaaabit

//tags: formatting,loops,strings

//url: https://edabit.com/challenge/tHZBvD3w69hpDCtMg

//Description:
//Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.
//Examples
//howManyTimes(5) ➞ "Edaaaaabit"
//
//howManyTimes(0) ➞ "Edbit"
//
//howManyTimes(12) ➞ "Edaaaaaaaaaaaabit"
//Notes
//The string must start with "Ed" and end with "bit".
//You'll only be given integers as test input.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(howManyTimes(5), "Edaaaaabit")
//Test.assertEquals(howManyTimes(15), "Edaaaaaaaaaaaaaaabit")
//Test.assertEquals(howManyTimes(10), "Edaaaaaaaaaabit")
//Test.assertEquals(howManyTimes(23), "Edaaaaaaaaaaaaaaaaaaaaaaabit")
//Test.assertEquals(howManyTimes(1), "Edabit")

