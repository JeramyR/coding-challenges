

//title: The Antipodes Average

//tags: algorithms,arrays,math

//url: https://edabit.com/challenge/NJ5GkgQbshyDDX3bq

//Description:
//In this challenge, you are given an array and in turn, you must obtain a smaller array, following three steps:
//Split the array into two parts of equal length. If the given array has an odd length, then you have to eliminate the number in the middle of the array for obtaining two equal parts.
//Sum each number of the first part with each number of the reversed second part, obtaining a new single array having the same length of the previous two.
//Divide by two each number in the final array.
//Given an array of integers arr, implement a function that returns a new array applying the above algorithm.
//Examples
//antipodesAverage([1, 2, 3, 4]) ➞ [2.5, 2.5]
//// Left part = [1, 2]
//// Reversed right part = [4, 3]
//// Array resulting from the sum of each pair = [5, 5]
//// Each number is divided by two = [2.5, 2.5]
//
//antipodesAverage([1, 2, 3, 4, 5]) ➞ [3, 3]
//// The length of array is odd, number 3 (in the middle) is eliminated
//// Left = [1, 2]
//// Reversed right = [5, 4]
//// Sum = [6, 6]
//// Division by two = [3, 3]
//
//antipodesAverage([-1, -2]) ➞ [-1.5]
////  (-1 + -2) / 2 = [-1.5]
//Notes
//Every given arr will contain at least two numbers.
//Into the given arr, numbers will always be whole (either positives or negatives), but the numbers into the returned final array can also be a float (either positives or negatives, see the examples #1 and #3).
//You can do three separated steps, or thinking about how the algorithm can be synthesized for obtaining the result.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(antipodesAverage([1, 2, 3, 4]), [2.5, 2.5], "Example #1")
//Test.assertSimilar(antipodesAverage([1, 2, 3, 4, 5]), [3, 3], "Example #2")
//Test.assertSimilar(antipodesAverage([-1, -2]), [-1.5], "Example #3")
//Test.assertSimilar(antipodesAverage([1, 2, 5, 10]), [5.5, 3.5])
//Test.assertSimilar(antipodesAverage([1, 2, 3, 5, 7, 9]), [5, 4.5, 4])
//Test.assertSimilar(antipodesAverage([-1, -4, -12, -2, -11, -6]), [-3.5, -7.5, -7])
//Test.assertSimilar(antipodesAverage([5, -80, 66, -8, -6]), [-0.5, -44])
//Test.assertSimilar(antipodesAverage([-1, 0, 1]), [0])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Pronouncing the Xs

//tags: conditions,formatting,regex,strings

//url: https://edabit.com/challenge/mH6Ny8eH6AStdzzyS

//Description:
//Create a function which replaces all the x's in the string in the following ways:
//Replace all x's with "cks" UNLESS:
//The word begins with "x", therefore replace it with "z".
//The word is just the letter "x", therefore replace it with "ecks".
//Examples
//xPronounce("Inside the box was a xylophone") ➞ "Inside the bocks was a zylophone"
//
//xPronounce("The x ray is excellent") ➞ "The ecks ray is eckscellent"
//
//xPronounce("OMG x box unboxing video x D") ➞ "OMG ecks bocks unbocksing video ecks D"
//Notes
//All x's are lowercase.
//I know that not all words with x's follow this rule, but there are too many edge cases to count!

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(xPronounce("Inside the box was a xylophone"), "Inside the bocks was a zylophone")
//Test.assertEquals(xPronounce("The x ray is excellent"), "The ecks ray is eckscellent")
//Test.assertEquals(xPronounce("OMG x box unboxing video x D"), "OMG ecks bocks unbocksing video ecks D")
//Test.assertEquals(xPronounce("I gotta make bux but the clox are ticking!"), "I gotta make bucks but the clocks are ticking!")
//Test.assertEquals(xPronounce("this test does not have an x in it"), "this test does not have an ecks in it")
//Test.assertEquals(xPronounce("Max bax pax"), "Macks backs packs")
//Test.assertEquals(xPronounce("Anti vax"), "Anti vacks")
//Test.assertEquals(xPronounce("Who is xavier and why does he have my car"), "Who is zavier and why does he have my car")
//Test.assertEquals(xPronounce("OMG xylem unboxing video x D"), "OMG zylem unbocksing video ecks D")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Lone Ones

//tags: algorithms,loops,numbers,regex

//url: https://edabit.com/challenge/BuAfYbHeMPJZpSesR

//Description:
//Create a function which counts how many lone 1s appear in a given number. Lone means the number doesn't appear twice or more in a row.
//Examples
//countLoneOnes(101) ➞ 2
//
//countLoneOnes(1191) ➞ 1
//
//countLoneOnes(1111) ➞ 0
//
//countLoneOnes(462) ➞ 0
//Notes
//Tests will include positive whole numbers only.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countLoneOnes(101), 2)
//Test.assertEquals(countLoneOnes(1191), 1)
//Test.assertEquals(countLoneOnes(1111), 0)
//Test.assertEquals(countLoneOnes(11101), 1)
//Test.assertEquals(countLoneOnes(462), 0)
//Test.assertEquals(countLoneOnes(12131415161718191n), 9)
//Test.assertEquals(countLoneOnes(11231212111), 2)
//Test.assertEquals(countLoneOnes(1), 1)
//Test.assertEquals(countLoneOnes(0), 0)

