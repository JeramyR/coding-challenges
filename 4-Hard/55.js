

//title: Flatten an Array

//tags: arrays,recursion

//url: https://edabit.com/challenge/DkLjrHfry9xgTedG2

//Description:
//Create a function that takes an array. This array can have all kinds of items, even other arrays. The function should return a single, flat, one-dimensional, array with all elements. Here are the conditions:
//If the item is an Array, include each item in it and the following still apply:
//If the item is a Function, include the function's output, not the function itself.
//If the item is a plain Object or a Primitive, include it as is.
//Examples
//flattenArray([1, "2", [3, function () { return 4; }, [ "five" ], "six", true, { prop: "val" }]])
//➞ [1, "2", 3, 4, "five", "six", true, { prop: "val" }]
//
//flattenArray([1, 2, [3, [4, 5], 6], 7, 8]) ➞ [1, 2, 3, 4, 5, 6, 7, 8]
//
//flattenArray() ➞ []
//Notes
//If no input is given it should return an empty array: [].

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(flattenArray([1, '2', [3, [4], function () { return 'five'; }]]), [1, '2', 3, 4, 'five'])
//Test.assertSimilar(flattenArray([1]), [1])
//Test.assertSimilar(flattenArray(), [])
//Test.assertSimilar(flattenArray([]), [])
//Test.assertSimilar(flattenArray([[1, '2', [3, function () { return 4; }, [ 'five' ], 'six', true, { prop: 'val' }]]]),[1, "2", 3, 4, "five", "six", true, { prop: 'val' }])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Words With Duplicate Letters

//tags: language_fundamentals,loops,strings,validation

//url: https://edabit.com/challenge/ztJZiCZeXATC9KDHX

//Description:
//Given a common phrase, return false if any individual word in the phrase contains duplicate letters. Return true otherwise.
//Examples
//noDuplicateLetters("Fortune favours the bold.") ➞ true
//
//noDuplicateLetters("You can lead a horse to water, but you can't make him drink.") ➞ true
//
//noDuplicateLetters("Look before you leap.") ➞ false
//// Duplicate letters in "Look" and "before".
//
//noDuplicateLetters("An apple a day keeps the doctor away.") ➞ false
//// Duplicate letters in "apple", "keeps", "doctor", and "away".
//Notes
//Letter matches are case-insensitive.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(noDuplicateLetters("Easy does it."), true)
//Test.assertEquals(noDuplicateLetters("So far, so good."), false)
//Test.assertEquals(noDuplicateLetters("Better late than never."), false)
//Test.assertEquals(noDuplicateLetters("Beat around the bush."), true)
//Test.assertEquals(noDuplicateLetters("Give them the benefit of the doubt."), false)
//Test.assertEquals(noDuplicateLetters("Your guess is as good as mine."), false)
//Test.assertEquals(noDuplicateLetters("Make a long story short."), true)
//Test.assertEquals(noDuplicateLetters("Go back to the drawing board."), true)
//Test.assertEquals(noDuplicateLetters("Wrap your head around something."), true)
//Test.assertEquals(noDuplicateLetters("Get your act together."), false)
//Test.assertEquals(noDuplicateLetters("To make matters worse."), false)
//Test.assertEquals(noDuplicateLetters("No pain, no gain."), true)
//Test.assertEquals(noDuplicateLetters("We'll cross that bridge when we come to it."), false)
//Test.assertEquals(noDuplicateLetters("Call it a day."), false)
//Test.assertEquals(noDuplicateLetters("It's not rocket science."), false)
//Test.assertEquals(noDuplicateLetters("A blessing in disguise."), false)
//Test.assertEquals(noDuplicateLetters("Get out of hand."), true)
//Test.assertEquals(noDuplicateLetters("A dime a dozen."), true)
//Test.assertEquals(noDuplicateLetters("Time flies when you're having fun."), true)
//Test.assertEquals(noDuplicateLetters("The best of both worlds."), true)
//Test.assertEquals(noDuplicateLetters("Speak of the devil."), true)
//Test.assertEquals(noDuplicateLetters("You can say that again."), false)
//Test.assertEquals(noDuplicateLetters("Always be closing."), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 3n + 1 Problem (Collatz Conjecture)

//tags: loops,numbers

//url: https://edabit.com/challenge/FeSnj9JdWMRMEfff7

//Description:
//A Collatz sequence is generated by repeatedly applying the following rules to an integer and then to each resulting integer in turn:
//If even: divide by 2.
//If odd: multiply by 3, then add 1.
//The Collatz algorithm has been tested and found to always reach 1 for all positive integers.
//Create a function that, when given two positive integers a b, returns the string "a" if integer a took fewer steps to reach 1 than b when passed through the Collatz sequence, or "b" if integer b took fewer steps to reach 1 than a.
//Examples
//collatz(10, 15) ➞ "a"
//// Because 10.0 - 5.0 - 16.0 - 8.0 - 4.0 - 2.0 - 1.0: 6 steps
//// 15.0 - 46.0 - 23.0 - 70.0 - 35.0 - 106.0 - 53.0 - 160.0 - 80.0 - 40.0 - 20.0 - 10.0 - 5.0 - 16.0 - 8.0 - 4.0 - 2.0 - 1.0: 17 steps
//
//collatz(13, 16) ➞ "b"
//
//collatz(53782, 72534) ➞ "b"
//Notes
//Assume a and b never take the same number of steps to reach 1.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(collatz(10, 15), "a")
//Test.assertEquals(collatz(13, 16), "b")
//Test.assertEquals(collatz(53782, 72534), "b")
//Test.assertEquals(collatz(72221, 11198), "b")
//Test.assertEquals(collatz(1723817263, 837249873748), "a")
//Test.assertEquals(collatz(556238, 667822), "b")
//Test.assertEquals(collatz(4, 3), "a")
//Test.assertEquals(collatz(64287364823648762384623847823648, 767623964723864823648725736487262), "a")
//Test.assertEquals(collatz(46287364872837482, 1267650600228229401496703205376), "b")

