

//title: Clone an Array

//tags: arrays,bugs

//url: https://edabit.com/challenge/RiyXDZNZAD4fj9xfJ

//Description:
//The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
//Examples
//clone([1, 1]) ➞ [1, 1, [1, 1]]
//
//clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
//
//clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(clone([1, 2, 3]), [1, 2, 3, [1, 2, 3]], "Example #1")
//Test.assertSimilar(clone(["x", "y"]), ["x", "y", ["x", "y"]], "Example #2")
//Test.assertSimilar(clone([1, 1]), [1, 1, [1, 1]])
//Test.assertSimilar(clone(["a", "b", "c"]), ["a", "b", "c", ["a", "b", "c"]])
//Test.assertSimilar(clone([]),[[]])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 25-Mile Marathon

//tags: algebra,arrays,math,validation

//url: https://edabit.com/challenge/DvwY43tNMdEpW4kKu

//Description:
//Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
//Return true if the marathon is 25 miles long, otherwise, return false.
//Examples
//marathonDistance([1, 2, 3, 4]) ➞ false
//
//marathonDistance([1, 9, 5, 8, 2]) ➞ true
//
//marathonDistance([-6, 15, 4]) ➞ true
//Notes
//Items in the array will always be integers.
//Items in the array may be negative or positive, but since negative distance isn't possible, find a way to convert negative integers into positive integers.
//Return false if the arguments are empty or not provided.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(marathonDistance([1, 2, 3, 4]), false)
//Test.assertEquals(marathonDistance([-6, 15, 4]), true)
//Test.assertEquals(marathonDistance([1, 9, 5, 8, 2]), true)
//Test.assertEquals(marathonDistance([9, 7, 6, 5]), false)
//Test.assertEquals(marathonDistance([4, 6, 8, 9, -4]), false)
//Test.assertEquals(marathonDistance([-20, 9, -10, -11]), false)
//Test.assertEquals(marathonDistance([-9, 15, 1]), true)
//Test.assertEquals(marathonDistance([]), false)
//Test.assertEquals(marathonDistance([]), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Reverse Words in a String

//tags: interview,loops,sorting,strings

//url: https://edabit.com/challenge/mQunDaXMdXcC9r9xH

//Description:
//Given an input string, reverse the string word by word, the first word will be the last, and so on.
//Examples
//reverseWords(" the sky is blue") ➞ "blue is sky the"
//
//reverseWords("hello   world!  ") ➞ "world! hello"
//
//reverseWords("a good example") ➞ "example good a"
//Notes
//A word is defined as a sequence of non-space characters.
//The input string may contain leading or trailing spaces. However, your reversed string should not contain leading or trailing spaces.
//You need to reduce multiple spaces between two words to a single space in the reversed string.
//Try to solve this in linear time.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(reverseWords("hello world!"), "world! hello")
//Test.assertEquals(reverseWords("blue is sky the"), "the sky is blue")
//Test.assertEquals(reverseWords("a good example"), "example good a")
//Test.assertEquals(reverseWords("fraud! of example another is this"), "this is another example of fraud!")
//Test.assertEquals(reverseWords("man! the are You"), "You are the man!")

