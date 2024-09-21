

//title: Fix The Error: Array Reduce

//tags: arrays,bugs,strings

//url: https://edabit.com/challenge/pzv7pwMeXnF5aZMfQ

//Description:
//The instructor assigns Boron two tasks (regarding the use of reduce() method after lecturing in array methods).
//The first task is to create a function calculateSum() that takes a string and returns the sum of the ASCII values of all the characters in the string using reduce().
//The second task is to create a function reverseString() that reverses and returns an input string using reduce().
//While solving the problem, Boron has encountered errors. Help him fix the errors.
//Examples
//calculateSum("lime") ➞ 423
//// 108 + 105 + 109 + 101 = 423
//
//calculateSum("a") ➞ 97
//// a = 97
//
//reverseString("hello") ➞ "olleh"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(calculateSum("orange"), 636)
//Test.assertEquals(calculateSum("lime"), 423)
//Test.assertEquals(calculateSum("mushroom"), 890)
//Test.assertEquals(reverseString("Think"), "knihT")
//Test.assertEquals(reverseString("world"), "dlrow")
//Test.assertEquals(reverseString("people"), "elpoep")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Mini Sudoku

//tags: arrays,games,validation

//url: https://edabit.com/challenge/FGrQragjD9MCXo4Ei

//Description:
//A Sudoku is a 9x9 grid that is completed when every 3x3 square, row and column consists of the numbers 1-9.
//For this task, you will be given a completed 3x3 square, in the form of a two-dimensional array. Create a function that checks to make sure this 3x3 square contains each number from 1-9 exactly once. Make sure there are no duplicates, and no numbers outside this range.
//Examples
//isMiniSudoku([[1, 3, 2], [9, 7, 8], [4, 5, 6]]) ➞ true
//
//isMiniSudoku([[1, 1, 3], [6, 5, 4], [8, 7, 9]]) ➞ false
//// The 1 is repeated twice 
//
//isMiniSudoku([[0, 1, 2], [6, 4, 5], [9, 8, 7]]) ➞ false
//// The 0 is included (outside range)
//
//isMiniSudoku([[8, 9, 2], [5, 6, 1], [3, 7, 4]]) ➞ true 
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isMiniSudoku(
//[[1, 3, 2], 
//[9, 7, 8], 
//[4, 5, 6]]), true);
//Test.assertEquals(isMiniSudoku(
//[[1, 1, 3], 
//[6, 5, 4], 
//[8, 7, 9]]), false, '1 is included twice.');
//Test.assertEquals(isMiniSudoku(
//[[0, 1, 2], 
//[6, 4, 5], 
//[9, 8, 7]]), false, '0 is not in range 1-9.');
//Test.assertEquals(isMiniSudoku(
//[[8, 9, 2], 
//[5, 6, 1], 
//[3, 7, 4]]), true);
//Test.assertEquals(isMiniSudoku(
//[[2, 3, 4], 
//[6, 7, 7], 
//[8, 9, 1]]), false, '7 is included twice.');
//Test.assertEquals(isMiniSudoku(
//[[6, 5, 9], 
//[4, 3, 8], 
//[2, 1, 7]]), true);
//Test.assertEquals(isMiniSudoku(

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Number of Two or More Consecutive Ones

//tags: arrays,regex,strings

//url: https://edabit.com/challenge/XmozNpoBjcqrKD82i

//Description:
//Create a function that counts the number of blocks of two or more adjacent 1s in an array.
//Examples
//countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]) ➞ 2
//// Two instances: [1, 1] (middle) and [1, 1, 1] (end)
//
//countOnes([1, 0, 1, 0, 1, 0, 1, 0]) ➞ 0
//
//countOnes([1, 1, 1, 1, 0, 0, 0, 0]) ➞ 1
//
//countOnes([0, 0, 0]) ➞ 0
//Notes
//A single 1 by itself (surrounded by a zero on its left and right), does not count towards the total (see first example).
//Each input will contain only zeroes and ones.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countOnes([1, 1, 1, 1, 1]), 1)
//Test.assertEquals(countOnes([1, 1, 1, 1, 0]), 1)
//Test.assertEquals(countOnes([0, 0, 0, 0, 0]), 0)
//Test.assertEquals(countOnes([1, 0, 0, 0, 0]), 0)
//Test.assertEquals(countOnes([1, 0, 1, 0, 1]), 0)
//Test.assertEquals(countOnes([1, 0, 0, 0, 1, 0, 0, 1, 1]), 1)
//Test.assertEquals(countOnes([1, 1, 0, 1, 1, 0, 0, 1, 1]), 3)
//Test.assertEquals(countOnes([1, 0, 0, 1, 1, 0, 0, 1, 1]), 2)
//Test.assertEquals(countOnes([1, 0, 0, 1, 1, 0, 1, 1, 1]), 2)
//Test.assertEquals(countOnes([1, 0, 1, 0, 1, 0, 1, 0]), 0)
//Test.assertEquals(countOnes([1, 1, 1, 1, 0, 0, 0, 0]), 1)
//Test.assertEquals(countOnes([1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1]), 3)

