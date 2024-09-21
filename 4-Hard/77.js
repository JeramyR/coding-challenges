

//title: Numerical Morphisms

//tags: conditions,logic,loops,numbers

//url: https://edabit.com/challenge/TFnrbZNSE6PxjFBcr

//Description:
//A number num, that elevated to the power of another number k "ends" with the same num, it's automorphic.
//5² = 25
//// It's automorphic because "25" ends with "5"
//
//5³  = 125
//// It's automorphic because "125" ends with "5"
//
//76⁴ = 33362176
//// It's automorphic because "33362176" ends with "76"
//A number can have various powers that make it automorphic (i.e. look at number 5 in the above example). In this challenge, you have to verify if the given number is automorphic for each power from 2 up to 10.
//Given a non-negative integer num, implement a function that returns the string:
//"Polymorphic" if num is automorphic for every power from 2 up to 10.
//"Quadrimorphic" if num is automorphic for only four powers (any from 2 up to 10).
//"Dimorphic" if num is automorphic for only two powers (any from 2 up to 10).
//"Enamorphic" if num is automorphic for only one power (any from 2 up to 10).
//"Amorphic" if num is not automorphic for for any powers from 2 up to 10.
//Examples
//powerMorphic(5) ➞ "Polymorphic"
//// From 2 up to 10, every power of 5 ends with 5
//
//powerMorphic(21) ➞ "Enamorphic"
//// 21⁶ = 85766121
//
//powerMorphic(7) ➞ "Dimorphic"
//// 7⁵ = 716807
//// 7⁹ = 40353607
//
//powerMorphic(4) ➞ "Quadrimorphic"
//// 4³ = 64
//// 4⁵ = 1024
//// 4⁷ = 16384
//// 4⁹ = 262144
//
//powerMorphic(10) ➞ "Amorphic"
//// There are no powers that make it automorphic
//Notes
//You can do a complete loop cycle to check if num is automorphic for each power, or you can try to spot the discriminants that permit you to shorten the logic of your code.
//Despite being inspired by the OEIS sequence A003226, the assertions of this challenge are to be considered properly valid only in the specific context.
//Note for JavaScript: the inputs will be given as BigInt (big integers) to avoid approximation errors but, besides the numbers notation, there are no differences in the procedure to adopt. You can find a compendium about the global object BigInt into the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(powerMorphic(0n), "Polymorphic")
//Test.assertEquals(powerMorphic(1n), "Polymorphic")
//Test.assertEquals(powerMorphic(4n), "Quadrimorphic")
//Test.assertEquals(powerMorphic(7n), "Dimorphic")
//Test.assertEquals(powerMorphic(10n), "Amorphic")
//Test.assertEquals(powerMorphic(68n), "Dimorphic")
//Test.assertEquals(powerMorphic(121n), "Amorphic")
//Test.assertEquals(powerMorphic(501n), "Quadrimorphic")
//Test.assertEquals(powerMorphic(625n), "Polymorphic")
//Test.assertEquals(powerMorphic(3376n), "Enamorphic")
//Test.assertEquals(powerMorphic(2030n), "Amorphic")
//Test.assertEquals(powerMorphic(3751n), "Quadrimorphic")
//Test.assertEquals(powerMorphic(9376n), "Polymorphic")
//Test.assertEquals(powerMorphic(9999n), "Quadrimorphic")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Fibonacci !Recursion

//tags: algebra,math,numbers

//url: https://edabit.com/challenge/j7BazSkQteP8Czp5b

//Description:
//The Fibonacci sequence is a classic use case for recursive functions since the value of the sequence at a given index is dependent on the sum of the last two values. However, the recursion tree created by solving the Fibonacci sequence recursively can grow quite fast. Therefore it can be important to think about the implications of running a function recursively. Depending on the size of n needed and the capabilities of the system in question you might want to take a different approach.
//Write a non-recursive function that takes an integer n and returns the Fibonacci sequence's value at index n.
//Examples
//fib(6) ➞ 8
//// 0 + 1 = 1, 1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
//
//fib(1) ➞ 1
//
//fib(2) ➞ 1
//Notes
//Inputs will be whole numbers >= 0

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fib(0), 0)
//Test.assertEquals(fib(1), 1)
//Test.assertEquals(fib(2), 1)
//Test.assertEquals(fib(3), 2)
//Test.assertEquals(fib(4), 3)
//Test.assertEquals(fib(5), 5)
//Test.assertEquals(fib(6), 8)
//Test.assertEquals(fib(7), 13)
//Test.assertEquals(fib(8), 21)
//Test.assertEquals(fib(9), 34)
//Test.assertEquals(fib(10), 55)
//Test.assertEquals(fib(11), 89)
//Test.assertEquals(fib(12), 144)
//Test.assertEquals(fib(13), 233)
//Test.assertEquals(fib(14), 377)
//Test.assertEquals(fib(15), 610)
//Test.assertEquals(fib(16), 987)
//Test.assertEquals(fib(17), 1597)
//Test.assertEquals(fib(18), 2584)
//Test.assertEquals(fib(19), 4181)
//Test.assertEquals(fib(20), 6765)
//Test.assertEquals(fib(21), 10946)
//Test.assertEquals(fib(22), 17711)
//Test.assertEquals(fib(23), 28657)
//Test.assertEquals(fib(24), 46368)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number of Times a Character Appears

//tags: arrays,strings

//url: https://edabit.com/challenge/Mbmyf5Q2bXJvdtaiv

//Description:
//Create a function that returns the number of times a character appears in each word in a sentence. Treat upper and lower case characters of the same letter as being identical (e.g. a exists in Anna twice, not once).
//Examples
//charAppears("She sells sea shells by the seashore.", "s")
//➞ [1, 2, 1, 2, 0, 0, 2]
//// "s" shows up once in "She", twice in "sells", once in "sea", twice in "shells", etc.
//
//charAppears("Peter Piper picked a peck of pickled peppers.", "P")
//➞ [1, 2, 1, 0, 1, 0, 1, 3]
//// "p" shows up once in "Peter", ... 3 times in "peppers".
//
//charAppears("She hiked in the morning, then swam in the river.", "t")
//➞ [0, 0, 0, 1, 0, 1, 0, 0, 1, 0]
//Notes
//Ignore case (note that capitalization, in both the sentence and character itself, in examples #1 & #2).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(charAppears("She sells sea shells by the seashore.", "s"), [1, 2, 1, 2, 0, 0, 2])
//Test.assertSimilar(charAppears("Peter Piper picked a peck of pickled peppers.", "p"), [1, 2, 1, 0, 1, 0, 1, 3])
//Test.assertSimilar(charAppears("She hiked in the morning, then swam in the river.", "t"), [0, 0, 0, 1, 0, 1, 0, 0, 1, 0])
//Test.assertSimilar(charAppears("I scream, you scream, we all scream for ice cream.", "f"), [0, 0, 0, 0, 0, 0, 0, 1, 0, 0])
//Test.assertSimilar(charAppears("Snap, crackle, pop!", "p"), [1, 0, 2])
//Test.assertSimilar(charAppears("What a wonderful world.", "w"), [1, 0, 1, 1])

