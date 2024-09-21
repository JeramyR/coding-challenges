

//title: Hitting the Jackpot

//tags: arrays,control_flow,games,strings

//url: https://edabit.com/challenge/hxyvTffvdT4E238CY

//Description:
//Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
//Examples
//testJackpot(["@", "@", "@", "@"]) ➞ true
//
//testJackpot(["abc", "abc", "abc", "abc"]) ➞ true
//
//testJackpot(["SS", "SS", "SS", "SS"]) ➞ true
//
//testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false
//
//testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
//Notes
//The elements must be exactly identical for there to be a jackpot.

//code area
///////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(testJackpot(['@', '@', '@', '@']), true)
// Test.assertEquals(testJackpot(['!', '!', '!', '!']), true)
// Test.assertEquals(testJackpot(['abc', 'abc', 'abc', 'abc']), true)
// Test.assertEquals(testJackpot(['karaoke', 'karaoke', 'karaoke', 'karaoke']), true)
// Test.assertEquals(testJackpot(['SS', 'SS', 'SS', 'SS']), true)
// Test.assertEquals(testJackpot([':(', ':)', ':|', ':|']), false)
// Test.assertEquals(testJackpot(['&&', '&', '&&&', '&&&&']), false)
// Test.assertEquals(testJackpot(['hee', 'heh', 'heh', 'heh']), false)
// Test.assertEquals(testJackpot(['SS', 'SS', 'SS', 'Ss']), false)
// Test.assertEquals(testJackpot(['SS', 'SS', 'Ss', 'Ss']), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Finding Nemo

//tags: arrays,formatting,strings

//url: https://edabit.com/challenge/c23dFfNiKbnguSQtq

//Description:
//You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
//If you can't find Nemo, return "I can't find Nemo :(".
//Examples
//findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
//
//findNemo("Nemo is me") ➞ "I found Nemo at 1!"
//
//findNemo("I Nemo am") ➞ "I found Nemo at 2!"
//Notes
//! , ? . are always separated from the last word.
//Nemo will always look like Nemo, and not NeMo or other capital variations.
//Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
//If there are multiple Nemo's in the sentence, only return the first one.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findNemo("I am Ne mo Nemo !"), "I found Nemo at 5!")
//Test.assertEquals(findNemo("N e m o is NEMO NeMo Nemo !"), "I found Nemo at 8!")
//Test.assertEquals(findNemo("I am Nemo's dad Nemo senior ."), "I found Nemo at 5!")
//Test.assertEquals(findNemo("Oh, hello !"), "I can't find Nemo :(")
//Test.assertEquals(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"), "I can't find Nemo :(")
//Test.assertEquals(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"), "I found Nemo at 1!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Instant JAZZ

//tags: arrays,language_fundamentals,loops

//url: https://edabit.com/challenge/EMuszDzF66k9J73HG

//Description:
//Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.
//Examples
//jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]
//
//jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]
//
//jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
//
//jazzify([]) ➞ []
//Notes
//Return an empty array if the given array is empty.
//You can expect all the tests to have valid chords.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(jazzify(['G', 'F', 'C']), ['G7', 'F7', 'C7'])
//Test.assertSimilar(jazzify(['Dm', 'G', 'E', 'A']), ['Dm7', 'G7', 'E7', 'A7'])
//Test.assertSimilar(jazzify(['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7']), ['F7', 'E7', 'A7', 'Ab7', 'Gm7', 'C7'])
//Test.assertSimilar(jazzify(['G', 'C7']), ['G7', 'C7'])
//Test.assertSimilar(jazzify([]), [])

