

//title: Reverse Sort: Lexical and Length

//tags: sorting,strings

//url: https://edabit.com/challenge/jX6FbEai4APajFbeC

//Description:
//Write a function that sorts the words in a given string lexicographically (lexical sort) and by length in reverse order.
//Examples
//reverseSort("You've rocked the pragmatic world in the making!") 
// ➞ "pragmatic making! You've rocked world the the in"
//
//reverseSort("Tesh makes my world worth enjoying and living for.")
// ➞ "enjoying living worth world makes Tesh for. and my"
//
//reverseSort("Shaken by the bloody truth and crazy lies.")
// ➞ "Shaken bloody truth lies. crazy the and by"
//
//reverseSort("Java streams and collections are fun to program with!")
// ➞ "collections streams program with! Java fun are and to"
//Notes
//Special characters, punctuation marks and symbols are part of the word that directly precedes it.
//The space character separates each word in the given string.
//Case insensitive sorting is required.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//let [actual, expected] = [
//  [ "You've rocked the pragmatic world in the making!",
//    "Tesh makes my world worth enjoying and living for.",
//    "Shaken by the bloody truth and crazy lies.",
//    "Java streams and collections are fun to program with!",
//    "Tesha is a woman of true substance and a beauty.",
//    "Lexical sort is similar to alphanumeric sorting.",
//    "To do or not to do, is all up to you.",
//    "Javascript array methods are fun to program with!",
//    "Programming in JavaScript is a lot of fun.",
//    "Truly, a heart that beats for no one but for Tesh."
//  ], [
//    "pragmatic making! You've rocked world the the in",
//    "enjoying living worth world makes Tesh for. and my",
//    "Shaken bloody truth lies. crazy the and by",
//    "collections streams program with! Java fun are and to",
//    "substance beauty. woman Tesha true and of is a a",
//    "alphanumeric sorting. similar Lexical sort to is",
//    "you. not do, all up To to to or is do",
//    "Javascript program methods with! array fun are to",
//    "Programming JavaScript fun. lot of is in a",
//    "Truly, Tesh. heart beats that one for for but no a",
//  ]
//]
//for (let i in actual) Test.assertEquals(reverseSort(actual[i]), expected[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Prime Factorization

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/WkH9rwDnNtDLYAYLp

//Description:
//Create a function that returns the prime factorization of a number as a sorted list of arrays. Include the multiplicity of each prime in the arrays:
//[(prime_0, mult_0), ..., (prime_k, mult_k)]
//where prime_0 < prime_1 < ... < prime_k
//Examples
//getPrimeFactorization(4) ➞ [[2, 2]]
//
//getPrimeFactorization(10) ➞ [[2, 1], [5, 1]]
//
//getPrimeFactorization(60) ➞ [[2, 2], [3, 1], [5, 1]]
//Notes
//Don't worry about negatives or floats. All inputs will be positive numbers.
//1 is not a prime! Do not include it. You will not be given 1 as an input.
//All inputs will be less than 10,000.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(getPrimeFactorization(2), [[2, 1]]);
//Test.assertSimilar(getPrimeFactorization(4), [[2, 2]]);
//Test.assertSimilar(getPrimeFactorization(10), [[2, 1], [5, 1]]);
//Test.assertSimilar(getPrimeFactorization(11), [[11, 1]]);
//Test.assertSimilar(getPrimeFactorization(29), [[29, 1]]);
//Test.assertSimilar(getPrimeFactorization(60), [[2, 2], [3, 1], [5, 1]]);
//Test.assertSimilar(getPrimeFactorization(100), [[2, 2], [5, 2]]);
//Test.assertSimilar(getPrimeFactorization(151), [[151, 1]]);
//Test.assertSimilar(getPrimeFactorization(323), [[17, 1], [19, 1]]);
//Test.assertSimilar(getPrimeFactorization(997), [[997, 1]]);
//Test.assertSimilar(getPrimeFactorization(3349), [[17, 1], [197, 1]]);
//Test.assertSimilar(getPrimeFactorization(5040), [[2, 4], [3, 2], [5, 1], [7, 1]]);
//Test.assertSimilar(getPrimeFactorization(6097), [[7, 1], [13, 1], [67, 1]]);
//Test.assertSimilar(getPrimeFactorization(8192), [[2, 13]]);
//Test.assertSimilar(getPrimeFactorization(9870), [[2, 1], [3, 1], [5, 1], [7, 1], [47, 1]]);
//Test.assertSimilar(getPrimeFactorization(9973), [[9973, 1]]);
//Test.assertSimilar(getPrimeFactorization(9999), [[3, 2], [11, 1], [101, 1]]);

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Unprimeables

