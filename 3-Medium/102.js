

//title: Extend the Vowels

//tags: regex,strings

//url: https://edabit.com/challenge/P4zxwFNwZPGeiDwKy

//Description:
//Create a function that takes a word and extends all vowels by a number num.
//Examples
//extendVowels("Hello", 5) ➞ "Heeeeeelloooooo"
//
//extendVowels("Edabit", 3) ➞ "EEEEdaaaabiiiit"
//
//extendVowels("Extend", 0) ➞ "Extend"
//Notes
//Return "invalid" if num is not a positive integer or 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(extendVowels("Hello", 5), "Heeeeeelloooooo")
//Test.assertEquals(extendVowels("Edabit", 3), "EEEEdaaaabiiiit")
//Test.assertEquals(extendVowels("Extend", 0), "Extend")
//Test.assertEquals(extendVowels("A", 10), "AAAAAAAAAAA")
//Test.assertEquals(extendVowels("Z", 93), "Z")
//Test.assertEquals(extendVowels("Vowel", 0.5), "invalid")
//Test.assertEquals(extendVowels("Nice", -8), "invalid")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Check if a Number is Prime

//tags: math,validation

//url: https://edabit.com/challenge/f6n3bkqFCojwB2282

//Description:
//Create a function that returns true if a number is prime, and false otherwise. A prime number is any positive integer that is evenly divisible by only two divisors: 1 and itself.
//The first ten prime numbers are:
//2, 3, 5, 7, 11, 13, 17, 19, 23, 29
//Examples
//isPrime(31) ➞ true
//
//isPrime(18) ➞ false
//
//isPrime(11) ➞ true
//Notes
//A prime number has no other factors except 1 and itself.
//If a number is odd it is not divisible by an even number.
//1 is not considered a prime number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isPrime(31), true)
//Test.assertEquals(isPrime(18), false)
//Test.assertEquals(isPrime(11), true)
//Test.assertEquals(isPrime(12), false)
//Test.assertEquals(isPrime(1), false)
//Test.assertEquals(isPrime(3), true)
//Test.assertEquals(isPrime(48), false)
//Test.assertEquals(isPrime(10), false)
//Test.assertEquals(isPrime(5), true)
//Test.assertEquals(isPrime(77), false)
//Test.assertEquals(isPrime(7), true)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Split a String Based on Vowels and Consonants

//tags: conditions,control_flow,functional_programming,regex

//url: https://edabit.com/challenge/tWgCG2PjN6FHq27S7

//Description:
//Write a function that takes a string, breaks it up and returns it with vowels first, consonants second. For any character that's not a vowel (like special characters or spaces), treat them like consonants.
//Examples
//split("abcde") ➞ "aebcd"
//
//split("Hello!") ➞ "eoHll!"
//
//split("What's the time?") ➞ "aeieWht's th tm?"
//Notes
//Vowels are a, e, i, o, u.
//Define a separate isVowel() function for easier to read code (recommendation).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(split("abcde"), "aebcd")
//Test.assertEquals(split("Hello!"), "eoHll!")
//Test.assertEquals(split("What's the time?"), "aeieWht's th tm?")

