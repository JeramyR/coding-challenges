

//title: Array of Prime Factors

//tags: math,numbers

//url: https://edabit.com/challenge/kHaeYQkdSmcmr8eZM

//Description:
//Write a function that returns the extended form of the prime factorization of a number. Return in the format [a, b, c, d, ...], where each element of the array is an integer.
//Examples
//primeFactorization(216) ➞ [2, 2, 2, 3, 3, 3]
//
//primeFactorization(64) ➞ [2, 2, 2, 2, 2, 2]
//
//primeFactorization(23) ➞ [23]
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(primeFactorization(8), [2, 2, 2])
//Test.assertSimilar(primeFactorization(99), [3, 3, 11])
//Test.assertSimilar(primeFactorization(1), [])
//Test.assertSimilar(primeFactorization(57), [3, 19])
//Test.assertSimilar(primeFactorization(100), [2, 2, 5, 5])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mona`s Sort

//tags: loops,scope,sorting

//url: https://edabit.com/challenge/6ALbTxgu8BZaa6YYN

//Description:
//Mona has created a method to sort an array in ascending order.
//Starting from the left of the array, she compares numbers by pairs. If the first pair is ordered [smaller number, larger number], she moves on. If the first pair is ordered [larger number, smaller number], she swaps the two integers before moving on to the next pair. She repeats this process until she reaches the end of the array.
//Then, she moves back to the beginning of the array and repeats this process until the entire array is sorted.
//If the unsorted array is: [3, 9, 7, 4], she will perform the following steps (note Swaps here refers to cumulative swaps):
//She starts with the first pair.
//[3, 9] is in order, move on. Array: [3, 9, 7, 4]. Swaps: 0.
//[9, 7] is not. Swap. Array: [3, 7, 9, 4]. Swaps: 1
//[9, 4] is not. Swap. Array: [3, 7, 4, 9]. Swaps: 2
//Check if array is sorted. It is not, so start over at first pair.
//[3, 7] is in order, move on. Array: [3, 7, 4, 9]. Swaps: 2
//[7, 4] is not. Swap. Array: [3, 4, 7, 9]. Swaps: 3.
//[7, 9] is in order, move on. Array: [3, 4, 7, 9]. Swaps: 3.
//Check if array is sorted. It is. End.
//Sorting the array [3, 9, 7, 4] takes her 3 swaps. Write a function that takes in an unsorted array and returns the number of swaps it takes for the array to be sorted according to Mona's algorithm.
//Examples
//numberOfSwaps([5, 4, 3]) ➞ 3
//
//numberOfSwaps([1, 3, 4, 5]) ➞ 0
//
//numberOfSwaps([5, 4, 3, 2]) ➞ 6
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(numberOfSwaps([3, 9, 7, 4]), 3)
//Test.assertEquals(numberOfSwaps([5, 4, 3]), 3)
//Test.assertEquals(numberOfSwaps([5, 4, 3, 2]), 6)
//Test.assertEquals(numberOfSwaps([1, 2, 4, 3]), 1)
//Test.assertEquals(numberOfSwaps([1, 2, 5, 4, 3]), 3)
//Test.assertEquals(numberOfSwaps([1, 3, 4, 5]), 0)
//Test.assertEquals(numberOfSwaps([1, 2]), 0)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Re-Map a Number from One Range to Another

//tags: algorithms,math,numbers

//url: https://edabit.com/challenge/roCH4n2xnBjLoXfjv

//Description:
//Create a function similar to Processing's "map" function (check the Resources tab), in which a value and its range is taken and remapped to a new range.
//The function takes 5 numbers:
//Value: value
//Range: low1 and high1
//Range: low2 and high2
//Examples
//remap(7, 2, 12, 0, 100) ➞ 50
//
//remap(17, 5, 55, 100, 30) ➞ 83.2
//
//remap(50, 1, 51, 0, 100) ➞ 98
//Notes
//Test input will always be numbers.
//If the input range is 0, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(remap(7, 2, 12, 0, 100), 50)
//Test.assertEquals(remap(17, 5, 55, 100, 30), 83.2)
//Test.assertEquals(remap(2.5, 2, 3, -80, 80), 0)
//Test.assertEquals(remap(50, 1, 51, 0, 100), 98)
//Test.assertEquals(remap(0, 0, 0, 0, 0), 0, 'The input range is 0.')
//Test.assertEquals(remap(20, 10, 50, 50, 10), 40)
//Test.assertEquals(remap(0, 5, -20, 60, 1000), 248)
//Test.assertEquals(remap(17, 17, 17, 519, 1085), 0, 'The input range is 0.')

