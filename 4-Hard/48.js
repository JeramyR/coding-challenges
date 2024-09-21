

//title: Sieve of Eratosthenes

//tags: algorithms,arrays,math,numbers

//url: https://edabit.com/challenge/r4ZHGRs8uoK2HpEFo

//Description:
//Given num as input, return an array with all primes up to num included.
//
//Examples
//eratosthenes(1) ➞ []
//
//eratosthenes(10) ➞ [2, 3, 5, 7]
//
//eratosthenes(20) ➞ [2, 3, 5, 7, 11, 13, 17, 19]
//
//eratosthenes(0) ➞ []
//Notes
//Check the Resources tab for info on the meaning of "Eratosthenes".
//Try solving this challenge using Eratosthenes sieve.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(eratosthenes(10), [2, 3, 5, 7])
//Test.assertSimilar(eratosthenes(0), [])
//Test.assertSimilar(eratosthenes(1), [])
//Test.assertSimilar(eratosthenes(20), [2, 3, 5, 7, 11, 13, 17, 19])
//Test.assertSimilar(eratosthenes(1000), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Largest Prime within a Range

//tags: logic,loops,math

//url: https://edabit.com/challenge/edP3JPvJHGigcYhQX

//Description:
//Given two integers as arguments, create a function that finds the largest prime within the range of the two integers.
//Examples
//fatPrime(2, 10) ➞ 7
//// range [2, 3, 4, 5, 6, 7, 8, 9, 10] and the largest prime is 7.
//
//fatPrime(10, 2) ➞ 7
//// [10, 9, 8, 7, 6, 5, 4, 3, 2] and the largest prime is 7.
//
//fatPrime(4, 24) ➞ 23
//// range [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] the largest prime is 23.
//Notes
//All numbers will be positive integers.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(fatPrime(2, 10), 7)
//Test.assertEquals(fatPrime(10, 2), 7)
//Test.assertEquals(fatPrime(4, 24), 23)
//Test.assertEquals(fatPrime(16, 100), 97)
//Test.assertEquals(fatPrime(7, 49), 47)
//Test.assertEquals(fatPrime(200, 100), 199)
//Test.assertEquals(fatPrime(400, 1000), 997)
//Test.assertEquals(fatPrime(3297, 32970), 32969)
//Test.assertEquals(fatPrime(43297, 23175), 43291)
//Test.assertEquals(fatPrime(100000, 400000), 399989)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Letter Occurrences Per Word

//tags: algorithms,arrays,data_structures

//url: https://edabit.com/challenge/gA9dpoanWY6StiKR9

//Description:
//Create a function that takes in a sentence and a character to find. Return an object of each word in the sentence, with the count of the specified character as the value.
//Examples
//findOccurrences("Hello World", "o") ➞ {
//  "hello" : 1,
//  "world" : 1
//}
//
//findOccurrences("Create a nice JUICY function", "c") ➞  {
//  "create" : 1,
//  "a" : 0,
//  "nice" : 1,
//  "juicy" : 1,
//  "function" : 1
//}
//
//findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A") ➞ {
//  "an" : 1,
//  "apple" : 1,
//  "a" : 1,
//  "day" : 1,
//  "keeps" : 0,
//  "archeologist" : 1,
//  "away..." : 2
//}
//Notes
//The function shouldn't be case sensitive.
//Words in the dictionary should be in lowercase.
//You may be required to find punctuation.
//Duplicate words should be ignored (see example #3 for the word "an").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(findOccurrences("Hello World", "o"), {
//  "hello" : 1,
//  "world" : 1
//})
//​
//Test.assertSimilar(findOccurrences("Create a nice JUICY function", "c"),  {
//  "create" : 1,
//  "a" : 0,
//  "nice" : 1,
//  "juicy" : 1,
//  "function" : 1
//})
//​
//Test.assertSimilar(findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "a"), {
//  "an" : 1,
//  "apple" : 1,
//  "a" : 1,
//  "day" : 1,
//  "keeps" : 0,
//  "archeologist" : 1,
//  "away..." : 2
//})
//​
//Test.assertSimilar(findOccurrences("hello people of the planet Earth", "g"), {"hello": 0, "people": 0, "of": 0, "the": 0, "planet": 0, "earth": 0})
//Test.assertSimilar(findOccurrences("Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.", "R"), {"reference": 2, "site": 0, "about": 0, "lorem": 1, "ipsum,": 0, "giving": 0, "information": 1, "on": 0, "its": 0, "origins,": 1, "as": 0, "well": 0, "a": 0, "random": 1, "lipsum": 0, "generator.": 2})

