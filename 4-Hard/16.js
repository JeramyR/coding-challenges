

//title: Broken Keyboard

//tags: arrays,strings

//url: https://edabit.com/challenge/pbK3wzLDvdwfEKgMt

//Description:
//Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:
//findBrokenKeys(correct phrase, what you actually typed)
//Examples
//findBrokenKeys("happy birthday", "hawwy birthday") ➞ ["p"]
//
//findBrokenKeys("starry night", "starrq light") ➞ ["y", "n"]
//
//findBrokenKeys("beethoven", "affthoif5") ➞ ["b", "e", "v", "n"]
//Notes
//Broken keys should be ordered by when they first appear in the sentence.
//Only one broken key per letter should be listed.
//Letters will all be in lower case.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findBrokenKeys("happy birthday", "hawwy birthday"), ["p"])
//Test.assertSimilar(findBrokenKeys("starry night", "starrq light"), ["y", "n"])
//Test.assertSimilar(findBrokenKeys("beethoven", "affthoif5"), ["b", "e", "v", "n"])
//Test.assertSimilar(findBrokenKeys("mozart", "aiwgvx"), ["m", "o", "z", "a", "r", "t"])
//Test.assertSimilar(findBrokenKeys("5678", "4678"), ["5"], "It should work for numbers.")
//Test.assertSimilar(findBrokenKeys("!!??$$", "$$!!??"), ["!", "?", "$"], "It should work for punctuation.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Do All Bigrams Exist?

//tags: higher_order_functions,strings,validation

//url: https://edabit.com/challenge/wQGGp6Qce6phDCvW9

//Description:
//You are given an input array of bigrams, and an array of words.
//Write a function that returns true if every single bigram from this array can be found at least once in an array of words.
//Examples
//canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
//
//canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
//# "cu" does not exist in any of the words.
//
//canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
//
//canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false
//Notes
//A bigram is string of two consecutive characters in the same word.
//If the array of words is empty, return false.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]), true)
//Test.assertEquals(canFind(["bo", "ta", "el", "st", "ca"], ["books", "table", "cap", "hostel"]), true)
//Test.assertEquals(canFind(["la", "te"], ["latte"]), true)
//Test.assertEquals(canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]), true)
//Test.assertEquals(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]), false)
//Test.assertEquals(canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]), false)
//Test.assertEquals(canFind(["la"], []), false)
//Test.assertEquals(canFind(["la", "at", "te", "ea"], ["latte"]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: All About Strings

//tags: arrays,strings

//url: https://edabit.com/challenge/5bW3TmPnae2FNvusk

//Description:
//Create a function that, given a string with at least three characters, returns an array of its:
//Length.
//First character.
//Last character.
//Middle character, if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
//Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.
//Examples
//allAboutStrings("LASA") ➞ [4, "L", "A", "AS", "@ index 3"]
//
//allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]
//
//allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(allAboutStrings('LASA'), [4, 'L', 'A', 'AS', '@ index 3']);
//Test.assertSimilar(allAboutStrings('Computer'), [8, 'C', 'r', 'pu', 'not found']);
//Test.assertSimilar(allAboutStrings('Science'), [7, 'S', 'e', 'e', '@ index 5']);
//Test.assertSimilar(allAboutStrings('homework'), [8, 'h', 'k', 'ew', '@ index 5']);
//Test.assertSimilar(allAboutStrings('spring'), [6, 's', 'g', 'ri', 'not found']);
//Test.assertSimilar(allAboutStrings('break'), [5, 'b', 'k', 'e', 'not found']);
//Test.assertSimilar(allAboutStrings('programming'), [11, 'p', 'g', 'a', '@ index 4']);
//Test.assertSimilar(allAboutStrings('bad'), [3, 'b', 'd', 'a', 'not found']);

