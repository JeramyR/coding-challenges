

//title: Split String by Identical Characters

//tags: regex,strings

//url: https://edabit.com/challenge/rcgqCsnCqMPTSjkBf

//Description:
//Create a function that splits a string into an array of identical clusters.
//Examples
//splitGroups("555") ➞ ["555"]
//
//splitGroups("5556667788") ➞ ["555", "666", "77", "88"]
//
//splitGroups("aaabbbaabbab") ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]
//
//splitGroups("abbbcc88999&&!!!_") ➞ ["a", "bbb", "cc", "88", "999", "&&", "!!!", "_"]
//Notes
//Each cluster should only have one unique character.
//The resulting array should be in the same order as the input string.
//Should work with letters, numbers and other characters.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(splitGroups('aaabbbaabbab'), ['aaa', 'bbb', 'aa', 'bb', 'a', 'b'])
//Test.assertSimilar(splitGroups('5556667788'), ['555', '666', '77', '88'])
//Test.assertSimilar(splitGroups('abbbcc88999&&!!!_'), ['a', 'bbb', 'cc', '88', '999', '&&', '!!!', '_'], 'It should work with special chars.')
//Test.assertSimilar(splitGroups('555'), ['555'])
//Test.assertSimilar(splitGroups('AABBCC'), ['AA', 'BB', 'CC'])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Correct My Sentence

//tags: conditions,language_fundamentals,regex,sorting,validation

//url: https://edabit.com/challenge/H4ZG2vFZLzK4vo8MM

//Description:
//Mubashir is not so good with the English language. He needs your help to correct his sentences.
//Start each sentence with an uppercase alphabet.
//For every uppercase letter (other than the first alphabet), you have to place a fullstop(.) followed by an empty space.
//There must be only one space between the words and sentences.
//Sentence must end with a full stop(.)
//Two continuous spaces are not allowed.
//correctSentences ("  mubashir loves  edabit  Matt  loves  edabit  ") ➞ "Mubashir loves edabit. Matt loves edabit."
//
//// Remove extra spaces.
//// Capitalise first character.
//// Dot followed by an empty space before "Matt".
//// A dot at the end.
//Examples
//correctSentences ("  mubashir loves  edabit  Matt  loves  edabit  ") ➞ "Mubashir loves edabit. Matt loves edabit."
//
//correctSentences ("  he is an engineer He sleeps a lot") ➞ "He is an engineer. He sleeps a lot."
//
//correctSentences (" his english is not good Help him     Thank you") ➞ "His english is not good. Help him. Thank you."
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(correctSentences("  mubashir loves  edabit  Matt  loves  edabit  "), "Mubashir loves edabit. Matt loves edabit.")
//Test.assertEquals(correctSentences("  he is an engineer He sleeps a lot"), "He is an engineer. He sleeps a lot.")
//Test.assertEquals(correctSentences(" his english is not good Help him     Thank you"), "His english is not good. Help him. Thank you.")
//Test.assertEquals(correctSentences(" he is ready to join   airforce  Waiting for the  final approval"), "He is ready to join airforce. Waiting for the final approval.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count Palindrome Numbers in a Range

//tags: control_flow,numbers,strings

//url: https://edabit.com/challenge/BRoBDeEc2be7wm8BD

//Description:
//Create a function that returns the number of palindrome numbers in a specified range (inclusive).
//For example, between 8 and 34, there are 5 palindromes: 8, 9, 11, 22 and 33. Between 1550 and 1552 there is exactly one palindrome: 1551.
//Examples
//countPalindromes(1, 10) ➞ 9
//
//countPalindromes(555, 556) ➞ 1
//
//countPalindromes(878, 898) ➞ 3
//Notes
//A palindrome number is a number which remains the same when its digits are reversed. For example, 2552 reversed is still 2552. The reflectional symmetry of this number makes it a palindromic number.
//Single-digit numbers are trivially palindrome numbers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countPalindromes(1, 10), 9)
//Test.assertEquals(countPalindromes(555, 556), 1)
//Test.assertEquals(countPalindromes(878, 898), 3)
//Test.assertEquals(countPalindromes(8, 34), 5)
//Test.assertEquals(countPalindromes(1550, 1556), 1)

