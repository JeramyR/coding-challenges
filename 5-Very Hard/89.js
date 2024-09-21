

//title: Broken Bridge II

//tags: loops,strings

//url: https://edabit.com/challenge/gH9RyFhkzSBTaA7PD

//Description:
//Create a function that returns the count of all bridges in a two-dimensional grid.
//Bridge B should be counted if:
//It connects from one end of the grid to the one opposite to it.
//It is unobstructed.
//Example
//"#########/#       #/#   #   #/#   #   #/#### ####/#   #   #/#   #   #/#       #/#########"
//In this case the number 4 is returned because, when unraveled, the string reveals four bridges that meet the requirements listed above as shown:
//#########/
//#       #/
//#   #   #/
//#   #   #/
//#### ####/
//#   #   #/
//#   #   #/
//#       #/
//#########
//Notes
//Slashes / act as separators.
//Intersecting bridges can still count, as shown.
//Vertical bridges count as long as the requirements are met.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(bridges("   ###   /    #    /    #    /#   #   #/#########/#   #   #/    #    /    #    /   ###   "), 2)
//Test.assertEquals(bridges("         /         /         /#########/#   #   #/#########/         /         /         "), 2)
//Test.assertEquals(bridges("#########/#       #/#   #   #/#   #   #/#### ####/#   #   #/#   #   #/#       #/#########"), 4)
//Test.assertEquals(bridges("# # # # #/ # # # # /# # # # #/ # # # # /# # # # #/ # # # # /# # # # #/ # # # # /# # # # #"), 0)
//Test.assertEquals(bridges("    #    /#########/#########/#########/#########/#########/#########/#########/ ####### "), 8)
//Test.assertEquals(bridges("#########/    #   #/ ########/    #   #/#########/#   #    /######## /#   #    /#########"), 4)
//Test.assertEquals(bridges("#########/#########/#########/#########/#########/#########/#########/#########/#########"), 18)
//Test.assertEquals(bridges("# # # # #/# # # # #/# # # # #/# # # # #/#########/# # # # #/# # # # #/# # # # #/# # # # #"), 6)
//Test.assertEquals(bridges("### #####/# # #   #/# # # ###/#   #    /#########/    #   #/### # # #/#   # # #/##### ###"), 2)
//Test.assertEquals(bridges("##     ##/##     ##/##     ##/##     ##/#########/##     ##/##     ##/##     ##/##     ##"), 5)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recursion: Harshad Number

//tags: math,numbers,recursion,strings,validation

//url: https://edabit.com/challenge/meN5CH6RztnwXCXBz

//Description:
//A number is said to be Harshad if it's exactly divisible by the sum of its digits. Create a function that determines whether a number is a Harshad or not.
//Examples
//isHarshad(75) ➞ false
//// 7 + 5 = 12
//// 75 is not exactly divisible by 12
// 
//isHarshad(171) ➞ true
//// 1 + 7 + 1 = 9
//// 9 exactly divides 171
// 
//isHarshad(481) ➞ true
//
//isHarshad(89) ➞ false
//
//isHarshad(516) ➞ true
//
//isHarshad(200) ➞ true
//Notes
//You are expected to solve this challenge via recursion.
//You can check on the Resources tab for more details about recursion.
//An iterative version of this challenge can be found via this link.
//A collection of challenges in recursion can be found via this link.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const recursive = f => (`${f}`.match(RegExp(`${f.name}`,'gm'))||[]).length > +(/function/.test(f))
//Test.assertNotEquals(recursive(isHarshad), false, "Recursion is required!")
//​
//let [numVector, resVector] = [
//  [75, 171, 481, 89, 516, 200, 209, 12345, 53, 27],
//  [false, true, true, false, true, true, true, true, false, true]
//]
//for (let i in numVector) Test.assertEquals(isHarshad(numVector[i]), resVector[i])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Triangle Challenge

//tags: loops,math,trigonometry

//url: https://edabit.com/challenge/yqLPPFkhgdDGuReQ9

//Description:
//Given the perimeter and the area of a triangle, devise a function that returns the length of the sides of all triangles that fit those specifications. The length of the sides must be integers. Sort results in ascending order.
//triangle(perimeter, area) ➞ [[s1, s2, s3]]
//Examples
//triangle(12, 6) ➞ [[3, 4, 5]]
//
//triangle(45, 97.42786) ➞ [[15, 15, 15]]
//
//triangle(70, 210) ➞ [[17, 25, 28], [20, 21, 29]]
//
//triangle(3, 0.43301) ➞ [[1, 1, 1]]
//Notes
//Area is rounded to hundred thousandth (5 decimal places).
//e.g. 59.444441 would round to 59.44444.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(triangle(3, 0.43301), [[1, 1, 1]])
//Test.assertSimilar(triangle(201, 49.99937), [[1, 100, 100]])
//Test.assertSimilar(triangle(98, 420), [[24, 37, 37], [25, 34, 39], [29, 29, 40]])
//Test.assertSimilar(triangle(70, 210), [[17, 25, 28], [20, 21, 29]])
//Test.assertSimilar(triangle(30, 30), [[5, 12, 13]])
//Test.assertSimilar(triangle(1792, 55440), [[170, 761, 861], [291, 626, 875]])
//Test.assertSimilar(triangle(150, 420), [[26, 51, 73]])
//Test.assertSimilar(triangle(864, 23760), [[132, 366, 366], [135, 352, 377]])

