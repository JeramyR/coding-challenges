

//title: Filter by Digit Length

//tags: arrays,higher_order_functions,numbers

//url: https://edabit.com/challenge/RXNybvGHLuvFiWKvq

//Description:
//Create a function that filters out an array to include numbers that only have a certain number of digits.
//Examples
//filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
//// Include only numbers with 3 digits.
//
//filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
//// Include only numbers with 1 digit.
//
//filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
//// No numbers with only 1 digit exist => return empty array.
//
//filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]
//// All numbers in the array have 1 digit only => return original array.
//Notes
//If no numbers of the specified digit length exist, return an empty array.
//If all numbers in the array have the specified digit length, return the original array.
//The sub-array returned should have the same relative order as the original array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(filterDigitLength([88, 232, 4, 9721, 555], 3), [232, 555])
//Test.assertSimilar(filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9])
//Test.assertSimilar(filterDigitLength([32, 88, 74, 91, 300, 4050], 1), [], 'Should return empty array if no numbers of specified length exist.')
//Test.assertSimilar(filterDigitLength([5, 6, 8, 9], 1), [5, 6, 8, 9], 'Should return original array if every digit is that length.')
//Test.assertSimilar(filterDigitLength([99, 838, 435, 7666, 989, 431], 3), [838, 435, 989, 431])
//Test.assertSimilar(filterDigitLength([99, 838, 435, 7666, 989, 431], 2), [99])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: The Full Length of a Google

//tags: formatting,language_fundamentals,strings

//url: https://edabit.com/challenge/cWHToCQaAbnzNJzQw

//Description:
//Google's logo can be stretched depending on how many pages it lets you skip forward to.
//
//Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.
//Examples
//googlify(10) ➞ "Goooooooooogle"
//
//googlify(23) ➞ "Gooooooooooooooooooooooogle"
//
//googlify(2) ➞ "Google"
//
//googlify(-2) ➞ "invalid"
//Notes
//If n is equal to or less than 1, return invalid.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(googlify(-5), "invalid")
//Test.assertEquals(googlify(-4), "invalid")
//Test.assertEquals(googlify(-3), "invalid")
//Test.assertEquals(googlify(-2), "invalid")
//Test.assertEquals(googlify(-1), "invalid")
//Test.assertEquals(googlify(0), "invalid")
//Test.assertEquals(googlify(1), "invalid")
//Test.assertEquals(googlify(2), "Google")
//Test.assertEquals(googlify(3), "Gooogle")
//Test.assertEquals(googlify(4), "Goooogle")
//Test.assertEquals(googlify(5), "Gooooogle")
//Test.assertEquals(googlify(6), "Goooooogle")
//Test.assertEquals(googlify(7), "Gooooooogle")
//Test.assertEquals(googlify(8), "Goooooooogle")
//Test.assertEquals(googlify(9), "Gooooooooogle")
//Test.assertEquals(googlify(10), "Goooooooooogle")
//Test.assertEquals(googlify(11), "Gooooooooooogle")
//Test.assertEquals(googlify(12), "Goooooooooooogle")
//Test.assertEquals(googlify(13), "Gooooooooooooogle")
//Test.assertEquals(googlify(14), "Goooooooooooooogle")
//Test.assertEquals(googlify(15), "Gooooooooooooooogle")
//Test.assertEquals(googlify(16), "Goooooooooooooooogle")
//Test.assertEquals(googlify(17), "Gooooooooooooooooogle")
//Test.assertEquals(googlify(18), "Goooooooooooooooooogle")
//Test.assertEquals(googlify(19), "Gooooooooooooooooooogle")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: You FAILEDPASSED the Exam

//tags: bugs,conditions,logic

//url: https://edabit.com/challenge/eYqGBvdszDAnNmf4J

//Description:
//Here is a trainwreck of a photo:
//
//The challenge is to fix all of the bugs in this incredibly messy code, which the code in the image might've actually looked like (probably not)! The code given will output the same middle two lines as in the image shown above.
//First parameter is the user's score.
//Second parameter is the required score.
//Examples
//gradePercentage("85%", "85%") ➞ "You PASSED the Exam"
//
//gradePercentage("99%", "85%") ➞ "You PASSED the Exam"
//
//gradePercentage("65%", "90%") ➞ "You FAILED the Exam"
//Notes
//Note that inputs will be given as a string percentage number.
//Maintain all capitalization.
//Feel free to declutter and refactor code if it helps!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(gradePercentage("85%", "85%"), "You PASSED the Exam")
//Test.assertEquals(gradePercentage("99%", "85%"), "You PASSED the Exam")
//Test.assertEquals(gradePercentage("65%", "90%"), "You FAILED the Exam")
//Test.assertEquals(gradePercentage("65%", "66%"), "You FAILED the Exam")
//Test.assertEquals(gradePercentage("5%", "8%"), "You FAILED the Exam")
//Test.assertEquals(gradePercentage("8%", "5%"), "You PASSED the Exam")

