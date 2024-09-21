

//title: Syllables of a Word

//tags: algorithms,logic,regex,validation

//url: https://edabit.com/challenge/a4F8X4hLcroiXviWq

//Description:
//In this challenge, you are tasked to return the syllables of a word in an array. To find a syllables, if one consonant follows a vowel, divide the word between the vowel and the consonant. if two consonants follow a vowel, divide the word between the two consonants. However, when the last letter is "e", if the letter before it is a consonant, it would become a silent letter and would therefore be added to the syllable before instead of being its own syllable.
//Examples
//syllable("happy") ➞ ["hap" ,  py"]
//
//syllable("motel") ➞ ["mo" , "tel"]
//
//syllable("pancake") ➞ ["pan" , "cake"]
//
//syllable("dogumaru") ➞ ["do" , "gu" , "ma" , "ru"]
//
//syllable("abbufhafa") ➞ ["ab" , "buf" , "ha" , "fa"]
//Notes
//Vowels are a, e, i, o, u and y.
//There will only be a maximun of 2 consonants in a row and one vowel in a row.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(syllable("happy"), ["hap" , "py"])
//Test.assertSimilar(syllable("hotel"), ["ho" , "tel"])
//Test.assertSimilar(syllable("pancake"), ["pan" , "cake"])
//Test.assertSimilar(syllable("porcupine"),  ["por" , "cu", "pine"])
//Test.assertSimilar(syllable("dogumaru"), ["do" , "gu" , "ma" , "ru"])
//Test.assertSimilar(syllable("one"), ["one"])
//Test.assertSimilar(syllable("edabite"),["e" , "da" , "bite"])
//Test.assertSimilar(syllable("abbufhafa"), ["ab" , "buf" , "ha" , "fa"])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Sentence Searcher II

//tags: loops,strings

//url: https://edabit.com/challenge/xXkKEC8tuXQsP4gPC

//Description:
//Create a function that returns the sentence that contains the word at index n. Remember to include the full stop at the end.
//Worked Example
//const txt = "I have a dog. I have a log. There is no stopping me now."
//
//sentenceSearcher(txt, 7) ➞ "I have a log."
//// The word at index 7 is "log".
//// The full sentence that contains the word at index 7 is "I have a log."
//// Return the sentence.
//Examples
//sentenceSearcher(txt, 2) ➞ "I have a dog."
//
//sentenceSearcher(txt, 4) ➞ "I have a log."
//
//sentenceSearcher(txt, -1) ➞ "There is no stopping me now."
//// The index at -1 is the last word.
//// The last word is "now".
//Notes
//All sentences will end with a full stop.
//You need to also account for negative indexes.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const txt = "I have a dog. I have a log. There is no stopping me now."
//​
//Test.assertEquals(sentenceSearcher(txt, -14), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, -13), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, -12), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, -11), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, -10), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, -3), "There is no stopping me now.")
//Test.assertEquals(sentenceSearcher(txt, -2), "There is no stopping me now.")
//Test.assertEquals(sentenceSearcher(txt, -1), "There is no stopping me now.")
//Test.assertEquals(sentenceSearcher(txt, -9), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, -8), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, -7), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, -6), "There is no stopping me now.")
//Test.assertEquals(sentenceSearcher(txt, -5), "There is no stopping me now.")
//Test.assertEquals(sentenceSearcher(txt, -4), "There is no stopping me now.")
//Test.assertEquals(sentenceSearcher(txt, 0), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, 1), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, 2), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, 3), "I have a dog.")
//Test.assertEquals(sentenceSearcher(txt, 4), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, 5), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, 6), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, 7), "I have a log.")
//Test.assertEquals(sentenceSearcher(txt, 8), "There is no stopping me now.")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Nth Digit of the Infinite Integers Sequence

//tags: language_fundamentals,loops,math,numbers

//url: https://edabit.com/challenge/kvnmxiKFQqB5bGngm

//Description:
//Consider the infinite sequence of integers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... Find the nth digit in the string where all numbers are placed one after another without spaces. Digits counting starts from 1.
//Examples
//findNthDigit(3) ➞ 3
//// First digit of number 3
//
//findNthDigit(10) ➞ 1
//// First digit of number 10
//
//findNthDigit(11) ➞ 0
//// Second digit of number 10
//
//findNthDigit(15) ➞ 2
//// Second digit of number 12
//Notes
//1 <= n < 10^21
//When you're done with this challenge, try an Airforce version by Mubashir.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findNthDigit(3), 3)
//Test.assertEquals(findNthDigit(10), 1)
//Test.assertEquals(findNthDigit(11), 0)
//Test.assertEquals(findNthDigit(15), 2)
//Test.assertEquals(findNthDigit(30), 2)
//Test.assertEquals(findNthDigit(100), 5)
//Test.assertEquals(findNthDigit(997), 3)
//Test.assertEquals(findNthDigit(4603), 4)
//Test.assertEquals(findNthDigit(92882), 7)
//Test.assertEquals(findNthDigit(5778889), 6)
//Test.assertEquals(findNthDigit(65000005), 9)
//Test.assertEquals(findNthDigit(700000000), 8)
//Test.assertEquals(findNthDigit(8888888871), 7)
//Test.assertEquals(findNthDigit(68157158339), 4)
//Test.assertEquals(findNthDigit(1018888881176), 3)
//Test.assertEquals(findNthDigit(11188888888881), 5)
//Test.assertEquals(findNthDigit(123282828888877), 1)
//Test.assertEquals(findNthDigit(1312888888888888), 2)
//Test.assertEquals(findNthDigit(14848483818381284), 0)
//Test.assertEquals(findNthDigit(158544828371828584), 3)
//Test.assertEquals(findNthDigit(1586848382858180851), 2)
//Test.assertEquals(findNthDigit(15818283848581838281), 6)
//// Author : Evgeny SH

