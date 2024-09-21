

//title: Edabit Experience Points

//tags: arrays,numbers,objects

//url: https://edabit.com/challenge/yX9LqcQ43nEXo5GS2

//Description:
//As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:
//Difficulty	Experience Points
//Very Easy	5XP
//Easy	10XP
//Medium	20XP
//Hard	40XP
//Very Hard	80XP
//Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.
//Examples
//getXP({
//  "Very Easy" : 89,
//  "Easy" : 77,
//  "Medium" : 30,
//  "Hard" : 4,
//  "Very Hard" : 1
//}) ➞ "2055XP"
//
//
//getXP({
//  "Very Easy" : 254,
//  "Easy" : 32,
//  "Medium" : 65,
//  "Hard" : 51,
//  "Very Hard" : 34
//}) ➞ "7650XP"
//
//
//getXP({
//  "Very Easy" : 11,
//  "Easy" : 0,
//  "Medium" : 2,
//  "Hard" : 0,
//  "Very Hard" : 27
//}) ➞ "2255XP"
//Notes
//Return values as a string and make sure to add "XP" to the end.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(getXP({
//  'Very Easy' : 89,
//  'Easy' : 77,
//  'Medium' : 30,
//  'Hard' : 4,
//  'Very Hard' : 1
//}), '2055XP');
//​
//Test.assertEquals(getXP({
//  'Very Easy' : 254,
//  'Easy' : 32,
//  'Medium' : 65,
//  'Hard' : 51,
//  'Very Hard' : 34
//}), '7650XP');
//​
//​
//Test.assertEquals(getXP({
//  'Very Easy' : 11,
//  'Easy' : 0,
//  'Medium' : 2,
//  'Hard' : 0,
//  'Very Hard' : 27
//}), '2255XP');
//​

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Determine If Two Numbers Add up to a Target Value

//tags: arrays,numbers,validation

//url: https://edabit.com/challenge/DtqQY7hLT2WrtMCFW

//Description:
//Given two unique integer arrays a and b, and an integer target value v, create a function to determine whether there is a pair of numbers that add up to the target value v, where one number comes from one array a and the other comes from the second array b.
//Return true if there is a pair that adds up to the target value and false otherwise.
//Examples
//sumOfTwo([1, 2], [4, 5, 6], 5) ➞ true
//
//sumOfTwo([1, 2], [4, 5, 6], 8) ➞ true
//
//sumOfTwo([1, 2], [4, 5, 6], 3) ➞ false
//
//sumOfTwo([1, 2], [4, 5, 6], 9) ➞ false
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(sumOfTwo([1,2,3], [10,20,30,40,50], 42), true)
//Test.assertEquals(sumOfTwo([1,2,3], [10,20,30,40,50], 44), false)
//Test.assertEquals(sumOfTwo([1,2,3], [10,20,30,40,50], 11), true)
//Test.assertEquals(sumOfTwo([1,2,3], [10,20,30,40,50], 60), false)
//Test.assertEquals(sumOfTwo([1,2,3], [10,20,30,40,50], 53), true)
//Test.assertEquals(sumOfTwo([1,2,3], [10,20,30,40,50], 4), false)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: A Simple Equation

//tags: algebra,algorithms,math,numbers

//url: https://edabit.com/challenge/sSmDPWAoTZ4CSxCLk

//Description:
//Mubashir needs your help to make a simple equation. Create a function which takes three numbers: a, b and c, and returns an equation as a string using simple arithmetic operators (+, -, *, /).
//Return any one of the possible answers to pass the tests. If there is no equation between a,b and c then return "".
//Examples
//simpleEquation(1, 2, 3) ➞ "1+2=3" or "2+1=3" or "3-2=1" or "3-1=2"
//
//simpleEquation(2, 2, 4) ➞ "2+2=4" or "2*2=4" or "4/2=2" or "4-2=2"
//
//simpleEquation(6, 2, 3) ➞ "2*3=6" or "3*2=6" or "6/2=3" or "6/3=2"
//Notes
//N/A

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(simpleEquation(1,2,3)=="1+2=3"||simpleEquation(1,2,3)=="2+1=3"||simpleEquation(1,2,3)=="3-2=1"||simpleEquation(1,2,3)=="3-1=2", true)  
//Test.assertSimilar(simpleEquation(2,2,4)=="2+2=4"||simpleEquation(2,2,4)=="2*2=4"||simpleEquation(2,2,4)=="4-2=2"||simpleEquation(2,2,4)=="4/2=2", true)  
//Test.assertSimilar(simpleEquation(6,2,3)=="2*3=6"||simpleEquation(6,2,3)=="3*2=6"||simpleEquation(6,2,3)=="6/2=3"||simpleEquation(6,2,3)=="6/3=2", true)  
//Test.assertSimilar(simpleEquation(6,5,4),"")  
//Test.assertSimilar(simpleEquation(2,3,4),"")
//​
////Mubashir

