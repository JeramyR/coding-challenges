

//title: Fraction to Mixed Number

//tags: math,numbers

//url: https://edabit.com/challenge/PvDfScDCnsY8qYvTq

//Description:
//Create a function that takes a string representing a fraction, and return a string representing that input as a mixed number.
//Mixed numbers are of the form 1 2/3 — note the space between the whole number portion and the fraction portion.
//Resulting fractions should be fully reduced (see example #2).
//If a result is a whole number with no fractional remainder, return only the whole number portion (see example #3).
//If a result is only fractional with no whole number, return only the fractional portion (see example #4).
//If a result is negative, the whole number should carry the negative sign. If the result would not have a whole number portion, the numerator of the fractional portion should carry the negative sign (see examples #5 - #7).
//Examples
//mixedNumber("5/4") ➞ "1 1/4"
//
//mixedNumber("6/4") ➞ "1 1/2"
//
//mixedNumber("8/4") ➞ "2"
//
//mixedNumber("4/6") ➞ "2/3"
//
//mixedNumber("-1/4") ➞ "-1/4"
//
//mixedNumber("-5/4") ➞ "-1 1/4"
//
//mixedNumber("-8/4") ➞ "-2"
//Notes
//All provided inputs will be formatted similarly, negative numbers will be provided in the numerator portion only, and all inputs will contain no spaces, invalid characters, or zero denominators.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mixedNumber("5/4"), "1 1/4")
//Test.assertEquals(mixedNumber("6/4"), "1 1/2")
//Test.assertEquals(mixedNumber("8/4"), "2")
//Test.assertEquals(mixedNumber("4/6"), "2/3")
//Test.assertEquals(mixedNumber("-1/4"), "-1/4")
//Test.assertEquals(mixedNumber("-5/4"), "-1 1/4")
//Test.assertEquals(mixedNumber("-8/4"), "-2")
//Test.assertEquals(mixedNumber("0/32768"), "0")
//Test.assertEquals(mixedNumber("73/5"), "14 3/5")
//Test.assertEquals(mixedNumber("3855/889785"), "257/59319")
//Test.assertEquals(mixedNumber("82346/197"), "418")
//Test.assertEquals(mixedNumber("-2037450/204"), "-9987 1/2")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Prime Divisors

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/pQtDmCtMXNzYy3mvo

//Description:
//Given a number, return all its prime divisors in an array. Create a function that takes a number as an argument and returns all its prime divisors.
//To illustrate:
//If n = 27
//All divisors are: [3, 9, 27]
//Finally, from that array of divisors, return the prime ones: [3]
//Examples
//primeDivisors(27) ➞ [3]
//
//primeDivisors(99) ➞ [3, 11]
//
//primeDivisors(3457) ➞ [3457]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(primeDivisors(27), [3])
//Test.assertSimilar(primeDivisors(24), [2, 3])
//Test.assertSimilar(primeDivisors(478170), [2, 3, 5, 7, 11, 23])
//Test.assertSimilar(primeDivisors(1386), [2, 3, 7, 11])
//Test.assertSimilar(primeDivisors(462), [2, 3, 7, 11])
//Test.assertSimilar(primeDivisors(99), [3, 11])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Next in the Alphabet

//tags: loops,strings

//url: https://edabit.com/challenge/Fju7NXxGiiuERRAWm

//Description:
//Create a function which returns the next letters alphabetically in a given string. If the last letter is a "Z", change the rest of the letters accordingly.
//Examples
//nextLetters("A") ➞ "B"
//
//nextLetters("ABC") ➞ "ABD"
//
//nextLetters("Z") ➞ "AA"
//
//nextLetters("CAZ") ➞ "CBA"
//
//nextLetters("") ➞ "A"
//Notes
//Tests will all be in CAPITALS.
//Empty inputs should return a capital "A" (as if it were in letter position 0!).
//Think about the letter "Z" like the number 9 and how it carries over to increment the next letter/digit over.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(nextLetters("A"), "B")
//Test.assertEquals(nextLetters("ABC"), "ABD")
//Test.assertEquals(nextLetters("Z"), "AA")
//Test.assertEquals(nextLetters("CAZ"), "CBA")
//Test.assertEquals(nextLetters("AAA"), "AAB")
//Test.assertEquals(nextLetters("ZYZ"), "ZZA")
//Test.assertEquals(nextLetters("ZZZ"), "AAAA")
//Test.assertEquals(nextLetters("ACZZZ"), "ADAAA")
//Test.assertEquals(nextLetters("ZZZAZAZAZAZAZZZZ"), "ZZZAZAZAZAZBAAAA")
//Test.assertEquals(nextLetters(""), "A")
//Test.assertEquals(nextLetters("ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ"), "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
//Test.assertEquals(nextLetters("EDABIS"), "EDABIT")
//Test.assertEquals(nextLetters("JOSHTZ"), "JOSHUA")

