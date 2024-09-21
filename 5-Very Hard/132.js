

//title: Quad Sequence

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/pZoKXf2ujZq65iWfD

//Description:
//Write a function that receives an array of x integers and returns an array of x integers in the Nth term of a quadratic number sequence (where x is the length of the incoming array). Your function should return the continuation of the quadratic sequence of the length equal to the length of the given array.
//Examples
//quadSequence([48, 65, 84]) ➞ [105, 128, 153]
//
//quadSequence([0, 1, 6, 15, 28]) ➞ [45, 66, 91, 120, 153]
//
//quadSequence([9, 20, 33, 48]) ➞ [65, 84, 105, 128]
//Notes
//Both positive and negative numbers are included in the test cases.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

// Test.assertSimilar(quadSequence([48, 65, 84]), [105, 128, 153])
//Test.assertSimilar(quadSequence([9, 20, 33, 48]), [65, 84, 105, 128])
//Test.assertSimilar(quadSequence([0, 1, 6, 15, 28]), [45, 66, 91, 120, 153])
//Test.assertSimilar(quadSequence([6, 10, 16, 24]), [34, 46, 60, 76])
//Test.assertSimilar(quadSequence([3, 12, 27, 48, 75, 108, 147, 192, 243, 300]), [363, 432, 507, 588, 675, 768, 867, 972, 1083, 1200])
//Test.assertSimilar(quadSequence([-3, 8, 23, 42, 65]), [92, 123, 158, 197, 240])
//Test.assertSimilar(quadSequence([0, 12, 10]), [-6, -36, -80])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Exact Factorial Bounds

//tags: math,numbers,recursion

//url: https://edabit.com/challenge/chDJCBDzZkjSExMwm

//Description:
//Create a recursive function that tests if a number is the exact upper bound of the factorial of n. If so, return an array of the exact factorial bound and n, or otherwise, the string "Not an exact bound!".
//Examples
//isExact(6) ➞ [6, 3]
//
//isExact(24) ➞ [24, 4]
//
//isExact(125) ➞ "Not an exact bound!"
//
//isExact(720) ➞ [720, 6]
//
//isExact(1024) ➞ "Not an exact bound!"
//
//isExact(40320) ➞ [40320, 8]
//Notes
//It is expected from the challenge-takers to come up with a solution using the concept of recursion or the so-called recursive approach.
//You can read on more topics about recursion (see Resources tab) if you aren't familiar with it yet or haven't fully understood the concept behind it before taking up this challenge.
//There will be no exceptions to handle. All inputs are positive integers.
//A recursive approach is prone to Uncaught RangeError or exceededing the maximum call size of the stack.
//A non-recursive version of this challenge (of lesser difficulty and the total liberty of not using a recursive approach) can be found here.
//If you think recursion is fun, you can find a collection of those challenges here.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(isExact), false, 'Recursion is required!')
//​
//let [numVectors, resVectors] = [[
//  2, 6, 24, 120, 5040, 40320, 3628800, 20922789888000, 125, 721, 1024, 41845579776000], [
//  [2, 2], [6, 3], [24, 4], [120, 5],
//  [5040, 7], [40320, 8], [3628800, 10], [20922789888000, 16],
//  "Not an exact bound!", "Not an exact bound!", "Not an exact bound!", "Not an exact bound!"
//]]
//​
//for (let i in numVectors)
//  i < 8 ? Test.assertSimilar(isExact(numVectors[i]), resVectors[i]) :
//          Test.assertEquals(isExact(numVectors[i]), resVectors[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: English to Pig Latin Translator

//tags: algorithms,logic,loops,strings

//url: https://edabit.com/challenge/cEBFLS8WSBf8245vZ

//Description:
//Pig latin has two very simple rules:
//If a word starts with a consonant move the first letter(s) of the word, till you reach a vowel, to the end of the word and add "ay" to the end.
//have ➞ avehay
//cram ➞ amcray
//take ➞ aketay
//cat ➞ atcay
//shrimp ➞ impshray
//trebuchet ➞ ebuchettray
//If a word starts with a vowel add "yay" to the end of the word.
//ate ➞ ateyay
//apple ➞ appleyay
//oaken ➞ oakenyay
//eagle ➞ eagleyay
//Write two functions to make an English to pig latin translator. The first function translateWord(word) takes a single word and returns that word translated into pig latin. The second function translateSentence(sentence) takes an English sentence and returns that sentence translated into pig latin.
//Examples
//translateWord("flag") ➞ "agflay"
//
//translateWord("Apple") ➞ "Appleyay"
//
//translateWord("button") ➞ "uttonbay"
//
//translateWord("") ➞ ""
//
//translateSentence("I like to eat honey waffles.") ➞ "Iyay ikelay otay eatyay oneyhay afflesway."
//
//translateSentence("Do you think it is going to rain today?") ➞ "Oday ouyay inkthay ityay isyay oinggay otay ainray odaytay?"
//Notes
//Regular expressions will help you not mess up the punctuation in the sentence.
//If the original word or sentence starts with a capital letter, the translation should preserve its case (see examples #2, #5 and #6).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(translateWord("have"), "avehay")
//Test.assertEquals(translateWord("cram"), "amcray")
//Test.assertEquals(translateWord("take"), "aketay")
//Test.assertEquals(translateWord("Cat"), "Atcay")
//Test.assertEquals(translateWord("Shrimp"), "Impshray")
//Test.assertEquals(translateWord("trebuchet"), "ebuchettray")
//Test.assertEquals(translateWord("ate"), "ateyay")
//Test.assertEquals(translateWord("Apple"), "Appleyay")
//Test.assertEquals(translateWord("oaken"), "oakenyay")
//Test.assertEquals(translateWord("eagle"), "eagleyay")
//Test.assertEquals(translateWord("ink"), "inkyay")
//Test.assertEquals(translateWord("unicorn"), "unicornyay")
//Test.assertEquals(translateWord(""), "")
//Test.assertEquals(translateSentence("I like to eat honey waffles"), "Iyay ikelay otay eatyay oneyhay afflesway")
//Test.assertEquals(translateSentence("Do you think it is going to rain today?"), "Oday ouyay inkthay ityay isyay oinggay otay ainray odaytay?")
//Test.assertEquals(translateSentence('He said, "When will this all end?"'), 'Ehay aidsay, "Enwhay illway isthay allyay endyay?"')
//Test.assertEquals(translateSentence(""), "")

