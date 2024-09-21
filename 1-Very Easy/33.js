

//title: Volume of a Box

//tags: geometry,math,objects

//url: https://edabit.com/challenge/ms3q5GYSpFpwxeFWX

//Description:
//Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//Examples
//volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//
//volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//
//volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
//Notes
//Don't forget to return the result.
//Remember that the values are in an object.
//Volume is length * width * height.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(volumeOfBox({width: 11,length: 1, height: 2}), 22)
//Test.assertEquals(volumeOfBox({width: 1, length: 5,  height: 3}), 15)
//Test.assertEquals(volumeOfBox({width: 2, length: 1,  height: 1}), 2)
//Test.assertEquals(volumeOfBox({width: 2, length: 6,  height: 5}), 60)
//Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 3}), 30)
//Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 1}), 10)

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Recreating the abs() Function

//tags: language_fundamentals,math,numbers

//url: https://edabit.com/challenge/FaS5DP8SeAN43KPJS

//Description:
//The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.
//Create a function that recreates this functionality.
//Examples
//absolute(-1.217197940) ➞ 1.21719794
//
//absolute(-12.1320) ➞ 12.132
// 
//absolute(-544.0) ➞ 544
//
//absolute(4666) ➞ 4666
//
//absolute(-3.14) ➞ 3.14
//
//absolute(250) ➞ 250
//Notes
//Tests will only include valid numbers.
//Don't use the Math.abs() function (it will defeat the purpose of the challenge).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//const excludes = f => !RegExp('Math.abs').test(f)
//Test.assertNotEquals(excludes(absolute), false, "A restricted function is found!")
//​
//let [numVector, resVector] = [
//  [ -5, -3.14, 250, 0, 6.28, 11037, -12.1320, -1.217197940, 434.6022, -130.406, 26.35,
//    -901.732, 868.543, -566.26, 41.05, -889.68, -746.2169, -761.19, 982.503, -733.379,
//    -374.406, 601.091, -833.14, -205.7941, -985.92, -432.627, -624.0324, 450.144, 190.319,
//    640.22, -468.0362, -7.3915, 554.34, -969.15, -892.875, -163.7127, 626.56, 244.125, -140.56,
//    -388.5835, -658.64, -888.92, -689.364, -982.2118, 818.85, 685.15, -104.13, 767.341, -221.47,
//    -763.2578, -75.3508, 166.0908, 521.422, -633.0451, -732.862, 372.371, -369.78, -820.2045,
//    131.145, 154.64, 782.24, -136.921, -395.722, 229.325, 176.452, 740.12, -432.2624, -661.675,
//    156.872, 749.95, -488.386, -659.25, 250.4192, 890.76, 761.384, 806.476, 506.94, 831.81,
//    -169.69, -941.307, 821.302, -665.6106, 39.031, 825.04, 275.973, 929.141, -716.83, -428.563,
//    132.8035, 381.26, -462.211, -249.6488, 702.74, 758.99, 361.37, -266.31, -239.4475, 705.7603,
//    -538.2, -3.37, -589.1788, -797.1114, 748.28, 590.3861, 435.854, -983.71, -224.704, 142.48,
//    521.8522, -740.261, 735.7873
//  ], [
//    5.0, 3.14, 250.0, 0.0, 6.28, 11037.0, 12.132, 1.21719794, 434.6022, 130.406, 26.35, 901.732, 868.543,
//    566.26, 41.05, 889.68, 746.2169, 761.19, 982.503, 733.379, 374.406, 601.091, 833.14, 205.7941, 985.92,
//    432.627, 624.0324, 450.144, 190.319, 640.22, 468.0362, 7.3915, 554.34, 969.15, 892.875, 163.7127, 626.56,
//    244.125, 140.56, 388.5835, 658.64, 888.92, 689.364, 982.2118, 818.85, 685.15, 104.13, 767.341, 221.47,
//    763.2578, 75.3508, 166.0908, 521.422, 633.0451, 732.862, 372.371, 369.78, 820.2045, 131.145, 154.64,
//    782.24, 136.921, 395.722, 229.325, 176.452, 740.12, 432.2624, 661.675, 156.872, 749.95, 488.386, 659.25,
//    250.4192, 890.76, 761.384, 806.476, 506.94, 831.81, 169.69, 941.307, 821.302, 665.6106, 39.031, 825.04,
//    275.973, 929.141, 716.83, 428.563, 132.8035, 381.26, 462.211, 249.6488, 702.74, 758.99, 361.37, 266.31,

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Is the Last Character an "N"?

//tags: conditions,regex,strings,validation

//url: https://edabit.com/challenge/iiSAic33n4wGufQmG

//Description:
//Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
//Examples
//isLastCharacterN("Aiden") ➞ true
//
//isLastCharacterN("Piet") ➞ false
//
//isLastCharacterN("Bert") ➞ false
//
//isLastCharacterN("Dean") ➞ true
//Notes
//The function must return a boolean value ( i.e. true or false).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isLastCharacterN("Aiden"), true)
//Test.assertEquals(isLastCharacterN("Roxy"), false)
//Test.assertEquals(isLastCharacterN("Bert"), false)
//Test.assertEquals(isLastCharacterN("Dean"), true)
//Test.assertEquals(isLastCharacterN("Ian"), true)
//Test.assertEquals(isLastCharacterN("Brian"), true)
//Test.assertEquals(isLastCharacterN("Daniel"), false)

