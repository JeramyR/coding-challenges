

//title: No Intersecting Ones

//tags: arrays,higher_order_functions,validation

//url: https://edabit.com/challenge/dPAND8kBRGqqbExiR

//Description:
//A no-intersecting ones matrix is one where no two ones exist on the same row or column.
//To illustrate:
//[
//  [1, 0, 0, 0, 0],
//  [0, 1, 0, 0, 0],
//  [0, 0, 0, 1, 0],
//  [0, 0, 0, 0, 0],
//  [0, 0, 1, 0, 0]
//]
//The array below is not a non-intersecting ones matrix:
//[
//  [1, 0, 0, 0, 0],
//  [0, 1, 0, 0, 0],
//  [0, 0, 0, 1, 0],
//  [0, 1, 0, 0, 0],
//  [0, 0, 0, 0, 0]
//]
//
//// Column 2 has two 1s.
//Write a function that returns true if a 2D matrix is a no-intersecting ones matrix and false otherwise.
//Examples
//noIntersectingOnes([
//  [0, 1],
//  [1, 0]
//]) ➞ true
//
//noIntersectingOnes([
//  [1, 1],
//  [0, 0]
//]) ➞ false
//
//noIntersectingOnes([
//  [0, 0, 0, 1],
//  [1, 0, 0, 0],
//  [0, 1, 0, 0]
//]) ➞ true
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(noIntersectingOnes([
//[0, 1], 
//[1, 0]
//]), true)
//​
//Test.assertEquals(noIntersectingOnes([
//[1, 1], 
//[0, 0]
//]), false)
//​
//Test.assertEquals(noIntersectingOnes([
//[0, 0, 0, 1], 
//[1, 0, 0, 0], 
//[0, 1, 0, 0]
//]), true)
//​
//Test.assertEquals(noIntersectingOnes([
//[0, 0, 0, 1], 
//[1, 0, 0, 0], 
//[0, 0, 0, 1]
//]), false)
//​
//Test.assertEquals(noIntersectingOnes([
//[0, 0, 1, 1], 
//[0, 0, 0, 0], 

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Wrong Number

//tags: algorithms,loops,math,numbers

//url: https://edabit.com/challenge/vshi8S62X7ASdEB2c

//Description:
//Mubashir needs your help to find out a wrong number in a 2D array.
//Imagine a 2D array of numbers given below:
//var arr = [
//  [1, 2, 3, 6 ],
//  [4, 5, 6, 15],
//  [7, 8, 9, 24],
//  [12,15,18,45]
//]
//You can notice that:
//The end number of each row is the sum of each row's previous numbers.
//The end number of each column is the sum of each column's previous numbers.
//See below examples for a better understanding:
//arr1 = [
//  [2, 2, 3, 6 ],
//  [4, 5, 6, 15],
//  [7, 8, 9, 24],
//  [12,15,18,45]
//]
//
//// 2 is incorrect in the first row and first column.
//// Replace it with 1.
//
//arr2 = [
//  [1, 2, 3, 7 ],
//  [4, 5, 6, 15],
//  [7, 8, 9, 24],
//  [12,15,18,45]
//]
//
//// 7 is incorrect in the first row and fourth column.
//// Replace it with 6.
//
//arr3 = [
//  [1, 2, 3, 6 ],
//  [4, 5, 6, 15],
//  [7, 8, 9, 24],
//  [12,15,18,46]
//]
//
//// 46 is incorrect in the fourth row and fourth column.
//// Replace it with 45.
//Examples
//wrongNumber(arr1) ➞ 1
//
//wrongNumber(arr2) ➞ 6
//
//wrongNumber(arr3) ➞ 45
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//var arr=[
//    [2, 2, 3, 6 ],
//    [4, 5, 6, 15],
//    [7, 8, 9, 24],
//    [12,15,18,45]
//    ]
//    Test.assertSimilar(wrongNumber(arr), 1)
//    
//    arr=[
//    [1, 2, 3, 7 ],
//    [4, 5, 6, 15],
//    [7, 8, 9, 24],
//    [12,15,18,45]
//    ]    
//    Test.assertSimilar(wrongNumber(arr), 6)
//    
//    arr=[
//    [1, 2, 3, 6 ],
//    [4, 5, 6, 15],
//    [7, 8, 9, 24],
//    [12,15,18,46]
//    ]
//    Test.assertSimilar(wrongNumber(arr), 45)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Create a Stair

//tags: formatting,strings

//url: https://edabit.com/challenge/T7JtSyrTWoDkndGLm

//Description:
//Write a function which takes an integer steps and returns a string representing an upward stair with steps representing the number of the steps in the stair. Each step will be represented by combinations of underscore(s), newline(s), and vertical line(s).
//So, if you print the result for a stair with three steps, it will look something like this:
//      _
//    _|
//  _|
//_|
//It's a crude and rickety stair, but challenging yourself in your favorite programming language is worth it.
//Examples
//stair(1)  ➞ "  _\n_|"
//// 2 spaces, 1 underscore, 1 newline, 1 underscore, 1 vertical line
//
//stair(2)  ➞ "    _\n  _|\n_|"
//// 4 spaces, 1 undescore, 1 newline, 2 spaces, 1 underscore,
//// 1 vertical line, 1 newline, 1 underscore, 1 vertical line
//
//stair(3) ➞ "      _\n    _|\n  _|\n_|"
//// 6 spaces, 1 undescore, 1 newline, 4 spaces, 1 underscore,
//// 1 vertical line, 1 newline, 2 spaces, ...
//
//stair(4) ➞ "        _\n      _|\n    _|\n  _|\n_|"
//// 8 spaces, 1 undescore, 1 newline, 6 spaces, 1 underscore,
//// 1 vertical line,  ...
//Notes
//Since the stair is upward, the beginning of the code is the top of the stair.
//All numbers are positive.
//For zero, return ___ (three underscores).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(stair(0), '___', "Zero must return 3 underscores")
//Test.assertEquals(stair(1), '  _\n_|')
//Test.assertEquals(stair(2), '    _\n  _|\n_|')
//Test.assertEquals(stair(3), '      _\n    _|\n  _|\n_|')
//Test.assertEquals(stair(5), '          _\n        _|\n      _|\n    _|\n  _|\n_|')
//Test.assertEquals(stair(10), '                    _\n                  _|\n                _|\n              _|\n            _|\n          _|\n        _|\n      _|\n    _|\n  _|\n_|')
//Test.assertEquals(stair(50), '                                                                                                    _\n                                                                                                  _|\n                                                                                                _|\n                                                                                              _|\n                                                                                            _|\n                                                                                          _|\n                                                                                        _|\n                                                                                      _|\n                                                                                    _|\n                                                                                  _|\n                                                                                _|\n                                                                              _|\n                                                                            _|\n                                                                          _|\n                                                                        _|\n                                                                      _|\n                                                                    _|\n                                                                  _|\n                                                                _|\n                                                              _|\n                                                            _|\n                                                          _|\n                                                        _|\n                                                      _|\n                                                    _|\n                                                  _|\n                                                _|\n                                              _|\n                                            _|\n                                          _|\n                                        _|\n                                      _|\n                                    _|\n                                  _|\n                                _|\n                              _|\n                            _|\n                          _|\n                        _|\n                      _|\n                    _|\n                  _|\n                _|\n              _|\n            _|\n          _|\n        _|\n      _|\n    _|\n  _|\n_|')

