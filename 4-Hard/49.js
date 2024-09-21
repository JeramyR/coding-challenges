

//title: Phone Number Word Decoder

//tags: formatting,language_fundamentals,regex,strings

//url: https://edabit.com/challenge/LhMQuGstm7EENosjw

//Description:
//Create a program that converts a phone number with letters to one with only numbers.
//Number	Letter
//0	none
//1	none
//2	ABC
//3	DEF
//4	GHI
//5	JKL
//6	MNO
//7	PQRS
//8	TUV
//9	WXYZ
//Examples
//textToNum("123-647-EYES") ➞ "123-647-3937"
//
//textToNum("(325)444-TEST") ➞ "(325)444-8378"
//
//textToNum("653-TRY-THIS") ➞ "653-879-8447"
//
//textToNum("435-224-7613") ➞ "435-224-7613"
//Notes
//All inputs will be formatted as a string representing a proper phone number in the format XXX-XXX-XXXX or (XXX)XXX-XXXX, using numbers and capital letters.
//Check the Resources tab for more info on telephone keypads.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(textToNum("123-647-EYES"), "123-647-3937")
//Test.assertEquals(textToNum("(325)444-TEST"), "(325)444-8378")
//Test.assertEquals(textToNum("653-TRY-THIS"), "653-879-8447")
//Test.assertEquals(textToNum("435-224-7613"), "435-224-7613")
//Test.assertEquals(textToNum("(33D)ONT-FAIL"), "(333)668-3245")
//Test.assertEquals(textToNum("(025)445-6741"), "(025)445-6741")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Beginning and End Pairs

//tags: arrays,loops

//url: https://edabit.com/challenge/yoRh3uocRGRYgmqHJ

//Description:
//Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.
//Examples
//pairs([1, 2, 3, 4, 5, 6, 7]) ➞ [[1, 7], [2, 6], [3, 5], [4, 4]]
//
//pairs([1, 2, 3, 4, 5, 6]) ➞ [[1, 6], [2, 5], [3, 4]]
//
//pairs([5, 9, 8, 1, 2]) ➞ [[5, 2], [9, 1], [8, 8]]
//
//pairs([]) ➞ []
//Notes
//If the array has an odd length, repeat the middle element twice for the last pair.
//Return an empty array if the input is an empty array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(pairs([1, 2, 3, 4, 5, 6, 7]), [[1, 7], [2, 6], [3, 5], [4, 4]])
//Test.assertSimilar(pairs([1, 2, 3, 4, 5, 6]), [[1, 6], [2, 5], [3, 4]])
//Test.assertSimilar(pairs([5, 9, 8, 1, 2]), [[5, 2], [9, 1], [8, 8]])
//Test.assertSimilar(pairs([5, 6, 7]), [[5, 7], [6, 6]])
//Test.assertSimilar(pairs([1, 1, 4, 4, 5, 5]), [[1, 5], [1, 5], [4, 4]])
//Test.assertSimilar(pairs([9, 9, 9, 9, 3, 3, 9]), [[9, 9], [9, 3], [9, 3], [9, 9]])
//Test.assertSimilar(pairs([5, 6]), [[5, 6]])
//Test.assertSimilar(pairs([5]), [[5, 5]])
//Test.assertSimilar(pairs([]), [])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Algorithms: Binary Search

//tags: algorithms,interview,validation

//url: https://edabit.com/challenge/5puuiuvW48dEsjkzW

//Description:
//Create a function that finds a target number in a list of prime numbers. Implement a binary search algorithm in your function. The target number will be from 2 through 97. If the target is prime then return "yes" else return "no".
//Examples
//var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
//
//
//isPrime(primes, 3) ➞ "yes"
//
//isPrime(primes, 4) ➞ "no"
//
//isPrime(primes, 67) ➞ "yes"
//
//isPrime(primes, 36) ➞ "no"
//Notes
//You could use built-in functions to solve this, but the point of this challenge is to see if you understand the binary search algorithm.
//The solution is in the Resources tab.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
//​
//Test.assertEquals(isPrime(primes, 3), "yes")
//Test.assertEquals(isPrime(primes, 4), "no")
//Test.assertEquals(isPrime(primes, 67), "yes")
//Test.assertEquals(isPrime(primes, 36), "no")
//​
//// credits to KhanAcademy for this challenge

