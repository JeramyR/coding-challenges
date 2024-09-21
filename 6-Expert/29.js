

//title: Hidden Anagram

//tags: arrays,formatting,loops,sorting

//url: https://edabit.com/challenge/7hnsWYJGc6yPqEMjc

//Description:
//Create a function that takes two strings. The first string contains a sentence containing the letters of the second string in a consecutive sequence but in a different order. The hidden anagram must contain all the letters, including duplicates, from the second string in any order and must not contain any other alphabetic characters.
//Write a function to find the anagram of the second string embedded somewhere in the first string. You should ignore character case, any spaces, and punctuation marks and return the anagram as a lower case string with no spaces or punctuation marks.
//Examples
//hiddenAnagram("An old west action hero actor", "Clint Eastwood") ➞ "noldwestactio"
//// The sequence "n old west actio" is a perfect anagram of "Clint Eastwood".
//
//hiddenAnagram("Mr. Mojo Rising could be a song title", "Jim Morrison") ➞ "mrmojorisin"
//// The sequence "Mr. Mojo Risin" ignoring the full stop, is a perfect
//// anagram of "Jim Morrison".
//
//hiddenAnagram("Banana? margaritas", "ANAGRAM") ➞ "anamarg"
//// The sequence "ana? marg" ignoring "?" is a perfect anagram of "Anagram".
//
//hiddenAnagram("D  e b90it->?$ (c)a r...d,,#~", "bad credit") ➞ "debitcard"
//// When all spaces, numbers and puntuation marks are removed
//// from the whole phrase, the remaining characters form the sequence
//// "Debitcard" which is a perfect anagram of "bad credit".
//
//hiddenAnagram("Bright is the moon", "Bongo mirth") ➞ "noutfond"
//// The words "Bright moon" are an anagram of "bongo mirth" but they are
//// not a continuous alphabetical sequence because the words "is the" are in
//// between. Hence the negative result, "noutfond" is returned.
//Notes
//A perfect anagram contains all the letters of the original, in any order, no more, no less.
//If there is no hidden anagram in the sentence, return "noutfond".
//As in the above examples, the hidden anagram may start or finish part way through a word and/or span multiple words and may contain punctuation marks and other non-alpha characters.
//Ignore character case and any embedded non-alpha characters.
//If there is more than 1 result in a sentence, return the nearest to the beginning.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(hiddenAnagram("Sir Patrick Moore was a famous moon starer", "Astronomer"), "moonstarer")
//Test.assertEquals(hiddenAnagram("A building, built to stay free of defects, is uncommon!", "Statue of Liberty"), "builttostayfree")
//Test.assertEquals(hiddenAnagram('Bright is the moon', 'Bongo mirth'), 'noutfond')
//Test.assertEquals(hiddenAnagram("Anchor man Bill, a well known TV personality, was confused about becoming president", "Abraham Lincoln"), "anchormanbilla")
//Test.assertEquals(hiddenAnagram("There seem to be more and more television ads on the box these days!", "enslave idiots"), "televisionads")
//Test.assertEquals(hiddenAnagram("The thing orators hate most is a throat infection", "A sore throat"), "oratorshate")
//Test.assertEquals(hiddenAnagram("I thought I heard a high cornet note of great beuaty", "One Cornetto"), "cornetnoteo")
//Test.assertEquals(hiddenAnagram('D  e b90it->?$ (c)a r...d,,#~', 'bad credit'), 'debitcard')
//Test.assertEquals(hiddenAnagram("You won't find any anagram here!", 'aerogramhenna'), 'noutfond')

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Longest Substring

//tags: regex,strings

//url: https://edabit.com/challenge/7k59Z9bk46uKH9og3

//Description:
//Given a string of letters, create a function that returns an array with the separator that yields the longest possible substring, provided that:
//The substring starts and ends with the separator.
//The separator doesn't occur inside the substring other than at the ends.
//If two or more separators yield substrings with the same length, they should appear in alphabetical order.
//Examples
//maxSeparator("supercalifragilistic") ➞ ["s"]
//// The longest substring is "supercalifragilis".
//
//maxSeparator("laboratory") ➞ ["a", "o", "r"]
//// "abora", "orato" and "rator" are the same length.
//
//maxSeparator("candle") ➞ []
//// No possible substrings.
//Notes
//All substrings should be at least of length 2 (i.e. no single-letter substrings).
//Expect lowercase alphabetic characters only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(maxSeparator("supercalifragilistic"), ["s"], "Test case 1")
//Test.assertSimilar(maxSeparator("laboratory"), ["a", "o", "r"], "Test case 2")
//Test.assertSimilar(maxSeparator("candle"), [], "Test case 3")
//Test.assertSimilar(maxSeparator("eagle"), ["e"], "input: eagle")
//Test.assertSimilar(maxSeparator("acquaintance"), ["c"], "input: acquaintance")
//Test.assertSimilar(maxSeparator("bookkeeper"), ["e"], "input: bookkeeper")
//Test.assertSimilar(maxSeparator("couple"), [], "input: couple")
//Test.assertSimilar(maxSeparator("slippery"), ["p"], "input: slippery")
//Test.assertSimilar(maxSeparator("address"), ["d", "s"], "input: address")
//Test.assertSimilar(maxSeparator("tatertot"), ["t"], "input: tatertot")
//Test.assertSimilar(maxSeparator("transmissive"), ["i", "s"], "input: transmissive")
//Test.assertSimilar(maxSeparator("stereotype"), ["e", "t"], "input: stereotype")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Indices of Zeroes for the Longest Run of Contiguous Ones

//tags: arrays,loops

//url: https://edabit.com/challenge/2gX93BLEfAQFSCoSy

//Description:
//You are given an array of binary integers and k, the number of flips allowed.
//Write a function that returns the indices of zeroes of which, when flipped, return the longest contiguous sequence of ones.
//Examples
//zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1) ➞ [1]
//
//zeroIndices([1, 0, 0, 0, 0, 1], 1) ➞ [1]
//
//zeroIndices([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 3) ➞ [6, 7, 9]
//
//zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 3) ➞ [7, 8, 9]
//Notes
//If multiple combinations of indices tie for longest one sequence, return the indices which occur first (see examples #2, #3).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 1), [1]); 
//Test.assertSimilar(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 2), [1, 4]);
//Test.assertSimilar(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 3), [1, 4, 5]);
//Test.assertSimilar(zeroIndices([1, 0, 1, 1, 0, 0, 0, 1], 4), [1, 4, 5, 6]);
//​
//Test.assertSimilar(zeroIndices([1, 1, 0, 1, 1, 0, 0, 1], 1), [2]);
//Test.assertSimilar(zeroIndices([0, 1, 1, 1, 1, 0, 0, 0], 1), [0]);
//Test.assertSimilar(zeroIndices([0, 1, 1, 0, 0, 0, 1, 1, 1], 1), [5]);
//Test.assertSimilar(zeroIndices([1, 0, 1, 0, 1, 0], 1), [1]);
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 1], 1), [1]);
//​
//Test.assertSimilar(zeroIndices([1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1], 2), [1, 2]);
//Test.assertSimilar(zeroIndices([1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1], 2), [7, 8]);
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], 2), [6, 7]); 
//​
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0], 3), [6, 7, 9]); 
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0], 3), [4, 5, 7]);
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], 3), [1, 2, 3]); 
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0], 3), [7, 8, 9]); 
//​
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0], 4), [7, 8, 9, 11]); 
//Test.assertSimilar(zeroIndices([1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0], 4), [8, 9, 10, 11]); 
//Test.assertSimilar(zeroIndices([0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], 4), [2, 3, 4, 5]);

