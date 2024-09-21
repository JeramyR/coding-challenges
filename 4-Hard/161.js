

//title: Tally Marks

//tags: arrays,strings

//url: https://edabit.com/challenge/ufYYJX5CsmSbXazcr

//Description:
//Create a function that can convert from normal notation to tally-mark notation and vice versa. In tally-mark notation, a number can be decomposed as the sum of 5s + remainder.
//The function will look like this: switchNotation([current scores], desired notation)
//Ex.1 Normal: 3, 24, 4, 9
//Ex.1 Tally: 3, 55554, 4, 54
//
//Ex.2 Normal: 2, 12, 2, 4
//Ex.2 Tally: 2, 552, 2, 4
//Examples
//switchNotation([51], "normal") ➞ [6]
//
//switchNotation([3, 55, 55551], "normal") ➞ [3, 10, 21]
//
//switchNotation([15, 29, 5, 3], "tally") ➞ [555, 555554, 5, 3]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(switchNotation([3, 55, 55551], 'normal'), [3, 10, 21])
//Test.assertSimilar(switchNotation([553, 55, 51], 'normal'), [13, 10, 6])
//Test.assertSimilar(switchNotation([51], 'normal'), [6])
//Test.assertSimilar(switchNotation([555, 55, 5], 'normal'), [15, 10, 5])
//Test.assertSimilar(switchNotation([15, 29, 5, 3], 'tally'), [555, 555554, 5, 3])
//Test.assertSimilar(switchNotation([3, 8, 8, 6], 'tally'), [3, 53, 53, 51])
//Test.assertSimilar(switchNotation([3, 44, 8, 21], 'tally'), [3, 555555554, 53, 55551])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Basic Pig Latin Translation

//tags: algorithms,formatting,regex,strings

//url: https://edabit.com/challenge/4rEcJErhoTRbNRnKH

//Description:
//Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds "ay" to the end of the word. This is called "Pig Latin" and it gets more complicated than the rules in this particular challenge. I've intentionally kept things simple, otherwise this would turn into an extremely tedious challenge.
//Move the first letter of each word to the end of the word.
//Add "ay" to the end of the word.
//Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.
//Examples
//pigLatin("Cats are great pets.")
//➞ "Atscay areway reatgay etspay."
//
//pigLatin("Tom got a small piece of pie.")
//➞ "Omtay otgay away mallsay iecepay ofway iepay."
//
//pigLatin("He told us a very exciting tale.")
//➞ "Ehay oldtay usway away eryvay excitingway aletay."
//Notes
//Be sure to preserve proper capitalization and punctuation.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(pigLatin("Cats are great pets."), "Atscay areway reatgay etspay.")
//Test.assertEquals(pigLatin("Tom got a small piece of pie."), "Omtay otgay away mallsay iecepay ofway iepay.")
//Test.assertEquals(pigLatin("He told us a very exciting tale."), "Ehay oldtay usway away eryvay excitingway aletay.")
//Test.assertEquals(pigLatin("A diamond is not enough."), "Away iamondday isway otnay enoughway.")
//Test.assertEquals(pigLatin("Hurry!"), "Urryhay!")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Unique Character Mapping

//tags: data_structures,strings

//url: https://edabit.com/challenge/9MEWMJ5eX8EAiWSs5

//Description:
//Write a function that returns a character mapping from a word.
//Examples
//characterMapping("abcd") ➞ [0, 1, 2, 3]
//
//characterMapping("abb") ➞ [0, 1, 1]
//
//characterMapping("babbcb") ➞ [0, 1, 0, 0, 2, 0]
//
//characterMapping("hmmmmm") ➞ [0, 1, 1, 1, 1, 1]
//Notes
//Start your counter at 0, and increment by 1 each time you encounter a new character.
//Identical characters should share the same number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(characterMapping("abcd"), [0, 1, 2, 3])
//Test.assertSimilar(characterMapping("abb"), [0, 1, 1])
//Test.assertSimilar(characterMapping("babbcb"), [0, 1, 0, 0, 2, 0])
//Test.assertSimilar(characterMapping("aaabb"), [0, 0, 0, 1, 1])
//Test.assertSimilar(characterMapping("abccbc"), [0, 1, 2, 2, 1, 2])
//Test.assertSimilar(characterMapping("fluffy"), [0, 1, 2, 0, 0, 3])
//Test.assertSimilar(characterMapping("madness"), [0, 1, 2, 3, 4, 5, 5])
//Test.assertSimilar(characterMapping("buttery"), [0, 1, 2, 2, 3, 4, 5])
//Test.assertSimilar(characterMapping("canine"), [0, 1, 2, 3, 2, 4])
//Test.assertSimilar(characterMapping("hohoho"), [0, 1, 0, 1, 0, 1])
//Test.assertSimilar(characterMapping("hmmmmm"), [0, 1, 1, 1, 1, 1])
//Test.assertSimilar(characterMapping(""), [])