//tags: conditions,loops,numbers

//url: https://edabit.com/challenge/nPDQ5rYH8WccdQx33

//Description:
//In this challenge, you have to establish if an integer is an Unprimeable number. To be Unprimeable, when a single digit of a composite number is exchanged with any digit from 0 up to 9, the new number obtained must not be a prime:
//number = 14
//
//Numbers obtained changing the first digit (1):
//
//04 (4), 14, 24, 34, 44, 54, 64, 74, 84, 94
//// Leading zeros are not considered
//
//Numbers obtained changing the second digit (4):
//
//10, 11, 12, 13, 14, 15, 16, 17, 18, 19
//
//// Among the two series, 11, 13, 17 and 19 are primes
//// 14 is not an unprimeable number
//
//number = 200
//
//Numbers obtained changing the first digit (2):
//
//000 (0), 100, 200, 300, 400, 500, 600, 700, 800, 900
//// Leading zeros are not considered
//
//Numbers obtained changing the second digit (0):
//
//200, 210, 220, 230, 240, 250, 260, 270, 280, 290
//
//Numbers obtained changing the third digit (0):
//
//200, 201, 202, 203, 204, 205, 206, 207, 208, 209
//
//// Among the three series, there aren't primes
//// 200 is an unprimeable number (the first of the series)
//Given a non-negative integer num, implement a function that returns:
//The string "Prime Input" if num is prime.
//The string "Unprimeable" if num is Unprimeable (accordingly to the above instructions).
//If num is not Unprimeable, an array containing all the primes obtained after exchanging its digits, without duplicates and sorted ascendingly.
//Examples
//isUnprimeable(200) ➞ "Unprimeable"
//
//isUnprimeable(14) ➞ [11, 13, 17, 19]
//
//isUnprimeable(2) ➞ "Prime Input"
//Notes
//When changing the first digit, leading zeros are not considered part of the new number obtained.
//Despite is still an unproofed theory, as far as we know every even number (except 2) is not prime. You are free to choose to use this discriminant when you check the number obtained after the change of a digit.
//The same concept can be applied also to primes. Primes that do not return other primes when their single digits are changed (apart from the number itself) are called Weakly Primes: the first prime of this series is 294001.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(isUnprimeable(200), "Unprimeable", "Example #1")
//Test.assertSimilar(isUnprimeable(14), [11, 13, 17, 19], "Example #2")
//Test.assertSimilar(isUnprimeable(2), "Prime Input", "Example #3")
//Test.assertSimilar(isUnprimeable(839), "Prime Input")
//Test.assertSimilar(isUnprimeable(4065), "Unprimeable")
//Test.assertSimilar(isUnprimeable(5042), "Unprimeable")
//Test.assertSimilar(isUnprimeable(1), [2, 3, 5, 7])
//Test.assertSimilar(isUnprimeable(5137), [137, 2137, 3137, 5107, 5147, 5167, 5197, 5237, 5437, 5737, 9137])
//Test.assertSimilar(isUnprimeable(666), [661])
//Test.assertSimilar(isUnprimeable(13490), [13499])
//Test.assertSimilar(isUnprimeable(294001), "Prime Input")

