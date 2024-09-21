

//title: Word Chain

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/EfC7rRKdAt8ugcCCT

//Description:
//A word-chain is an array of words, where the next word is formed by changing exactly one letter from the previous word. We do not add or subtract letters from words, only change them.
//Create a function that returns true if an array is a word-chain and false otherwise.
//Examples
//isWordChain(["meal", "seal", "seat", "beat", "beet"]) ➞ true
//// Change "m" in "meal" to get "seal", "l" to get "seat", etc.
//
//isWordChain(["red", "bed", "bet", "bat", "sat"]) ➞ true
//
//isWordChain(["red", "bat", "cat", "sat"]) ➞ false
//// Do not change more than one letter ("red" and "bat").
//
//isWordChain(["read", "red", "led", "lad", "lady"]) ➞ false
//// Do not add or subtract letters.
//Notes
//Each word in a word chain has equal length.
//All words will be in lower case.

//code area
///////////////////////////////////////////////////////////////////////////
const isWordChain = err => {

}


//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertEquals(isWordChain(['meal', 'seal', 'seat', 'beat', 'beet']), true)
// Test.assertEquals(isWordChain(['red', 'bed', 'bet', 'bat', 'sat']), true)
// Test.assertEquals(isWordChain(['heady', 'ready', 'beady', 'beads', 'meads', 'meats', 'seats', 'feats']), true)
// Test.assertEquals(isWordChain(['score', 'scare', 'stare', 'spare', 'spire']), true)
// Test.assertEquals(isWordChain(['more', 'mire', 'dire', 'dare', 'date']), true)
//Test.assertEquals(isWordChain(['read', 'red', 'led', 'lad', 'lady']), false)
//Test.assertEquals(isWordChain(['red', 'bat', 'cat', 'sat']), false)
//Test.assertEquals(isWordChain(['candy', 'candies', 'fat', 'rat']), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Consonant-Vowel Coding

//tags: higher_order_functions,regex,strings

//url: https://edabit.com/challenge/m9pkGmuoEWsdHrNHi

//Description:
//Create a function that takes in a sentence and returns a running list of consonants per word and vowels per word.
//Examples
//stringCode("Happy Birthday To Me!")
//➞ ["4 6 1 1", "1 2 1 1"]
//
//// Consonants - 4 : [H, p, p, y], 6 : [B, r, t, h, d, y], 1: [T], 1 : [M]
//// Vowels - 1: [a], 2 : [i, a], 1: [o], 1: [e]
//
//stringCode("I'd like to drink my first glass of champagne.")
//➞ [ "1 2 1 4 2 4 4 1 6', '1 2 1 1 0 1 1 1 3"]
//
//stringCode("The first man to walk on the moon was Neil Armstrong.")
//➞ [ "2 4 2 1 3 1 2 2 2 2 7", "1 1 1 1 1 1 1 2 1 2 2" ]
//Notes
//Count y as a consonant.
//Capitalization does not matter.
//Only count letters and disregard all other characters (e.g. numbers, punctuation, etc).
//A space between numbers is required (["1 2 3", "4 5 6"] vs. ["1,2,3", "4,5,6"]).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(stringCode("I'd like to drink my first glass of champagne."), ['1 2 1 4 2 4 4 1 6', '1 2 1 1 0 1 1 1 3'])
//Test.assertSimilar(stringCode("The first man to walk on the moon was Neil Armstrong."), [ '2 4 2 1 3 1 2 2 2 2 7', '1 1 1 1 1 1 1 2 1 2 2'])
//Test.assertSimilar(stringCode("I've got a lovely bunch of coconuts."), [ '1 2 0 4 4 1 5', '2 1 1 2 1 1 3' ])
//Test.assertSimilar(stringCode("There they are a'standing in a row."), [ '3 3 1 6 1 0 2', '2 1 2 3 1 1 1' ])
//Test.assertSimilar(stringCode("Let them eat cake."), [ '2 3 1 2', '1 1 2 2' ])
//Test.assertSimilar(stringCode("It does not matter how slowly you go as long as you do not stop."), [ '1 2 2 4 2 5 1 1 1 3 1 1 1 2 3', '1 2 1 2 1 1 2 1 1 1 1 2 1 1 1'])
//Test.assertSimilar(stringCode("To be or not to be, that is the question."), [ '1 1 1 2 1 1 3 1 2 4', '1 1 1 1 1 1 1 1 1 4' ])
//Test.assertSimilar(stringCode("Believe you can and you're halfway there."), [ '3 1 2 2 2 5 3', '4 2 1 1 3 2 2' ])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Zipping Up an Array

//tags: arrays,control_flow

//url: https://edabit.com/challenge/KJDD2N2putddr5vp3

//Description:
//Two arrays are part of the same zipper if the ending is identical. The identical section can be thought of as being "zipped-up". Below, [2, 2, 4] is "zipped-up".
//Array 1: [3, 5, 8, 9, 2, 2, 4]
//Array 2: [1, 7, 2, 2, 4]
//Create a function that takes in two arrays. Return false if none of the array is "zipped." Return true if the arrays are identical. Otherwise, return an array with the first index in each array where the zipper diverges.
//To illustrate:
//zipper([3, 5, 8, 9, 2, 2, 4], [1, 7, 2, 2, 4]) ➞ [3, 1]
//// Zipper 1: 9 (index-3) is first element to diverge.
//// Zipper 2: 7 (index-1) is first element to diverge.
//Examples
//zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]) ➞ [4, 7]
//
//zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6]) ➞ [0, 0]
//
//zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]) ➞ false
//
//zipper([5, 4, 3, 2, 6], [5, 4, 3, 2, 6]) ➞ true
//Notes
//Use zero-indexing for the arrays.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(zipper([5, 5, 7, 8, 9, 1, 2], [3, 2, 1, 1, 6, 6, 6, 6, 1, 2]), [4, 7])
//Test.assertSimilar(zipper([5, 4, 3, 2, 6], [6, 4, 3, 2, 6]), [0, 0])
//Test.assertSimilar(zipper([5, 4, 3, 2, 7], [6, 4, 3, 2, 6]), false)
//Test.assertSimilar(zipper([1, 5, 4, 3], [9, 8, 7, 5, 4, 3]), [0, 2])
//Test.assertSimilar(zipper([7, 8, 9, 9, 9], [8, 8, 9, 9, 9, 9, 9]), [1, 3])
//Test.assertSimilar(zipper([7, 8, 5, 1, 5], [6, 6, 5, 1, 5]), [1, 1])
//Test.assertSimilar(zipper([6, 6, 5, 1, 5], [6, 6, 5, 1, 5]), true)
//Test.assertSimilar(zipper([1, 1, 2, 6, 6, 5, 1, 5], [7, 8, 9, 4, 4, 6, 6, 5, 1, 5]), [2, 4])

