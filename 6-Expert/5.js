

//title: Longest Substring with Non-repeating Characters

//tags: loops,strings

//url: https://edabit.com/challenge/vHJrWvyEiiGp5yZtX

//Description:
//Write a function that returns the longest non-repeating substring for a string input.
//Examples
//longestNonrepeatingSubstring("abcabcbb") ➞ "abc"
//
//longestNonrepeatingSubstring("aaaaaa") ➞ "a"
//
//longestNonrepeatingSubstring("abcde") ➞ "abcde"
//
//longestNonrepeatingSubstring("abcda") ➞ "abcd"
//Notes
//If multiple substrings tie in length, return the one which occurs first.
//Bonus: Can you solve this problem in linear time?

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(longestNonrepeatingSubstring("abcabcbb"), "abc")
//Test.assertEquals(longestNonrepeatingSubstring("aaaaaa"), "a")
//Test.assertEquals(longestNonrepeatingSubstring("abcde"), "abcde")
//Test.assertEquals(longestNonrepeatingSubstring("abcda"), "abcd")
//Test.assertEquals(longestNonrepeatingSubstring("aaccddeeffb"), "ac")
//Test.assertEquals(longestNonrepeatingSubstring("abdde"), "abd")
//Test.assertEquals(longestNonrepeatingSubstring("ccdddcccc"), "cd")
//Test.assertEquals(longestNonrepeatingSubstring("cdxdxccxc"), "cdx")
//Test.assertEquals(longestNonrepeatingSubstring("abddefgh"), "defgh")
//Test.assertEquals(longestNonrepeatingSubstring("abcdabcd"), "abcd")
//Test.assertEquals(longestNonrepeatingSubstring("abddebcc"), "debc")
//Test.assertEquals(longestNonrepeatingSubstring("xyxxyzyzy"), "xyz")
//Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdeee"), "lmjsde")
//Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdfew"), "lmjsdfew")
//Test.assertEquals(longestNonrepeatingSubstring("kjlmjsdfewii"), "lmjsdfewi")
//Test.assertEquals(longestNonrepeatingSubstring("kjlmjjiiiidfewii"), "idfew")
//Test.assertEquals(longestNonrepeatingSubstring("kjlmjjiiiidfiwii"), "kjlm")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: One Small Favor

//tags: formatting,regex,strings

//url: https://edabit.com/challenge/efGS7Yu4kRqEcs4n7

//Description:
//My friend required some help with an assignment in school and I thought this would be a nice addition to be added as a challenge here as well.
//Create a function that takes a sentence and returns a modified sentence abided by these rules:
//If you encounter a date within the sentence, in the format DD/MM/YY or DD.MM.YY, you have to change it over to DD/MM/YYYY or DD.MM.YYYY (same separator char).
//If you encounter a date within the sentence, in the format MonthName, DD. YY. you have to change it over to MonthName, DD. YYYY.
//If you encounter an invalid MonthName then leave it as is.
//For this challenge there is an arbitrary rule that if YY is less than 25 the year-prefix will be 20, otherwise, the year-prefix will be 19.
//Meaning 08/11/20 -> 08/11/2020 or 02/11/95 -> 02/11/1995
//Examples
//smallFavor("I was born on 11/02/98")
//➞ "I was born on 11/02/1998"
//
//smallFavor("I was born on 11/02/98 and what about you?")
//➞ "I was born on 11/02/1998 and what about you?"
//
//smallFavor("I was born on 02.11.19")
//➞ "I was born on 02.11.2019"
//
//smallFavor("I was born on February, 02. 98.")
//➞ "I was born on February, 02. 1998."
//
//smallFavor("I was born on January, 01. 15. and today is October, 08. 20.")
//➞ "I was born on January, 01. 2015. and today is October, 08. 2020."
//
//smallFavor("I was born on Fakemonthy, 01. 15. dont change invalid dates")
//➞ "I was born on Fakemonthy, 01. 15. dont change invalid dates"
//Notes
//Don't forget to apply the arbitrary year-prefix rule defined above.
//DD/MM/YY -> DD/MM/YYYY
//DD.MM.YY -> DD.MM.YYYY
//Month, DD. YY. -> Month, DD. YYYY.
//DD|MM|YY -> DD|MM|YY (invalid separator, means it remains unchanged)

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(smallFavor("I was born on 11/02/98"),"I was born on 11/02/1998")
//Test.assertEquals(smallFavor("I was born on 11/02/98 and what about you?"),"I was born on 11/02/1998 and what about you?", "dont slice the string but instead parse it!")
//Test.assertEquals(smallFavor("I was born on 11.02.98"),"I was born on 11.02.1998")
//Test.assertEquals(smallFavor("I was born on 11|02|98"),"I was born on 11|02|98")
//Test.assertEquals(smallFavor("I was born on 02/11/19"),"I was born on 02/11/2019")
//Test.assertEquals(smallFavor("I was born on 02.11.19"),"I was born on 02.11.2019")
//Test.assertEquals(smallFavor("I was born on February, 02. 98."),"I was born on February, 02. 1998.")
//Test.assertEquals(smallFavor("I was born on January, 01. 15. and today is 08/10/20"),"I was born on January, 01. 2015. and today is 08/10/2020")
//Test.assertEquals(smallFavor("I was born on January, 01. 15. and today is October, 08. 20."),"I was born on January, 01. 2015. and today is October, 08. 2020.")
//Test.assertEquals(smallFavor("I was born on Fakemonthy, 01. 15. dont change invalid dates"),"I was born on Fakemonthy, 01. 15. dont change invalid dates")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Countdown Sequences

