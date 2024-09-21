

//title: Snail Crawl out of the Bucket

//tags: algorithms,math

//url: https://edabit.com/challenge/JDKfDGtFxb92dj4SQ

//Description:
//A snail fell into a bucket and wanted to crawl out. Assuming we already know the snail can climb 5cm per minute, the snail can crawl for 30 minutes continuously and then needs to rest for 10 minutes. When it is resting it will slide down 30cm.
//How many minutes will it take for the snail to crawl out from different depths? Create a function that takes the bucket depth (the unit is cm) as an argument and returns the time in minutes.
//if depth = 270
//the snail crawling process
//process: (150 - 30) +  150
//minutes: (30+10) + 150 / 5
//it will take 70 minutes
//the last 150cm, the snail doesn't need a rest
//Examples
//cal(31) ➞ 7
//
//cal(150) ➞ 30
//
//cal(200) ➞ 56
//Notes
//The depth is a positive integer.
//If the time is less than one minute it still counts as one minute.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(cal(31), 7, "Examples 1")
//Test.assertEquals(cal(150), 30, "Examples 2")
//Test.assertEquals(cal(200), 56, "Examples 3")
//Test.assertEquals(cal(15), 3)
//Test.assertEquals(cal(151), 47)
//Test.assertEquals(cal(160), 48)
//Test.assertEquals(cal(300), 92)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: 12 vs 24 Hours

//tags: dates,formatting,strings

//url: https://edabit.com/challenge/Xe6bBpEhgyFDGFzgm

//Description:
//Create a function that converts 12-hour time to 24-hour time or vice versa. Return the output as a string.
//Examples
//convertTime("12:00 am") ➞ "0:00"
//
//convertTime("6:20 pm") ➞ "18:20"
//
//convertTime("21:00") ➞ "9:00 pm"
//
//convertTime("5:05") ➞ "5:05 am"
//Notes
//A 12-hour time input will be denoted with an am or pm suffix.
//A 24-hour input time contains no suffix.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(convertTime("12:00 am"), "0:00")
//Test.assertEquals(convertTime("6:20 pm"), "18:20")
//Test.assertEquals(convertTime("21:00"), "9:00 pm")
//Test.assertEquals(convertTime("5:05"), "5:05 am")

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: It`s a Meteor!

//tags: algebra,algorithms,games,math,validation

//url: https://edabit.com/challenge/HM5JLH5327MKQNxDc

//Description:
//In a video game, a meteor will fall toward the main character's home planet. Given the meteor's trajectory as a string in the form y = mx + b and the character's position as an array pair of [x, y], return true if the meteor will hit the character and false if it will not.
//Examples
//willHit("y = 2x - 5", [0, 0]) ➞ false
//
//willHit("y = -4x + 6", [1, 2]) ➞ true
//
//willHit("y = 2x + 6", [3, 2]) ➞ false
//Notes
//The b value will never be zero or blank.
//The m value will always be an integer.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(willHit("y = 2x - 5", [0, 0]), false)
//Test.assertEquals(willHit("y = -4x + 6", [1, 2]), true)
//Test.assertEquals(willHit("y = -4x + 6", [2, 2]), false)
//Test.assertEquals(willHit("y = 3x - 8", [4, 4]), true)
//Test.assertEquals(willHit("y = 2x + 6", [3, 2]), false)
//Test.assertEquals(willHit("y = -3x + 15", [5, 0]), true)

