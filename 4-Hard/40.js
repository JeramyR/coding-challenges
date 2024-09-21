

//title: Simple Counting

//tags: logic,loops,math,numbers

//url: https://edabit.com/challenge/TTdGudimT4HSyrEhC

//Description:
//Mubashir needs your help to count a specific digit in an array.
//You have to create a function that takes two integers n and d and makes an array of squares of all numbers from 0...<= n and returns the count of the digits d in the array.
//Examples
//countDigits(10, 1) ➞ 4
//// Squared array from 0 to 10 = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
//// Digit 1 appeared 4 times in the array
//
//countDigits(25, 2) ➞ 9
//
//countDigits(10, 1) ➞ 4
//Notes
//d will always be 0<=d<10.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(countDigits(10, 1), 4)
//Test.assertEquals(countDigits(25, 2), 9)
//Test.assertEquals(countDigits(17, 3), 1)
//Test.assertEquals(countDigits(5750, 0), 4700)
//Test.assertEquals(countDigits(11011, 2), 9481)
//Test.assertEquals(countDigits(12224, 8), 7733)
//Test.assertEquals(countDigits(11549, 1), 11905)
//Test.assertEquals(countDigits(14550, 7), 8014)
//Test.assertEquals(countDigits(8304, 7), 3927)
//Test.assertEquals(countDigits(10576, 9), 7860)
//Test.assertEquals(countDigits(12526, 1), 13558)
//Test.assertEquals(countDigits(7856, 4), 7132)
//Test.assertEquals(countDigits(14956, 1), 17267)
//// Mubashir

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Scoring a Field Goal

//tags: arrays,strings,validation

//url: https://edabit.com/challenge/uauDJo55B8nYc9mLZ

//Description:
//In (American) Football, a team can score if they manage to kick a ball through the goal (i.e. above the crossbar and between the uprights).
//Create a function that returns true if the ball 0 goes through the goal. You will be given an array of arrays.
//Examples
//isGoalScored([
//  ["  #     #  "],
//  ["  #  0  #  "],
//  ["  #     #  "],
//  ["  #######  "],
//  ["     #     "],
//  ["     #     "],
//  ["     #     "]
//]) ➞ true
//
//isGoalScored([
//  ["  #0    #  "],
//  ["  #     #  "],
//  ["  #     #  "],
//  ["  #######  "],
//  ["     #     "],
//  ["     #     "],
//  ["     #     "]
//]) ➞ true
//
//isGoalScored([
//  ["  #     #  "],
//  ["  #     #  "],
//  ["  #     # 0"],
//  ["  #######  "],
//  ["     #     "],
//  ["     #     "],
//  ["     #     "]
//]) ➞ false
//Notes
//All goals will be of the same size.
//All arrays will be of equal length (11).
//A team can never score if it hits the crossbar or goes underneath it.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isGoalScored([
//  ["  #     #  "],
//  ["  #  0  #  "],
//  ["  #     #  "],
//  ["  #######  "],
//  ["     #     "],
//  ["     #     "],
//  ["     #     "]
//]), true)
//​
//Test.assertEquals(isGoalScored([
//  ["  #     #  "],
//  ["  #     #  "],
//  ["  #   0 #  "],
//  ["  #######  "],
//  ["     #     "],
//  ["     #     "],
//  ["     #     "]
//]), true)
//​
//Test.assertEquals(isGoalScored([
//  ["  #0    #  "],
//  ["  #     #  "],
//  ["  #     #  "],
//  ["  #######  "],

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Burglary Series (05): Third Most Expensive

//tags: arrays,loops,objects

//url: https://edabit.com/challenge/3hDDMWvmMQ6pFqqmg

//Description:
//Time to call your lover to inform what he/she lost in the burglary.
//Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.
//Examples
//thirdMostExpensive({}) ➞ false
//
//thirdMostExpensive({ piano: 100, tv: 200 }) ➞ false
//
//thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })  ➞ "stereo"
//
//thirdMostExpensive({ piano: 1000, tv: 500, ball: 10 , mirror: 200, }) ➞ "mirror"
//Notes
//All prices will be of different monetary values.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(thirdMostExpensive({}), false)
//Test.assertEquals(thirdMostExpensive({piano: 100}), false)
//Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200 }), false)
//Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200, tv: 10 }), "tv")
//Test.assertEquals(thirdMostExpensive({piano: 100, stereo: 200, tv: 10, timmy: 500 }), "piano")
//Test.assertEquals(thirdMostExpensive({computer: 1000, piano: 500, stereo: 200, tv: 10, timmy: 1 }), "stereo")

