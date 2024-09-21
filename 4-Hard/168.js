

//title: Track the Robot (Part 1)

//tags: arrays,loops,strings

//url: https://edabit.com/challenge/t3iJRARc9K9x9AAdr

//Description:
//A robot has been given a list of movement instructions. Each instruction is either left, right, up or down, followed by a distance to move. The robot starts at [0, 0]. You want to calculate where the robot will end up and return its final position as an array.
//To illustrate, if the robot is given the following instructions:
//["right 10", "up 50", "left 30", "down 10"]
//It will end up 20 left and 40 up from where it started, so we return [-20, 40].
//Examples
//trackRobot(["right 10", "up 50", "left 30", "down 10"]) ➞ [-20, 40]
//
//trackRobot([]) ➞ [0, 0]
//// If there are no instructions, the robot doesn't move.
//
//trackRobot(["right 100", "right 100", "up 500", "up 10000"]) ➞ [200, 10500]
//Notes
//The only instructions given will be left, right, up or down.
//The distance after the instruction is always a positive whole number.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertSimilar(trackRobot(["right 10", "up 50", "left 30", "down 10"]),[-20,40])
//Test.assertSimilar(trackRobot([]),[0,0])
//Test.assertSimilar(trackRobot(["left 10", "left 100", "left 1000", "left 10000"]),[-11110,0])
//Test.assertSimilar(trackRobot(["right 100", "right 100", "up 500", "up 10000"]),[200,10500])
//Test.assertSimilar(trackRobot(["left 10", "right 10", "down 10", "up 10"]),[ 0, 0 ])

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Super-d Numbers

//tags: algorithms,numbers

//url: https://edabit.com/challenge/fw8qrxpz2iGWh5QcE

//Description:
//A number n becomes a super-d number when, for any digit d from 2 up to 9, the result of d * nᵈ contains d consecutive digits equal to d.
//Given a positive integer n, implement a function that returns:
//"Super-d Number" if n is a super-d number, replacing the letterd with the digit (any from 2 up to 9) that makes it super;
//"Normal Number" if n is not a super-d number.
//Examples
//isSuperD(19) ➞ "Super-2 Number"
//// when d = 2
//// 2 * 19² = 722
//// There are two (d) consecutives digits equal to 2 (d)
//
//isSuperD(753) ➞ "Super-3 Number"
//// when d = 3
//// 3 * 753³ = 1280873331
//// There are three (d) consecutives digits equal to 3 (d)
//
//isSuperD(1168) ➞ "Super-4 Number"
//// when d = 4
//// 4 * 1168⁴ = 7444428488704
//// There are four (d) consecutives digits equal to 4 (d)
//
//isSuperD(24) ➞ "Normal Number"
//// No cases where d * 24ᵈ (with d being any digit from 2 up to 9)...
//// ...leads to a result containing d consecutive digits equal to d
//Notes
//Any given n will be a positive integer greater or equal to 0.

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(isSuperD(19), "Super-2 Number", "Example #1");
//Test.assertEquals(isSuperD(753), "Super-3 Number", "Example #2");
//Test.assertEquals(isSuperD(1168), "Super-4 Number", "Example #3");
//Test.assertEquals(isSuperD(24), "Normal Number", "Example #4");
//Test.assertEquals(isSuperD(20379), "Super-5 Number");
//Test.assertEquals(isSuperD(185423), "Super-8 Number");
//Test.assertEquals(isSuperD(1170), "Normal Number");
//Test.assertEquals(isSuperD(118), "Normal Number");
//Test.assertEquals(isSuperD(93568867), "Super-9 Number");
//Test.assertEquals(isSuperD(333), "Super-2 Number");
//Test.assertEquals(isSuperD(107), "Super-2 Number");
//Test.assertEquals(isSuperD(1184321), "Super-7 Number");
//Test.assertEquals(isSuperD(10098023246), "Normal Number");
//Test.assertEquals(isSuperD(1045361), "Super-6 Number");
//Test.assertEquals(isSuperD(0), "Normal Number", "Paradoxical Test");

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


//title: Self-Descriptive Numbers

//tags: loops,numbers,validation

//url: https://edabit.com/challenge/BbXHMKZLPmRdmzucf

//Description:
//The number 10213223 is self-descriptive. Count the number of zeros, ones, twos, and threes that are contained in this number and you have 1 zero, 2 ones, 3 twos, 2 threes, but that is a replica of the number itself 10|21|32|23.
//Write a function that returns true if its argument is a self-descriptive number, false if not.
//Examples
//selfDescriptive(22) ➞ true
//
//selfDescriptive(3999) ➞ false
//
//selfDescriptive(31331419) ➞ true
//
//selfDescriptive(21321316) ➞ false
//
//selfDescriptive(4132232416171) ➞ false
//
//selfDescriptive(31331819) ➞ true
//Notes
//Since the number's descriptors are always in pairs, any self-descriptive number must have an even number of digits.
//The largest self-descriptive number possible is reportedly 71322723161814151019 (see Resources tab).

//code area
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////

//tests:

//Test.assertEquals(selfDescriptive(10313317), true)
//Test.assertEquals(selfDescriptive(41322324151819), true)
//Test.assertEquals(selfDescriptive(3133141), false)
//Test.assertEquals(selfDescriptive(22), true)
//Test.assertEquals(selfDescriptive(2), false)
//Test.assertEquals(selfDescriptive(21322313), false)
//Test.assertEquals(selfDescriptive(201314), false)
////Test.assertEquals(selfDescriptive(613223141526171819), true)

