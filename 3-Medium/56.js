

//title: Sum of all Evens in a Matrix

//tags: arrays,control_flow,loops,math

//url: https://edabit.com/challenge/yiMSg6cNNCeJDQo3b

//Description:
//Create a function that returns the sum of all even elements in a 2D matrix.
//Examples
//sumOfEvens([
//  [1, 0, 2],
//  [5, 5, 7],
//  [9, 4, 3]
//]) ➞ 6
//
//// 2 + 4 = 6
//
//sumOfEvens([
//  [1, 1],
//  [1, 1]
//]) ➞ 0
//
//sumOfEvens([
//  [42, 9],
//  [16, 8]
//]) ➞ 66
//
//sumOfEvens([
//  [],
//  [],
//  []
//]) ➞ 0
//Notes
//Submatrices will be of equal length.
//Return 0 if the 2D matrix only consists of empty submatrices.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumOfEvens([
//    [1, 5, 1, 3], 
//    [4, 1, 2, 0], 
//    [6, 9, 7, 4], 
//    [5, 1, 2, 6]
//  ]), 24)
//  
//Test.assertEquals(sumOfEvens([
//    [1, 0, 1],
//    [33, 1, 2],
//    [15, 9, 1],
//    [5, 1, 979]
//  ]), 2)
//  
//Test.assertEquals(sumOfEvens([
//    [2, 19, 5, 43], 
//    [67, 2, 0, 12]
//  ]), 16)
//  
//Test.assertEquals(sumOfEvens([
//    [1, 3, 7, 9], 
//    [11, 13, 15, 17], 
//    [19, 21, 23, 25]
//  ]), 0)
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Record Temperatures

//tags: arrays,loops

//url: https://edabit.com/challenge/oR2wK4q7Z8wfWr7CJ

//Description:
//You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.
//The records array contains the all-time record low/high temperatures for that day of the week.
//[[record low, record high], ...]
//The current week array contains the daily low/high temperatures for each day of the current week.
//[[daily low, daily high], ...]
//A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.
//Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.
//There may be multiple record temperatures in a week.
//If there are no broken records return the original records array.
//Example
////             sun       mon      tues       wed      thur      fri       sat
//recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
//            [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])
//
//➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]
//The previous record low for Monday was 24. The current week's low for Monday was 19. So 19 replaces 24 as Monday's new record low.
//Notes
//There won't be a record high and record low set on the same day.
//Index 0 will always be the low and index 1 will always be the high [low, high].
//For reference these temps are °F but you do not need to convert any temperatures.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(recordTemps([[34, 82], [24, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]],
//                              [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]]), 
//                              [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]);
//Test.assertSimilar(recordTemps(
//        [
//          [25, 80],
//          [27, 88],
//          [19, 88],
//          [23, 85],
//          [21, 89],
//          [23, 78],
//          [17, 79],
//        ],
//        [
//          [40, 70],
//          [41, 68],
//          [45, 68],
//          [39, 65],
//          [44, 72],
//          [43, 69],
//          [37, 68],
//        ]
//      ), [
//      [25, 80],
//      [27, 88],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (03): Is It Gone?

//tags: objects,strings

//url: https://edabit.com/challenge/FBj5P49wwFzj2Jnfr

//Description:
//Your spouse is not concerned with the loss of material possessions but rather with his/her favorite pet. Is it gone?!
//Given an object of the stolen items and a string in lowercase representing the name of the pet (e.g. "rambo"), return:
//"Rambo is gone..." if the name is on the list.
//"Rambo is here!" if the name is not on the list.
//Note that the first letter of the name in the return statement is capitalized.
//Examples
//const obj = {
//  tv: 30,
//  timmy: 20,
//  stereo: 50,
//} ➞ "Timmy is gone..."
//// Timmy is in the object.
//
//
//const obj = {
//  tv: 30,
//  stereo: 50,
//} ➞ "Timmy is here!"
//// Timmy is not in the stolen list object.
//
//
//const obj = { } ➞ "Timmy is here!"
//// Timmy is not in the object.
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(findIt({}, "rambo"),"Rambo is here!")
//Test.assertEquals(findIt({}, "heman"),"Heman is here!")
//​
//Test.assertEquals(findIt({
//  tv: 30,
//  stereo: 50,
//}, "rocky"),"Rocky is here!")
//​
//Test.assertEquals(findIt({
//  tv: 30,
//  stereo: 50,
//}, "spiderman"),"Spiderman is here!")
//​
//Test.assertEquals(findIt({
//  tv: 30,
//  stereo: 50,
//  julius: 100,                       
//}, "julius"),"Julius is gone...")
//​
//Test.assertEquals(findIt({
//  tv: 30,
//  stereo: 50,
//  batman: 200,                       
//}, "batman"),"Batman is gone...")

