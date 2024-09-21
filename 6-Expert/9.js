

//title: Is It a Leap Year?

//tags: algorithms,math,numbers,validation

//url: https://edabit.com/challenge/nNtYHuSDgnCq8gFvh

//Description:
//In a calendar year, it is exactly 365.25 days. But, eventually, this will lead to confusion because humans normally count by exact divisibility of 1 and not with decimal points. So, to avoid the latter, it was decided to add up all 0.25 days every four-year cycle and give that year 366 days (including February 29 as an intercalary day) and call it a leap year. The other three years in the four-year cycle would only contain 365 days and wouldn't be leap years.
//In this challenge, though quite repetitive, we'll take it to a new level, where you are to determine if it's a leap year or not without the use of the Date() class, switch statements, if blocks, if-else blocks or ternary operation (x ? a : b) nor the logical operators AND (&&) and OR (||) with the exemption of the NOT (!) operator.
//Return true if it's a leap year, false otherwise.
//Examples
//leapYear(2000) ➞ true
//
//leapYear(1521) ➞ false
//
//leapYear(1996) ➞ true
//
//leapYear(1800) ➞ false
//
//leapYear(2016) ➞ true
//Notes
//You can't use the Date class, switch statements, if statements in general, the ternary operator, or the logical operators (&&, ||).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const noConditionals = fn => !RegExp(/if|else|switch|\?|&&|\|\||Date/, 'gm').test(fn)
//Test.assertNotEquals(noConditionals(leapYear), false,
//       "The use of class 'Date', 'switch', 'if', 'if-else', '&&', '||' or '?' is not allowed!")
//​
//let [yrVector, resVector] = [[
//  2016, 1996, 1600, 2020, 2000, 2008, 1521, 1800, 2007, 2002, 1979, 2006], [
//  true, true, true, true, true, true, false, false, false, false, false, false
//]]
//for (let i in yrVector) Test.assertEquals(leapYear(yrVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Right Rotation

//tags: algorithms,arrays,data_structures

//url: https://edabit.com/challenge/teiwZ6f27KebAdeQe

//Description:
//Create a function which takes 2 parameters:
//A matrix mat with m rows and n columns, containing data of any type.
//An integer parameter turns giving the number of clockwise 90 degree rotations by which to transform the matrix.
//The function should return a new matrix with the elements rotated clockwise or counter-clockwise by the number of turns given.
//For positive integers: 1 turn = 90° clockwise, 2 turns = 180° clockwise, 3 turns = 270° clockwise, 4 turns = 360° clockwise, etc.
//For negative integers: -1 turn = 90° counter-clockwise, -2 turns = 180° counter-clockwise, -3 turns = 270° counter-clockwise, -4 turns = 360° counter-clockwise, etc.
//Examples
//rotateMatrix([
//  [1,  2,  3,  4],
//  [5,  6,  7,  8],
//  [9, 10, 11, 12]
//]) ➞ [
//  [ 9, 5, 1],
//  [10, 6, 2],
//  [11, 7, 3],
//  [12, 8, 4]
//]
//# A clockwise rotation.
//# Left to right columns become rows in bottom to top order.
//
//
//rotateMatrix([["+", "-"], ["*", "/"]], -1) ➞ [["-", "/"], ["+", "*"]]
//# A counter-clockwise rotation.
//# Right to left columns become rows in top to bottom order.
//
//
//rotateMatrix([[1, 2, 3], [4, 5, 6]], 4) ➞ [[1, 2, 3], [4, 5, 6]]
//# A 360° turn returns all elements to their original positions.
//Notes
//All given matrices (2-dimensional arrays) will have at least 1 row and at least 1 column.
//Do not mutate the original matrix, the return value should be a new 2-dimensional array with values copied from the original array.
//Do not import any libraries - the challenge is to come up with your own solution.
//Make sure your solution is efficient enough to cope with a large number of turns

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//// Original copied from persolut (Python)
//​
//mat1 = [[1,2,3], [4, 5, 6]]
//mat2 = [[1,2,3,4,5,6,7,8,9]]
//​
//Test.assertSimilar(rotateMatrix(mat1, 1), [[4,1], [5,2], [6,3]])
//Test.assertSimilar(rotateMatrix(mat1, -1), [[3,6], [2,5], [1,4]])
//Test.assertSimilar(rotateMatrix(mat1, 2), [[6,5,4], [3,2,1]])
//Test.assertSimilar(rotateMatrix(mat1, 4), [[1,2,3], [4, 5, 6]])
//Test.assertSimilar(rotateMatrix(mat2, 1), [[1],[2],[3],[4],[5],[6],[7],[8],[9]])
//Test.assertSimilar(rotateMatrix(mat2, 2), [[9,8,7,6,5,4,3,2,1]])
//Test.assertSimilar(rotateMatrix(mat2, 3), [[9],[8],[7],[6],[5],[4],[3],[2],[1]])
//Test.assertSimilar(rotateMatrix([['+','-'], ['*','/']], -1), [['-','/'], ['+','*']])
//Test.assertSimilar(rotateMatrix([
//    ['#', '#', '#', '|', '*', '*', '*'], 
//    ['#', '#', '#', '|', '*', '*', '*'], 
//    ['#', '#', '#', '|', '*', '*', '*'], 
//    ['-', '-', '-', '|', '-', '-', '-'], 
//    ['$', '$', '$', '|', '&', '&', '&'], 
//    ['$', '$', '$', '|', '&', '&', '&'], 
//    ['$', '$', '$', '|', '&', '&', '&']
//], -5),[
//    ['*', '*', '*', '-', '&', '&', '&'], 
//    ['*', '*', '*', '-', '&', '&', '&'], 
//    ['*', '*', '*', '-', '&', '&', '&'], 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Reversed List Index

