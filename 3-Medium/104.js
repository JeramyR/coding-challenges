

//title: Rearrange the Number

//tags: numbers,sorting

//url: https://edabit.com/challenge/gGbtZXnfj79GaPFc8

//Description:
//Given a number, return the difference between the maximum and minimum numbers that can be formed when the digits are rearranged.
//Examples
//rearrangedDifference(972882) ➞ 760833
//// 988722 - 227889 = 760833
//
//rearrangedDifference(3320707) ➞ 7709823
//// 7733200 - 23377 = 7709823
//
//rearrangedDifference(90010) ➞ 90981
//// 91000 - 19 = 90981
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(rearrangedDifference(9092564), 9719721)
//Test.assertEquals(rearrangedDifference(1308821), 8719722)
//Test.assertEquals(rearrangedDifference(8386568), 5319765)
//Test.assertEquals(rearrangedDifference(7794084), 9429651)
//Test.assertEquals(rearrangedDifference(6366093), 9329661)
//Test.assertEquals(rearrangedDifference(7863060), 8729622)
//Test.assertEquals(rearrangedDifference(3368327), 6429654)
//Test.assertEquals(rearrangedDifference(7218787), 7599933)
//Test.assertEquals(rearrangedDifference(7723188), 7639533)
//Test.assertEquals(rearrangedDifference(8816317), 7739523)
//Test.assertEquals(rearrangedDifference(8824349), 7539543)
//Test.assertEquals(rearrangedDifference(3320707), 7709823)
//Test.assertEquals(rearrangedDifference(1695488), 8429652)
//Test.assertEquals(rearrangedDifference(2120034), 4309866)
//Test.assertEquals(rearrangedDifference(5300586), 8619732)
//Test.assertEquals(rearrangedDifference(3538814), 7519743)
//Test.assertEquals(rearrangedDifference(1336939), 8629632)
//Test.assertEquals(rearrangedDifference(6290200), 9619731)
//Test.assertEquals(rearrangedDifference(5268866), 6299964)
//Test.assertEquals(rearrangedDifference(5155458), 7099983)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Count the Towers

//tags: arrays,strings

//url: https://edabit.com/challenge/LcEFe7PsxTqciY62v

//Description:
//Create a function that counts the number of towers.
//Examples
//count_towers([
//  ["     ##         "],
//  ["##   ##        ##"],
//  ["##   ##   ##   ##"],
//  ["##   ##   ##   ##"]
//]) ➞ 4
//
//count_towers([
//  ["                         ##"],
//  ["##             ##   ##   ##"],
//  ["##        ##   ##   ##   ##"],
//  ["##   ##   ##   ##   ##   ##"]
//]) ➞ 6
//
//count_towers([
//  ["##"],
//  ["##"]
//]) ➞ 1
//Notes
//You are given a 2D matrix.
//Towers are two characters in length.
//Towers are made only of the character #.
//Some tests have no towers, return 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countTowers([
//  ["     ##          "],
//  ["##   ##        ##"],
//  ["##   ##   ##   ##"],
//  ["##   ##   ##   ##"]
//]), 4)
//​
//Test.assertEquals(countTowers([
//  ["                         ##"],
//  ["##             ##   ##   ##"],
//  ["##        ##   ##   ##   ##"],
//  ["##   ##   ##   ##   ##   ##"]
//]), 6)
//​
//Test.assertEquals(countTowers([
//  ["##"],
//  ["##"]
//]), 1)
//​
//Test.assertEquals(countTowers([
//  [""]
//]), 0)
//​
//Test.assertEquals(countTowers([
//  ["                                              "],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Box Completely Filled?

//tags: formatting,strings,validation

//url: https://edabit.com/challenge/TwxkHyzwiZyHhcTgu

//Description:
//Create a function that checks if the box is completely filled with the asterisk symbol *.
//Examples
//completelyFilled([
//  "#####",
//  "#***#",
//  "#***#",
//  "#***#",
//  "#####"
//]) ➞ true
//
//completelyFilled([
//  "#####",
//  "#* *#",
//  "#***#",
//  "#***#",
//  "#####"
//]) ➞ false
//
//completelyFilled([
//  "###",
//  "#*#",
//  "###"
//]) ➞ true
//
//completelyFilled([
//  "##",
//  "##"
//]) ➞ true
//Notes
//Boxes of size n <= 2 are considered automatically filled (see example #4).
//Empty space will always be a space character (" ").

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(completelyFilled([
//    "#"
//  ]), true)
//Test.assertEquals(completelyFilled([
//    "##", 
//    "##"
//  ]), true)
//Test.assertEquals(completelyFilled([
//    "###", 
//    "#*#", 
//    "###"
//  ]), true)
//Test.assertEquals(completelyFilled([
//    "######", 
//    "#****#", 
//    "#****#", 
//    "#****#", 
//    "#****#", 
//    "######"
//  ]), true)
//Test.assertEquals(completelyFilled([
//    "#####", 
//    "#***#", 
//    "#***#", 
//    "#***#", 

