

//title: Check for Anagrams

//tags: interview,math,strings,validation

//url: https://edabit.com/challenge/FPamWj3Ky7ep9ApBz

//Description:
//Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.
//Examples
//isAnagram("cristian", "Cristina") ➞ true
//
//isAnagram("Dave Barry", "Ray Adverb") ➞ true
//
//isAnagram("Nope", "Note") ➞ false
//Notes
//Should be case insensitive.
//The two given strings can be of different lengths.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isAnagram("cristian", "Cristina"), true)
//Test.assertEquals(isAnagram("Dave Barry", "Ray Adverb"), true)
//Test.assertEquals(isAnagram("Nope", "Note"), false)
//Test.assertEquals(isAnagram("Apple", "Appeal"), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Remove the Special Characters from a String

//tags: arrays,formatting,regex,strings

//url: https://edabit.com/challenge/k7CwrsKPHrEL8h4z6

//Description:
//Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
//Examples
//removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"
//
//removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"
//
//removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(removeSpecialCharacters("The quick brown fox!"), "The quick brown fox")
//Test.assertEquals(removeSpecialCharacters("%fd76$fd(-)6GvKlO."), "fd76fd-6GvKlO")
//Test.assertEquals(removeSpecialCharacters("D0n$c sed 0di0 du1"), "D0nc sed 0di0 du1")
//Test.assertEquals(removeSpecialCharacters("cat_pic.jpeg"), "cat_picjpeg")
//Test.assertEquals(removeSpecialCharacters("519-555-8093"), "519-555-8093")
//Test.assertEquals(removeSpecialCharacters("h-d+=rf[]_{}<>.,`~!@#$%^&*(|)"), "h-drf_")
//Test.assertEquals(removeSpecialCharacters("Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???"), "Etiam porta sem malesu-ada magna mollis euismod")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Fizz Buzz Test

//tags: algorithms,interview,logic

//url: https://edabit.com/challenge/cKQA9N9Yg7ExeWusQ

//Description:
//Write a method that returns array of all the numbers from 1 to an integer argument. But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.
//Example
//fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
//
//fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
//Notes
//Make sure to return an array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(fizzBuzz(10), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'])
//Test.assertSimilar(fizzBuzz(15), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz'])
//Test.assertSimilar(fizzBuzz(100), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz', 'Fizz', 22, 23, 'Fizz', 'Buzz', 26, 'Fizz', 28, 29, 'FizzBuzz', 31, 32, 'Fizz', 34, 'Buzz', 'Fizz', 37, 38, 'Fizz', 'Buzz', 41, 'Fizz', 43, 44, 'FizzBuzz', 46, 47, 'Fizz', 49, 'Buzz', 'Fizz', 52, 53, 'Fizz', 'Buzz', 56, 'Fizz', 58, 59, 'FizzBuzz', 61, 62, 'Fizz', 64, 'Buzz', 'Fizz', 67, 68, 'Fizz', 'Buzz', 71, 'Fizz', 73, 74, 'FizzBuzz', 76, 77, 'Fizz', 79, 'Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz', 86, 'Fizz', 88, 89, 'FizzBuzz', 91, 92, 'Fizz', 94, 'Buzz', 'Fizz', 97, 98, 'Fizz', 'Buzz'])
//​
//// Originally authored by Akshat Adsule.