//tags: arrays,recursion,strings

//url: https://edabit.com/challenge/A9EhAF2RCt7ubxRsK

//Description:
//Write a recursive function that filters the items in an array (given as parameter arr) by positional parity (odd or even), given as parameter par, starting from the opposite end. Return an array of items on odd positions (... 5, 3, 1) or on even positions (... 6, 4, 2) and counting from the last item in the array.
//Examples
//getItemsAt([2, 4, 6, 8, 10], "odd") ➞ [2, 6, 10]
//// 2, 6 & 10 occupy the 5th, 3rd and 1st positions from right.
//// Odd positions, hence the parity, and from the opposite.
//
//getItemsAt(["E", "D", "A", "B", "I", "T"], "even") ➞ ["E", "A", "I"]
//// E, A and I occupy the 6th, 4th and 2nd positions from right.
//// Even positions, hence the parity, and from the opposite.
//
//getItemsAt([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "even") ➞ [")", "*", ^", "$", "@"]
//
//getItemsAt(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even") ➞ ["R", "I", "R", "R", "L"]
//Notes
//IMPORTANT: You are advised to solve this challenge via a recursive approach, hence, the very purpose of this challenge. You can check the Resources tab about a few topics on recursion.
//Arrays are zero-indexed, so, index+1 = position or position-1 = index.
//Items in the array may contain duplicates. See example #4.
//The last item in the array is always the first item to start a positional count.
//The sequence of the items in the resulting array should be retained (i.e. example #1 - 6 should come after 2 and before 10, example #2 - "A" should come after "E" and before "I").
//An iterative version of this challenge can be found via this link.
//A collection of recursive challenges in JS can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(getItemsAt), false, "Recursion is required!")
//​
//let [expVector, actVector, anxVector] = [
//  [
//    ["E", "A", "I"],
//    ["D", "B", "T"],
//    ["Q", "E", "T", "U", "O"],
//    ["O", "U", "T", "E", "Q"],
//    ["S", "F", "H", "K", "Z"],
//    ["A", "D", "G", "J", "L"],
//    [4, 8],
//    [2, 4, 6, 8, 10],
//    ["@", "$", "^", "*", ")", "]"],
//    ["[", "(", "&", "%", "#", "!"],
//    ["O", "B", "T", "Y"],
//    ["R", "I", "R", "R", "L"]
//  ],[
//    ["E", "D", "A", "B", "I", "T"],
//    ["E", "D", "A", "B", "I", "T"],
//    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
//    ["P", "O", "I", "U", "Y", "T", "R", "E", "W", "Q"],
//    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z"],
//    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Z"],
//    [2, 4, 6, 8, 10],