//tags: algorithms,arrays,loops

//url: https://edabit.com/challenge/HW4ZzYmDaASKfwdq6

//Description:
//A countdown sequence is a descending sequence of k integers from k down to 1 (e.g. 5, 4, 3, 2, 1). Write a function that returns an array of the form[x, y] where x is the number of countdown sequences in the given array and y is the array of those sequences in the order in which they appear in the array.
//Examples
//finalCountdown([4, 8, 3, 2, 1, 2]) ➞ [1, [[3, 2, 1]]]
//// 1 countdown sequence: 3, 2, 1
//
//finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]) ➞ [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
//// 2 countdown sequences:
//// 5, 4, 3, 2, 1 and 3, 2, 1
//
//finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]) ➞ [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
//// 3 countdown sequences:
//// 4, 3, 2, 1 ; 3, 2, 1 and 1
//
//finalCountdown([1, 1, 2, 1]) ➞ [3, [[1], [1], [2, 1]]]
//
//finalCountdown([]) ➞  [0, []]
//Notes
//A disjoint 1 is a valid countdown sequence. See examples #3 & #4.
//All numbers in the array will be greater than 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(finalCountdown([5,4,3,2,1]), [1, [[5, 4, 3, 2, 1]]])
//Test.assertSimilar(finalCountdown([2,5,4,3,2,1,2]), [1, [[5, 4, 3, 2, 1]]])
//Test.assertSimilar(finalCountdown([2,3,2,1,4,3,2,1]), [2, [[3, 2, 1], [4, 3, 2, 1]]])
//Test.assertSimilar(finalCountdown([4,3,2,5,4,3]), [0, []])
//Test.assertSimilar(finalCountdown([4,3,2,5,4,3,1]), [1, [[1]]])
//Test.assertSimilar(finalCountdown([3,2,1,5,5,3,2,1,5,5]), [2, [[3, 2, 1], [3, 2, 1]]])
//Test.assertSimilar(finalCountdown([4, 8, 3, 2, 1, 2]), [1, [[3, 2, 1]]])
//Test.assertSimilar(finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1]), [2, [[5, 4, 3, 2, 1], [3, 2, 1]]])
//Test.assertSimilar(finalCountdown([4, 3, 2, 1, 3, 2, 1, 1]), [3, [[4, 3, 2, 1], [3, 2, 1], [1]]])
//Test.assertSimilar(finalCountdown([1,2,1,1]), [3, [[1], [2, 1], [1]]])
//Test.assertSimilar(finalCountdown([1,2,3,4,3,2,1]), [2, [[1], [4, 3, 2, 1]]])
//Test.assertSimilar(finalCountdown([]), [0, []])
//Test.assertSimilar(finalCountdown([2,1,2,1]), [2, [[2, 1], [2, 1]]])

