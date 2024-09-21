

//title: Who`s in First Place?

//tags: language_fundamentals,loops,strings

//url: https://edabit.com/challenge/94rJjLxQbRhoypdCa

//Description:
//Create a function that takes a string road and returns the car that's in first place. The road will be made of "=", and cars will be represented by letters in the alphabet.
//Examples
//firstPlace("====b===O===e===U=A==") ➞ "A"
//
//firstPlace("e==B=Fe") ➞ "e"
//
//firstPlace("proeNeoOJGnfl") ➞ "l"
//Notes
//Return "No car available" if there is no car on the road and "No road available" if there is no road.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(firstPlace("====b===O===e===U=A=="), "A")
//Test.assertEquals(firstPlace("e==B=Fe"), "e")
//Test.assertEquals(firstPlace("proeNeoOJGnfl"), "l")
//Test.assertEquals(firstPlace("F============="), "F")
//Test.assertEquals(firstPlace("C===A===R"), "R")
//Test.assertEquals(firstPlace("p"), "p")
//Test.assertEquals(firstPlace("=========================="), "No car available")
//Test.assertEquals(firstPlace(""), "No road available")
//​
//// Author: Cool_Kidd

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Transform Upvotes

//tags: arrays,higher_order_functions,strings

//url: https://edabit.com/challenge/niTEsddTdE4gs4YGX

//Description:
//Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.
//Examples
//transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]
//
//transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]
//
//transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
//Notes
//Return the upvotes as an array.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(transformUpvotes('20.3k 3.8k 7.7k 992'), [20300, 3800, 7700, 992])
//Test.assertSimilar(transformUpvotes('5.5k 8.9k 32'), [5500, 8900, 32])
//Test.assertSimilar(transformUpvotes('6.8k 13.5k'), [6800, 13500])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Get the Century

//tags: control_flow,numbers,strings

//url: https://edabit.com/challenge/SAdqaWKRpjLfZnGKA

//Description:
//Create a function that takes in a year and returns the correct century.
//Examples
//century(1756) ➞ "18th century"
//
//century(1555) ➞ "16th century"
//
//century(1000) ➞ "10th century"
//
//century(1001) ➞ "11th century"
//
//century(2005) ➞ "21st century"
//Notes
//All years will be between 1000 and 2010.
//The 11th century is between 1001 and 1100.
//The 18th century is between 1701-1800.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(century(1756), "18th century")
//Test.assertEquals(century(1555), "16th century")
//Test.assertEquals(century(1000), "10th century")
//Test.assertEquals(century(1001), "11th century")
//Test.assertEquals(century(2005), "21st century")
//Test.assertEquals(century(1789), "18th century")
//Test.assertEquals(century(1510), "16th century")
//Test.assertEquals(century(1615), "17th century")
//Test.assertEquals(century(2000), "20th century")
//Test.assertEquals(century(1997), "20th century")

