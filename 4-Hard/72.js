

//title: The Recamán Sequence

//tags: algorithms,loops,numbers

//url: https://edabit.com/challenge/jDtwBwYhaMD2HftdX

//Description:
//The Recamán Sequence is a numeric sequence that starts always with 0. The position of a positive integer in the sequence, or Recamán Index, can be established with the following algorithm:
//For every number to find, two variables are considered: the value of the last element of the sequence (last element from now on), and the actual sequence length (length from now on).
//If the subtraction of the length from the last element returns a number greater than 0 and not already present in the sequence, it is added to the sequence.
//When the conditions of the above statement are not met, will be added always the sum of the last element plus the length (even if it is a number already present in the sequence).
//Repeat until the number of interest is found.
//Look at example below for the steps to do for to establish the Recamán Index of number 2:
//Sequence = [0]
//
//Last - Length = 0 - 1 = -1 (lower than zero)
//Last + Length = 0 + 1 = 1
//
//Sequence = [0, 1]
//
//Last - Length = 1 - 2 = -1 (lower than 0)
//Last + Length = 1 + 2 = 3
//
//Sequence = [0, 1, 3]
//
//Last - Length = 3 - 3 = 0 (already present in sequence)
//Last + Length = 3 + 3 = 6
//
//Sequence = [0, 1, 3, 6]
//
//Last - Length = 6 - 4 = 2 (greater than 0 and not already in sequence)
//
//Sequence = [0, 1, 3, 6, 2]
//
//// The Recaman Index of 2 is: 4
//Given a positive integer n, implement a function that returns its Recamán Index.
//Examples
//recamanIndex(2) ➞ 4
//
//recamanIndex(3) ➞ 2
//
//recamanIndex(7) ➞ 5
//Notes
//The sequence starts always with 0.
//The step with the subtraction Last Element - Sequence Length (verifying that is not already present in the sequence) has the precedence over the second step.
//Remember: if the number to add is the result of a subtraction it can't be already in the sequence (first step), if it is the result of an addition it can be already present (second step).
//Curiosity: the first number to repeat in the sequence is 42...
//Curiosity: the first number with a BIG delay in the sequence is 19.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(recamanIndex(2), 4, "Example explained in Instructions")
//Test.assertEquals(recamanIndex(3), 2)
//Test.assertEquals(recamanIndex(7), 5)
//Test.assertEquals(recamanIndex(20), 7)
//Test.assertEquals(recamanIndex(56), 204)
//Test.assertEquals(recamanIndex(100), 387)
//Test.assertEquals(recamanIndex(666), 2292)
//Test.assertEquals(recamanIndex(1000), 4419)
//Test.assertEquals(recamanIndex(10000), 7215)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Repeat the Shorter String

//tags: loops,strings

//url: https://edabit.com/challenge/i5ZanfQWsJ8EGheW8

//Description:
//Write a function that repeats the shorter string until it is equal to the length of the longer string.
//Examples
//lengthen("abcdefg", "ab") ➞ "abababa"
//
//lengthen("ingenius", "forest") ➞ "forestfo"
//
//lengthen("clap", "skipping") ➞ "clapclap"
//Notes
//Both strings will differ in length.
//Both strings will contain at least one character.
//Either of the two strings could be the shortest in length.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(lengthen("abcdefg", "ab"), "abababa")
//Test.assertEquals(lengthen("ingenius", "forest"), "forestfo")
//Test.assertEquals(lengthen("skipping", "clap"), "clapclap")
//Test.assertEquals(lengthen("k", "champagne"), "kkkkkkkkk")
//Test.assertEquals(lengthen("DUH", "champagne"), "DUHDUHDUH")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Elastic Words

//tags: formatting,strings

//url: https://edabit.com/challenge/diTZjq3pdnwMt6BNN

//Description:
//In this challenge, you must think about words as elastics. What happens when do you tend an elastic applying a constant traction force at both ends? Every part (or letter, in this case) of the elastic will expand, with the minimum expansion at the ends, and the maximum expansion in the center.
//If the word has an odd length, the effective central character of the word will be the pivot that splits the word into two halves.
//"ABC" -> Left = "A" | Center = "B" | Right = "C"
//If the word has an even length, you will consider two parts of equal length, with the last character of the left half and the first character of the right half being the center.
//"ABCD" -> Left = "AB" | Right = "CD"
//You will represent the expansion of a letter repeating it as many times as its numeric position (so counting the indexes from/to 1, and not from 0 as usual) in its half, with a crescent order in the left half and a decrescent order in the right half.
//Word = "ANNA" 
//
//Left = "AN"
//Right = "NA"
//
//Left = "A" * 1 + "N" * 2 = "ANN"
//Right = "N" * 2 + "A" * 1 = "NNA"
//
//Word = Left + Right = "ANNNNA"
//If the word has an odd length, the pivot (the central character) will be the peak (as to say, the highest value) that delimits the two halves of the word.
//Word = "KAYAK"
//
//Left = "K" * 1 + "A" * 2 = "KAA"
//Pivot = "Y" * 3 = "YYY"
//Right = "A" * 2 + "K" * 1 = "AAK"
//
//Word = Left + Pivot + Right = "KAAYYYAAK"
//Given a word, implement a function that returns the elasticized version of the word as a string.
//Examples
//elasticize("ANNA") ➞ "ANNNNA"
//
//elasticize("KAYAK") ➞ "KAAYYYAAK"
//
//elasticize("X") ➞ "X"
//Notes
//For words with less than three characters, the function must return the same word (no traction appliable).
//Remember, into the left part characters are counted from 1 to the end, and, in reverse order until 1 is reached, into the right.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(elasticize("ANNA"), "ANNNNA", "Example #1")
//Test.assertEquals(elasticize("KAYAK"), "KAAYYYAAK", "Example #2")
//Test.assertEquals(elasticize("X"), "X", "Example #3")
//Test.assertEquals(elasticize("AA"), "AA")
//Test.assertEquals(elasticize("ABC"), "ABBC")
//Test.assertEquals(elasticize("BOB"), "BOOB")
//Test.assertEquals(elasticize("OTTO"), "OTTTTO")
//Test.assertEquals(elasticize("LEVEL"), "LEEVVVEEL")
//Test.assertEquals(elasticize("IJKCBA"), "IJJKKKCCCBBA")
//Test.assertEquals(elasticize("REDDER"), "REEDDDDDDEER")
//Test.assertEquals(elasticize("ROTATOR"), "ROOTTTAAAATTTOOR")

