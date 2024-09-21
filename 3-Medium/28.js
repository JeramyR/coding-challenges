

//title: Find the Mean of All Digits

//tags: algorithms,logic,loops,math

//url: https://edabit.com/challenge/JAgtuPDXj6BrDMxa5

//Description:
//Create a function that returns the mean of all digits.
//Examples
//mean(42) ➞ 3
//
//mean(12345) ➞ 3
//
//mean(666) ➞ 6
//Notes
//The mean of all digits is the sum of digits / how many digits there are (e.g. mean of digits in 512 is (5+1+2)/3(number of digits) = 8/3=2).
//The mean will always be an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(mean(666), 6)
//Test.assertEquals(mean(80), 4)
//Test.assertEquals(mean(789), 8)
//Test.assertEquals(mean(417), 4)
//Test.assertEquals(mean(1357), 4)
//Test.assertEquals(mean(42), 3)
//Test.assertEquals(mean(12345), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Find the Missing Number

//tags: algorithms,interview,math,numbers,sorting

//url: https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9

//Description:
//Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.
//Examples
//missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
//
//missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
//
//missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
//Notes
//The array of numbers will be unsorted (not in order).
//Only one number will be missing.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]), 5)
//Test.assertEquals(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]), 10)
//Test.assertEquals(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]), 1)
//Test.assertEquals(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]), 7)
//Test.assertEquals(missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]), 3)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Something in the Box?

//tags: formatting,loops,sorting,validation

//url: https://edabit.com/challenge/CKEAH6cs5Tt7aKXKv

//Description:
//Create a function that returns true if an asterisk * is inside a box.
//Examples
//inBox([
//  "###",
//  "#*#",
//  "###"
//]) ➞ true
//
//inBox([
//  "####",
//  "#* #",
//  "#  #",
//  "####"
//]) ➞ true
//
//inBox([
//  "*####",
//  "# #",
//  "#  #*",
//  "####"
//]) ➞ false
//
//inBox([
//  "#####",
//  "#   #",
//  "#   #",
//  "#   #",
//  "#####"
//]) ➞ false
//Notes
//The asterisk may be in the array, however, it must be inside the box, if it exists.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(inBox([
//    "###", 
//    "# #", 
//    "###"
//  ]), false)
//​
//Test.assertEquals(inBox([
//    "####", 
//    "#  #", 
//    "#  #", 
//    "####"
//  ]), false)
//​
//Test.assertEquals(inBox([
//    "#####", 
//    "#   #", 
//    "#   #", 
//    "#   #", 
//    "#####"
//  ]), false)
//​
//Test.assertEquals(inBox([
//    "###", 
//    "#*#", 
//    "###"

