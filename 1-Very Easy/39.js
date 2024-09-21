

//title: Is the Word Singular or Plural?

//tags: conditions,strings,validation

//url: https://edabit.com/challenge/5vAX6Lw2Yrgdkx7Qi

//Description:
//Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
//Examples
//isPlural("changes") ➞ true
//
//isPlural("change") ➞ false
//
//isPlural("dudes") ➞ true
//
//isPlural("magic") ➞ false
//Notes
//Don't forget to return the result.
//Remember that return true (boolean) is not the same as return "true" (string).
//This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPlural("dudes"), true)
//Test.assertEquals(isPlural("flowers"), true)
//Test.assertEquals(isPlural("checks"), true)
//Test.assertEquals(isPlural("varies"), true)
//Test.assertEquals(isPlural("efforts"), true)
//Test.assertEquals(isPlural("mood"), false)
//Test.assertEquals(isPlural("whiteboard"), false)
//Test.assertEquals(isPlural("cow"), false)
//Test.assertEquals(isPlural("word"), false)
//Test.assertEquals(isPlural("love"), false)
//Test.assertEquals(isPlural("silly"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Concatenating First and Last Character of a String

//tags: language_fundamentals,strings

//url: https://edabit.com/challenge/ms7pZS4c5TT8KZvt7

//Description:
//Create a function that takes a string and returns the concatenated first and last character.
//Examples
//firstLast("ganesh") ➞ "gh"
//
//firstLast("kali") ➞ "ki"
//
//firstLast("shiva") ➞ "sa"
//
//firstLast("vishnu") ➞ "vu"
//
//firstLast("durga") ➞ "da"
//Notes
//There is no empty string.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstLast("ganesh"), "gh")
//Test.assertEquals(firstLast("kali"), "ki")
//Test.assertEquals(firstLast("shiva"), "sa")
//Test.assertEquals(firstLast("vishnu"), "vu")
//Test.assertEquals(firstLast("durga"), "da")
//Test.assertEquals(firstLast("brahma"), "ba")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Slice of Pie

//tags: algebra,math,validation

//url: https://edabit.com/challenge/qkNvH9BZLTNtKQvae

//Description:
//Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
//Total number of slices.
//Number of recipients.
//How many slices each person gets.
//The function will be in this form:
//equalSlices(total slices, no. recipients, slices each)
//Examples
//equalSlices(11, 5, 2) ➞ true
//// 5 people x 2 slices each = 10 slices < 11 slices
//
//equalSlices(11, 5, 3) ➞ false
//// 5 people x 3 slices each = 15 slices > 11 slices
//
//equalSlices(8, 3, 2) ➞ true
//
//equalSlices(8, 3, 3) ➞ false
//
//equalSlices(24, 12, 2) ➞ true
//Notes
//Return (trivially) true if there are zero people.
//It's fine not to use the entire pie.
//All test parameters are integers.
//Don't forget to return the result.
//If you get stuck on a challenge, find help in the Resources tab.
//If you're really stuck, unlock solutions in the Solutions tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(equalSlices(8, 3, 2), true)
//Test.assertEquals(equalSlices(8, 3, 3), false)
//Test.assertEquals(equalSlices(24, 12, 2), true)
//Test.assertEquals(equalSlices(5, 6, 1), false)
//Test.assertEquals(equalSlices(5, 0, 100), true)
//Test.assertEquals(equalSlices(15, 2, 7), true)
//Test.assertEquals(equalSlices(15, 2, 8), false)

