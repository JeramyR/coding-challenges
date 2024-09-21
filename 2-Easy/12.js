

//title: Sum of Multiplication

//tags: math,numbers,recursion

//url: https://edabit.com/challenge/W8R9CPBThreBBXYLS

//Description:
//Given a number, return the total sum of that number multiplied by every number between 1 and 10.
//Examples
//multiSum(1) ➞ 55
//// 1 x 1 + 1 x 2 + 1 x 3 ...... 1 x 9 + 1 x 10 = 55
//
//multiSum(6) ➞ 330
//// 6 x 1 + 6 x 2 + 6 x 3 ...... 6 x 9 + 6 x 10 = 330
//
//multiSum(10) ➞ 550
//
//multiSum(8) ➞ 440
//
//multiSum(2) ➞ 110
//Notes
//Use recursion to solve this challenge.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(multiSum(1), 55)
//Test.assertEquals(multiSum(2), 110)
//Test.assertEquals(multiSum(3), 165)
//Test.assertEquals(multiSum(4), 220)
//Test.assertEquals(multiSum(5), 275)
//Test.assertEquals(multiSum(6), 330)
//Test.assertEquals(multiSum(7), 385)
//Test.assertEquals(multiSum(8), 440)
//Test.assertEquals(multiSum(9), 495)
//Test.assertEquals(multiSum(10), 550)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sort by String Length

//tags: arrays,language_fundamentals,sorting

//url: https://edabit.com/challenge/aNZzLBxQpidWBF26X

//Description:
//Create a function that returns an array of strings sorted by length in ascending order.
//Examples
//sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
//
//sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]
//
//sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]
//
//sortByLength([]) ➞ []
//Notes
//Strings will have unique lengths, so don't worry about comparing two strings with identical length.
//Return an empty array if the input array is empty (see example #4).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(sortByLength(["a", "ccc", "dddd", "bb"]), ["a", "bb", "ccc", "dddd"])
//Test.assertSimilar(sortByLength(["apple", "pie", "shortcake"]), ["pie", "apple", "shortcake"])
//Test.assertSimilar(sortByLength(["may", "april", "september", "august"]), ["may", "april", "august", "september"])
//Test.assertSimilar(sortByLength(["maybe"]), ["maybe"])
//Test.assertSimilar(sortByLength([]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Emotify the Sentence

//tags: conditions,formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/Szh3ib2bpJCYXKrKa

//Description:
//Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
//word	emoticon
//smile	:D
//grin	:)
//sad	:(
//mad	:P
//Examples
//emotify("Make me smile") ➞ "Make me :D"
//
//emotify("Make me grin") ➞ "Make me :)"
//
//emotify("Make me sad") ➞ "Make me :("
//Notes
//The sentence always starts with "Make me".
//Try to solve this without using conditional statements like if/else or switch.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(emotify("Make me smile"), "Make me :D")
//Test.assertEquals(emotify("Make me grin"), "Make me :)")
//Test.assertEquals(emotify("Make me sad"), "Make me :(")
//Test.assertEquals(emotify("Make me mad"), "Make me :P")

